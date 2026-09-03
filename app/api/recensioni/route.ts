import { NextRequest, NextResponse } from "next/server";
import { getRecensioni, setRecensioni, type Recensione } from "@/lib/storage";
import { isAdmin } from "@/lib/auth";

function generaId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// GET pubblico: restituisce solo le recensioni approvate.
// GET da amministratore autenticato: restituisce tutte (comprese quelle in attesa).
export async function GET() {
  try {
    const tutte = await getRecensioni();
    const admin = await isAdmin();
    const daMostrare = admin ? tutte : tutte.filter((r) => r.approvata);
    // Le più recenti prima
    daMostrare.sort((a, b) => (a.data < b.data ? 1 : -1));
    return NextResponse.json({ ok: true, data: daMostrare });
  } catch (err) {
    console.error("Errore lettura recensioni:", err);
    return NextResponse.json({ ok: false, error: "Errore nel leggere le recensioni" }, { status: 500 });
  }
}

// POST pubblico: un ospite invia una nuova recensione, che resta in
// attesa di approvazione finché un amministratore non la pubblica.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Richiesta non valida" }, { status: 400 });
  }

  const nome = String(body.nome || "").trim().slice(0, 60);
  const testo = String(body.testo || "").trim().slice(0, 600);
  const valutazione = Number(body.valutazione);

  if (!nome || !testo) {
    return NextResponse.json({ ok: false, error: "Nome e recensione sono obbligatori" }, { status: 400 });
  }
  if (!Number.isInteger(valutazione) || valutazione < 1 || valutazione > 5) {
    return NextResponse.json({ ok: false, error: "Valutazione non valida" }, { status: 400 });
  }
  // campo nascosto anti-spam: se compilato, è quasi certamente un bot
  if (body.sito_web) {
    return NextResponse.json({ ok: true });
  }

  try {
    const nuova: Recensione = {
      id: generaId(),
      nome,
      testo,
      valutazione,
      data: new Date().toISOString(),
      approvata: false,
    };
    const tutte = await getRecensioni();
    tutte.push(nuova);
    await setRecensioni(tutte);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Errore salvataggio recensione:", err);
    return NextResponse.json({ ok: false, error: "Errore nel salvare la recensione" }, { status: 500 });
  }
}

// PATCH riservato agli amministratori: approva o elimina una recensione.
export async function PATCH(req: NextRequest) {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ ok: false, error: "Non autorizzato" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const id = body?.id;
  const azione = body?.azione;

  if (!id || !["approva", "elimina"].includes(azione)) {
    return NextResponse.json({ ok: false, error: "Richiesta non valida" }, { status: 400 });
  }

  try {
    const tutte = await getRecensioni();
    let aggiornate: Recensione[];

    if (azione === "elimina") {
      aggiornate = tutte.filter((r) => r.id !== id);
    } else {
      aggiornate = tutte.map((r) => (r.id === id ? { ...r, approvata: true } : r));
    }

    await setRecensioni(aggiornate);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Errore moderazione recensione:", err);
    return NextResponse.json({ ok: false, error: "Errore nel salvare la modifica" }, { status: 500 });
  }
}
