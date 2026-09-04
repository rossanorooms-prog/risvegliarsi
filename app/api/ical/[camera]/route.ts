import { NextRequest, NextResponse } from "next/server";
import { getOccupazioni } from "@/lib/storage";
import { camere, site } from "@/data/config";

const SLUG_VALIDI: string[] = camere.map((c) => c.slug);

function senzaTrattini(dataISO: string) {
  return dataISO.replaceAll("-", "");
}

function aggiungiGiorno(dataISO: string) {
  const d = new Date(`${dataISO}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

function giornoDopo(dataISO: string, altraData: string) {
  return aggiungiGiorno(dataISO) === altraData;
}

export async function GET(req: NextRequest, { params }: { params: { camera: string } }) {
  const { camera } = params;

  if (!SLUG_VALIDI.includes(camera)) {
    return NextResponse.json({ ok: false, error: "Camera non valida" }, { status: 404 });
  }

  const infoCamera = camere.find((c) => c.slug === camera)!;
  const occupazioni = await getOccupazioni();
  const giorniOccupati = Object.entries(occupazioni[camera] || {})
    .filter(([, info]) => info.occupata)
    .map(([data]) => data)
    .sort();

  // Raggruppa le date consecutive in un unico intervallo (una prenotazione),
  // invece di un evento separato per ogni singola notte.
  const intervalli: { inizio: string; fine: string }[] = [];
  for (const data of giorniOccupati) {
    const ultimo = intervalli[intervalli.length - 1];
    if (ultimo && giornoDopo(ultimo.fine, data)) {
      ultimo.fine = data;
    } else {
      intervalli.push({ inizio: data, fine: data });
    }
  }

  const adesso = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const eventi = intervalli
    .map((iv, i) => {
      const dtEnd = aggiungiGiorno(iv.fine); // DTEND è esclusivo per convenzione iCal
      return [
        "BEGIN:VEVENT",
        `UID:risvegliarsi-${camera}-${i}-${senzaTrattini(iv.inizio)}@risvegliarsibedebenessere.it`,
        `DTSTAMP:${adesso}`,
        `DTSTART;VALUE=DATE:${senzaTrattini(iv.inizio)}`,
        `DTEND;VALUE=DATE:${senzaTrattini(dtEnd)}`,
        `SUMMARY:Occupata — ${infoCamera.nome}`,
        "END:VEVENT",
      ].join("\r\n");
    })
    .join("\r\n");

  const corpo = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${site.nome}//Calendario//IT`,
    "CALSCALE:GREGORIAN",
    `X-WR-CALNAME:${site.nome} — ${infoCamera.nome}`,
    eventi,
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");

  return new NextResponse(corpo, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="risvegliarsi-${camera}.ics"`,
    },
  });
}
