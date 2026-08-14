# Risvegliarsi — Bed & Benessere

Sito per la struttura ricettiva "Risvegliarsi" a Longobucco (CS).

## Cosa include
- Home, pagina Camere (2 camere con gallerie foto), Servizi, Disponibilità, Contatti
- Pagina `/admin` protetta da password per segnare le date occupate/libere
- Calendario pubblico di sola lettura in `/disponibilita`
- Pulsante WhatsApp fisso (nessuna prenotazione diretta sul sito)

## Sviluppo locale
```bash
npm install
cp .env.example .env.local   # imposta ADMIN_PASSWORD
npm run dev
```
Apri http://localhost:3000

## Deploy su Vercel (gratuito)
1. Crea un repository GitHub e carica questi file.
2. Vai su vercel.com, "Add New Project", importa il repository.
3. In Vercel → Settings → Environment Variables aggiungi:
   - `ADMIN_PASSWORD` (obbligatoria: la password per entrare in /admin)
   - `UPSTASH_REDIS_REST_URL` e `UPSTASH_REDIS_REST_TOKEN` (facoltative ma consigliate)
4. Deploy.

### Perché Upstash?
Senza un database esterno, il calendario viene salvato in un file locale che
su Vercel NON persiste tra un deploy e l'altro (il filesystem è temporaneo).
Per un calendario che si salva davvero nel tempo, collega un database
Upstash Redis: dalla dashboard Vercel vai su Storage → Marketplace Database →
Upstash → Redis (piano gratuito, migliaia di richieste al mese incluse) e
collega il database al progetto: le due variabili d'ambiente vengono
aggiunte automaticamente.

## Modificare i contenuti
Tutti i testi, le camere, i servizi e il numero WhatsApp si modificano in
un unico file: `data/config.ts`. Le foto si trovano in `public/images/`,
organizzate per cartella (`camera-verde`, `camera-senape`, `esterni`, `comune`).
Basta sostituire i file o aggiungerne di nuovi e aggiornare `data/config.ts`.

## Password admin
Vai su `/admin`, inserisci la password impostata in `ADMIN_PASSWORD`.
Da lì puoi cliccare sui giorni del calendario di ciascuna camera per
segnarli come occupati o liberi.
