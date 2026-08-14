// ============================================================
// CONFIGURAZIONE DEL SITO — modifica qui i testi e i contatti
// ============================================================

export const site = {
  nome: "Risvegliarsi",
  claim: "Bed & Benessere",
  comune: "Longobucco",
  provincia: "CS",
  whatsappNumero: "393312543575", // formato internazionale senza + né spazi
  whatsappMessaggioDefault:
    "Ciao! Vorrei avere informazioni sulla disponibilità a Risvegliarsi.",
  email: "info@risvegliarsi.it", // aggiorna con l'indirizzo reale
};

export type Foto = { src: string; alt: string };

export type Camera = {
  slug: "verde" | "senape";
  nome: string;
  sottotitolo: string;
  accento: "petrolio" | "senape";
  descrizione: string;
  dettagli: string[];
  copertina: Foto;
  galleria: Foto[];
};

export const camere: Camera[] = [
  {
    slug: "verde",
    nome: "Camera Acquamarina",
    sottotitolo: "Travi a vista e toni verde acqua",
    accento: "petrolio",
    descrizione:
      "Una camera raccolta sotto le travi in legno originali, in un edificio finemente ristrutturato e ammodernato di recente: pensata per rallentare, con biancheria verde petrolio, luce calda e un bagno privato rivestito in marmo blu-verde.",
    dettagli: [
      "Bagno privato con doccia",
      "Smart TV con Netflix, Prime Video e Disney+",
      "Frigobar",
      "Aria condizionata",
      "Asciugacapelli",
    ],
    copertina: { src: "/images/camera-verde/letto-2.jpg", alt: "Letto della Camera Acquamarina con biancheria verde e asciugamani preparati" },
    galleria: [
      { src: "/images/camera-verde/letto-2.jpg", alt: "Letto con biancheria verde petrolio e asciugamani preparati" },
      { src: "/images/camera-verde/camera-vista.jpg", alt: "Vista della camera con travi in legno" },
      { src: "/images/camera-verde/letto-1.jpg", alt: "Letto matrimoniale, dettaglio" },
      { src: "/images/camera-verde/dettaglio-luce.jpg", alt: "Dettaglio luce calda in camera" },
      { src: "/images/camera-verde/tv.jpg", alt: "Smart TV a muro e appendiabiti" },
      { src: "/images/camera-verde/ingresso.jpg", alt: "Ingresso della camera" },
      { src: "/images/camera-verde/bagno-completo.jpg", alt: "Bagno privato con doccia e sanitari" },
      { src: "/images/camera-verde/bagno-doccia.jpg", alt: "Doccia con soffione e marmo verde" },
      { src: "/images/camera-verde/bagno-lavabo.jpg", alt: "Lavabo del bagno privato" },
      { src: "/images/camera-verde/bagno-rubinetto.jpg", alt: "Dettaglio rubinetteria bagno" },
      { src: "/images/camera-verde/bagno-sanitari.jpg", alt: "Sanitari del bagno privato" },
    ],
  },
  {
    slug: "senape",
    nome: "Camera Senape",
    sottotitolo: "Ferro battuto e tessuti color senape",
    accento: "senape",
    descrizione:
      "Camera dal carattere più rustico ed elegante, con testiera in ferro battuto, biancheria color senape e un bagno privato tutto per sé, in una struttura recentemente restaurata che unisce con cura elementi antichi e comfort moderni.",
    dettagli: [
      "Bagno privato con doccia",
      "Smart TV",
      "Frigobar",
      "Aria condizionata",
      "Scrivania",
    ],
    copertina: { src: "/images/camera-senape/letto-1.jpg", alt: "Letto della Camera Senape con testiera in ferro battuto" },
    galleria: [
      { src: "/images/camera-senape/letto-1.jpg", alt: "Letto con testiera in ferro battuto e biancheria color senape" },
      { src: "/images/camera-senape/camera-vista.jpg", alt: "Vista della Camera Senape con TV e scrivania" },
      { src: "/images/camera-senape/letto-2.jpg", alt: "Dettaglio biancheria color senape" },
      { src: "/images/camera-senape/frigobar.jpg", alt: "Frigobar rifornito in camera" },
      { src: "/images/camera-senape/bagno-doccia.jpg", alt: "Doccia del bagno privato" },
    ],
  },
];

export const servizi = [
  { titolo: "Parcheggio privato", testo: "Posto auto riservato agli ospiti, comodo per chi arriva in macchina a Longobucco." },
  { titolo: "Bagno privato", testo: "Ogni camera ha il proprio bagno con doccia, non condiviso con altri ospiti." },
  { titolo: "Colazione in camera", testo: "Macchina Dolce Gusto, toast, marmellate e Nutella a disposizione." },
  { titolo: "Smart TV", testo: "Netflix, Prime Video, Disney+ e canali in streaming." },
  { titolo: "Aria condizionata", testo: "Climatizzatore con telecomando dedicato in ogni camera." },
  { titolo: "Wi-Fi", testo: "Connessione internet disponibile in tutta la struttura." },
];

export const galleriaComune: Foto[] = [
  { src: "/images/comune/scala-ingresso.jpg", alt: "Scala d'ingresso della struttura" },
  { src: "/images/comune/colazione.jpg", alt: "Angolo colazione con macchina da caffè" },
  { src: "/images/comune/clima.jpg", alt: "Telecomando del climatizzatore" },
];

export const galleriaEsterni: Foto[] = [
  { src: "/images/esterni/facciata-notte-2.webp", alt: "Ingresso principale di Risvegliarsi di sera" },
  { src: "/images/esterni/facciata-notte-1.jpg", alt: "Facciata esterna di Risvegliarsi" },
];

// ============================================================
// COSA FARE A LONGOBUCCO — contenuti da rifinire in seguito
// ============================================================
export type Meta = { titolo: string; testo: string };

export const cosaFare: Meta[] = [
  {
    titolo: "Il borgo storico",
    testo: "Vicoli, scalinate in pietra e architettura tipica della Sila Greca da scoprire a piedi, con calma.",
  },
  {
    titolo: "Il Parco Nazionale della Sila",
    testo: "Longobucco è una delle porte d'accesso alla Sila: boschi, laghi e sentieri di trekking a breve distanza.",
  },
  {
    titolo: "Artigianato tessile locale",
    testo: "Il paese ha una lunga tradizione di tessitura artigianale: vale la pena cercare le botteghe storiche.",
  },
  {
    titolo: "Prodotti tipici e gastronomia",
    testo: "Piatti della tradizione silana e calabrese nei ristoranti e trattorie del centro.",
  },
];

// ============================================================
// RECENSIONI — nessuna recensione reale trovata online al momento
// (struttura appena aperta). Aggiungi qui le recensioni vere man
// mano che arrivano da Google, Booking, Airbnb ecc. Esempio:
// { nome: "Marco", fonte: "Google", testo: "...", valutazione: 5 }
// ============================================================
export type Recensione = {
  nome: string;
  fonte: string;
  testo: string;
  valutazione: number; // 1-5
};

export const recensioni: Recensione[] = [];
