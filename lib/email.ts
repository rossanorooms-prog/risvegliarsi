import { site } from "@/data/config";

// Invia un'email tramite Resend (resend.com). Se la variabile d'ambiente
// RESEND_API_KEY non è impostata, la funzione non fa nulla: il sito
// continua a funzionare normalmente, semplicemente senza notifiche email
// finché non viene configurata.
export async function inviaEmail(oggetto: string, corpoTesto: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("RESEND_API_KEY non impostata: notifica email saltata.");
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || `${site.nome} <notifiche@${new URL(site.url).hostname}>`,
        to: [site.email],
        subject: oggetto,
        text: corpoTesto,
      }),
    });

    if (!res.ok) {
      const dettaglio = await res.text().catch(() => "");
      console.error("Errore invio email Resend:", res.status, dettaglio);
    }
  } catch (err) {
    console.error("Errore di rete nell'invio email:", err);
  }
}

export async function notificaNuovaRecensione(nome: string, valutazione: number, testo: string) {
  await inviaEmail(
    `Nuova recensione da ${nome} — ${site.nome}`,
    [
      `${nome} ha lasciato una recensione (${valutazione}/5 stelle):`,
      "",
      testo,
      "",
      `Vai su ${site.url}/admin per approvarla o eliminarla.`,
    ].join("\n")
  );
}
