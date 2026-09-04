import { NextRequest, NextResponse } from "next/server";
import { getOccupazioni, setOccupazioni, type Occupazioni } from "@/lib/storage";
import { isAdmin } from "@/lib/auth";
import { camere } from "@/data/config";

const SLUG_VALIDI: string[] = camere.map((c) => c.slug);
const MASSIMO_NOTTI = 90; // limite di sicurezza per evitare intervalli abnormi per errore

// Versione "pubblica" del calendario: solo occupata/libera, mai i dettagli
// privati sull'ospite (nome, note, numero persone).
function versionePubblica(occupazioni: Occupazioni): Occupazioni {
  const risultato: Occupazioni = {};
  for (const [camera, giorni] of Object.entries(occupazioni)) {
    risultato[camera] = {};
    for (const [data, info] of Object.entries(giorni)) {
      risultato[camera][data] = { occupata: info.occupata };
    }
  }
  return risultato;
}

// Genera l'elenco di date ISO da inizio a fine, inclusi entrambi gli estremi.
function elencoDate(inizio: string, fine: string): string[] {
  const risultato: string[] = [];
  const cursore = new Date(`${inizio}T00:00:00Z`);
  const ultimo = new Date(`${fine}T00:00:00Z`);
  while (cursore <= ultimo && risultato.length <= MASSIMO_NOTTI) {
    risultato.push(cursore.toISOString().slice(0, 10));
    cursore.setUTCDate(cursore.getUTCDate() + 1);
  }
  return risultato;
}

export async function GET() {
  try {
    const occupazioni = await getOccupazioni();
    const admin = await isAdmin();
    const data = admin ? occupazioni : versionePubblica(occupazioni);
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error("Errore lettura calendario:", err);
    return NextResponse.json({ ok: false, error: "Errore nel leggere il calendario" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Non autorizzato" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Richiesta non valida" }, { status: 400 });
  }
  const { camera, data, dataFine, occupata, nome, persone, note } = body;

  if (!SLUG_VALIDI.includes(camera)) {
    return NextResponse.json({ ok: false, error: "Camera non valida" }, { status: 400 });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return NextResponse.json({ ok: false, error: "Data non valida" }, { status: 400 });
  }
  const fineEffettiva = typeof dataFine === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dataFine) ? dataFine : data;
  if (fineEffettiva < data) {
    return NextResponse.json({ ok: false, error: "La data finale precede quella iniziale" }, { status: 400 });
  }

  const giorniDaAggiornare = elencoDate(data, fineEffettiva);
  if (giorniDaAggiornare.length > MASSIMO_NOTTI) {
    return NextResponse.json({ ok: false, error: `L'intervallo è troppo lungo (massimo ${MASSIMO_NOTTI} notti)` }, { status: 400 });
  }

  try {
    const occupazioni = await getOccupazioni();
    if (!occupazioni[camera]) occupazioni[camera] = {};

    if (occupata) {
      const nomePulito = typeof nome === "string" ? nome.trim().slice(0, 80) : undefined;
      const notePulite = typeof note === "string" ? note.trim().slice(0, 400) : undefined;
      const personePulite =
        Number.isInteger(persone) && persone > 0 && persone < 100 ? persone : undefined;

      for (const dataGiorno of giorniDaAggiornare) {
        occupazioni[camera][dataGiorno] = {
          occupata: true,
          ...(nomePulito ? { nome: nomePulito } : {}),
          ...(personePulite ? { persone: personePulite } : {}),
          ...(notePulite ? { note: notePulite } : {}),
        };
      }
    } else {
      for (const dataGiorno of giorniDaAggiornare) {
        delete occupazioni[camera][dataGiorno];
      }
    }

    await setOccupazioni(occupazioni);
    return NextResponse.json({ ok: true, data: occupazioni });
  } catch (err) {
    console.error("Errore salvataggio calendario:", err);
    return NextResponse.json(
      { ok: false, error: "Errore nel salvare la modifica. Controlla il collegamento a Upstash su Vercel." },
      { status: 500 }
    );
  }
}
