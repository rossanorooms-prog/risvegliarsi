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
    nome: "Camera Petrolio",
    sottotitolo: "Travi a vista e toni verde acqua",
    accento: "petrolio",
    descrizione:
      "Una camera raccolta sotto le travi in legno originali, con biancheria verde petrolio e bagno privato rivestito in marmo blu-verde.",
    dettagli: [
      "Bagno privato con doccia",
      "Smart TV con Netflix, Prime Video e Disney+",
      "Frigobar",
      "Aria condizionata",
      "Asciugacapelli",
    ],
    copertina: { src: "/images/camera-verde/camera-vista.jpg", alt: "Vista della Camera Petrolio con travi a vista" },
    galleria: [
      { src: "/images/camera-verde/camera-vista.jpg", alt: "Vista della camera con travi in legno" },
      { src: "/images/camera-verde/letto-1.jpg", alt: "Letto matrimoniale con biancheria verde petrolio" },
      { src: "/images/camera-verde/letto-2.jpg", alt: "Dettaglio del letto con asciugamani preparati" },
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
      "Camera dal carattere più rustico, con testiera in ferro battuto, biancheria color senape e bagno privato dedicato.",
    dettagli: [
      "Bagno privato con doccia",
      "Smart TV",
      "Frigobar",
      "Aria condizionata",
      "Scrivania",
    ],
    copertina: { src: "/images/camera-senape/camera-vista.jpg", alt: "Vista della Camera Senape" },
    galleria: [
      { src: "/images/camera-senape/camera-vista.jpg", alt: "Vista della Camera Senape con TV e scrivania" },
      { src: "/images/camera-senape/letto-1.jpg", alt: "Letto con testiera in ferro battuto" },
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
  { src: "/images/esterni/facciata-notte-1.jpg", alt: "Facciata esterna di Risvegliarsi di sera" },
  { src: "/images/esterni/facciata-notte-2.webp", alt: "Ingresso principale di Risvegliarsi" },
];
