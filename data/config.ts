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
  indirizzo: "Via Mazzini 43, Longobucco (CS)",
  url: "https://www.risvegliarsibedebenessere.it",
};

export type Titolare = { nome: string; whatsappNumero: string };

export const titolari: Titolare[] = [
  { nome: "Maurizio", whatsappNumero: "393312543575" },
  { nome: "Maria Carmela", whatsappNumero: "393331124250" },
];

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
    nome: "Alba",
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
    copertina: { src: "/images/camera-verde/letto-2.jpg", alt: "Letto della camera Alba con biancheria verde e asciugamani preparati" },
    galleria: [
      { src: "/images/camera-verde/letto-vista-ampia.jpg", alt: "Vista ampia del letto con biancheria verde e asciugamani" },
      { src: "/images/camera-verde/letto-2.jpg", alt: "Letto con biancheria verde petrolio e asciugamani preparati" },
      { src: "/images/camera-verde/letto-asciugamani.jpg", alt: "Dettaglio asciugamani preparati sul letto" },
      { src: "/images/camera-verde/camera-vista.jpg", alt: "Vista della camera con travi in legno" },
      { src: "/images/camera-verde/letto-1.jpg", alt: "Letto matrimoniale, dettaglio" },
      { src: "/images/camera-verde/dettaglio-luce.jpg", alt: "Dettaglio luce calda in camera" },
      { src: "/images/camera-verde/scrivania-1.jpg", alt: "Scrivania con sedia e frigobar" },
      { src: "/images/camera-verde/scrivania-2.jpg", alt: "Scrivania con appendiabiti sullo sfondo" },
      { src: "/images/camera-verde/finestra-tv.jpg", alt: "Finestra con tende e smart TV a muro" },
      { src: "/images/camera-verde/finestra-clima.jpg", alt: "Finestra con climatizzatore" },
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
    nome: "Tramonto",
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
    copertina: { src: "/images/camera-senape/letto-1.jpg", alt: "Letto della camera Tramonto con testiera in ferro battuto" },
    galleria: [
      { src: "/images/camera-senape/letto-vista-ampia.jpg", alt: "Vista ampia del letto con testiera in ferro battuto" },
      { src: "/images/camera-senape/letto-1.jpg", alt: "Letto con testiera in ferro battuto e biancheria color senape" },
      { src: "/images/camera-senape/letto-asciugamani.jpg", alt: "Dettaglio asciugamani preparati sul letto" },
      { src: "/images/camera-senape/camera-vista.jpg", alt: "Vista della camera Tramonto con TV e scrivania" },
      { src: "/images/camera-senape/camera-vista-2.jpg", alt: "Vista d'insieme della camera Tramonto" },
      { src: "/images/camera-senape/letto-2.jpg", alt: "Dettaglio biancheria color senape" },
      { src: "/images/camera-senape/finestra.jpg", alt: "Finestra con tende e vista sui tetti del borgo" },
      { src: "/images/camera-senape/tv-appendiabiti.jpg", alt: "Smart TV e appendiabiti" },
      { src: "/images/camera-senape/ingresso-1.jpg", alt: "Ingresso della camera" },
      { src: "/images/camera-senape/ingresso-2.jpg", alt: "Corridoio d'ingresso con travi a vista" },
      { src: "/images/camera-senape/frigobar.jpg", alt: "Frigobar rifornito in camera" },
      { src: "/images/camera-senape/bagno-completo.jpg", alt: "Bagno privato con doccia e sanitari" },
      { src: "/images/camera-senape/bagno-vista.jpg", alt: "Vista del bagno privato" },
      { src: "/images/camera-senape/bagno-doccia.jpg", alt: "Doccia del bagno privato" },
      { src: "/images/camera-senape/bagno-lavabo.jpg", alt: "Lavabo del bagno privato" },
      { src: "/images/camera-senape/bagno-rubinetto.jpg", alt: "Dettaglio rubinetteria bagno" },
    ],
  },
];

export const servizi = [
  { titolo: "Parcheggio privato", testo: "Posto auto riservato agli ospiti, comodo per chi arriva in macchina a Longobucco." },
  { titolo: "Bagno privato", testo: "Ogni camera ha il proprio bagno con doccia, non condiviso con altri ospiti." },
  { titolo: "Colazione in camera", testo: "Dolce o salata, su richiesta. Macchina Dolce Gusto, toast, marmellate e Nutella a disposizione." },
  { titolo: "Check-in immediato", testo: "Basta poggiare le valigie: check-in rapido, senza attese." },
  { titolo: "Smart TV", testo: "Netflix, Prime Video, Disney+ e canali in streaming." },
  { titolo: "Aria condizionata", testo: "Climatizzatore con telecomando dedicato in ogni camera." },
  { titolo: "Wi-Fi", testo: "Connessione internet disponibile in tutta la struttura." },
];

export const galleriaComune: Foto[] = [
  { src: "/images/comune/scala-ingresso.jpg", alt: "Scala d'ingresso della struttura" },
  { src: "/images/comune/colazione.jpg", alt: "Angolo colazione con macchina da caffè" },
  { src: "/images/comune/clima.jpg", alt: "Telecomando del climatizzatore" },
  { src: "/images/comune/asciugamani-cesto.jpg", alt: "Asciugamani piegati in un cestino" },
  { src: "/images/comune/lavabo-dettaglio.jpg", alt: "Dettaglio del lavabo con dispenser di sapone" },
  { src: "/images/comune/baule-antico.jpg", alt: "Baule antico in legno usato come mobile" },
  { src: "/images/comune/baule-chiave.jpg", alt: "Dettaglio della chiave sul baule antico" },
  { src: "/images/comune/baule-cassetti.jpg", alt: "Cassetti del baule antico con maniglie in ottone" },
  { src: "/images/comune/travi-soffitto.jpg", alt: "Travi in legno a vista sul soffitto" },
  { src: "/images/comune/travi-dettaglio.jpg", alt: "Dettaglio ravvicinato delle travi in legno originali" },
  { src: "/images/comune/cuscini.jpg", alt: "Cuscini bianchi preparati sul letto" },
  { src: "/images/comune/appendiabiti.jpg", alt: "Dettaglio dell'appendiabiti in legno" },
];

export const galleriaEsterni: Foto[] = [
  { src: "/images/esterni/facciata-giorno.jpg", alt: "Facciata di Risvegliarsi di giorno" },
  { src: "/images/esterni/facciata-notte-2.webp", alt: "Ingresso principale di Risvegliarsi di sera" },
  { src: "/images/esterni/facciata-notte-1.jpg", alt: "Facciata esterna di Risvegliarsi di sera" },
  { src: "/images/esterni/ingresso-1.jpg", alt: "Ingresso della struttura con porta e finestre in legno" },
  { src: "/images/esterni/ingresso-2.jpg", alt: "Porta d'ingresso e finestre con persiane in legno" },
  { src: "/images/esterni/ingresso-3.jpg", alt: "Dettaglio dell'ingresso con numero civico" },
  { src: "/images/esterni/dettaglio-1.jpg", alt: "Dettaglio della facciata con persiane in legno" },
  { src: "/images/esterni/dettaglio-2.jpg", alt: "Dettaglio del tetto e del comignolo in mattoni" },
  { src: "/images/esterni/dettaglio-3.jpg", alt: "Dettaglio architettonico in cotto sopra la porta" },
];

// ============================================================
// GALLERIA — sezione con foto divise per categoria
// ============================================================
export type GalleriaCategoria = {
  slug: string;
  nome: string;
  foto: Foto[];
};

export const galleria: GalleriaCategoria[] = [
  { slug: "alba", nome: "Alba", foto: camere[0].galleria },
  { slug: "tramonto", nome: "Tramonto", foto: camere[1].galleria },
  { slug: "esterno", nome: "Esterno", foto: galleriaEsterni },
  { slug: "varie", nome: "Varie", foto: galleriaComune },
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
