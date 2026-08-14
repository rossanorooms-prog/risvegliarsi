import { NextRequest, NextResponse } from "next/server";
import { getOccupazioni, setOccupazioni } from "@/lib/storage";
import { isAdmin } from "@/lib/auth";
import { camere } from "@/data/config";

const SLUG_VALIDI = camere.map((c) => c.slug);

export async function GET() {
  try {
    const data = await getOccupazioni();
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

  const { camera, data, occupata } = await req.json();

  if (!SLUG_VALIDI.includes(camera)) {
    return NextResponse.json({ ok: false, error: "Camera non valida" }, { status: 400 });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
    return NextResponse.json({ ok: false, error: "Data non valida" }, { status: 400 });
  }

  try {
    const occupazioni = await getOccupazioni();
    if (!occupazioni[camera]) occupazioni[camera] = {};

    if (occupata) {
      occupazioni[camera][data] = true;
    } else {
      delete occupazioni[camera][data];
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
