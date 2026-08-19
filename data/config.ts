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
  email: "info@risvegliarsibedebenessere.it",
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
  { titolo: "Bagno privato", testo: "Ogni camera ha il proprio bagno con doccia, completamente privato." },
  { titolo: "Colazione in camera", testo: "Dolce o salata, su richiesta. Macchina Dolce Gusto, toast, marmellate e Nutella a disposizione." },
  { titolo: "Check-in immediato", testo: "Basta poggiare le valigie: check-in rapido, senza attese." },
  { titolo: "Smart TV", testo: "Canali in chiaro e in streaming: se vuoi, puoi collegarci i tuoi account Netflix, Prime Video e Disney+." },
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
  { slug: "varie", nome: "Altre foto", foto: galleriaComune },
];

// ============================================================
// LONGOBUCCO — contenuti divisi in 5 sottosezioni
// ============================================================
export type Meta = { titolo: string; testo: string };

export type SottosezioneLongobucco = {
  slug: string;
  nome: string;
  descrizioneBreve: string;
};

export const sottosezioniLongobucco: SottosezioneLongobucco[] = [
  { slug: "cosa-vedere", nome: "Cosa vedere a Longobucco", descrizioneBreve: "Chiese, torri e il centro storico da scoprire a piedi." },
  { slug: "cosa-fare", nome: "Cosa fare a Longobucco", descrizioneBreve: "Escursioni, artigianato e la vita del borgo." },
  { slug: "dove-si-trova", nome: "Dove si trova Longobucco", descrizioneBreve: "Posizione, distanze e come arrivare." },
  { slug: "piatti-tipici", nome: "Piatti tipici di Longobucco", descrizioneBreve: "I sapori della Sila Greca." },
  { slug: "storia", nome: "Storia e informazioni", descrizioneBreve: "Dalle origini romane ai briganti, fino a oggi." },
  { slug: "dove-dormire", nome: "Dove dormire a Longobucco", descrizioneBreve: "Il posto giusto per il tuo soggiorno: Risvegliarsi." },
];

// Cosa vedere: monumenti, chiese e luoghi di interesse del centro storico
export const cosaVedere: Meta[] = [
  {
    titolo: "Chiesa Matrice di Santa Maria Assunta",
    testo: "La chiesa principale del paese, di origine duecentesca. All'interno custodisce un fonte battesimale in pietra nera di epoca romanico-normanna e una scultura lignea quattrocentesca raffigurante la Madonna col Bambino, opera di artigiani silani.",
  },
  {
    titolo: "Torre Civica (Torre Campanaria)",
    testo: "Simbolo di Longobucco, sorge accanto alla Chiesa Matrice in Piazza Matteotti. Costruita nel XII secolo come torre di avvistamento contro i Saraceni, fu trasformata in campanile intorno al 1700. Gli abitanti la chiamano ancora 'u Campanaru'.",
  },
  {
    titolo: "Il centro storico e le \"vinedde\"",
    testo: "Le caratteristiche stradine strette e intrecciate del borgo, spesso impreziosite da scalinate in pietra. Passeggiando si incontrano portali scolpiti, come quelli di Palazzo Citìno, testimonianza della lavorazione della pietra locale.",
  },
  {
    titolo: "Museo dell'Artigianato Silano e della Difesa del Suolo",
    testo: "Allestito nell'ex Convento dei Frati Francescani, racconta la storia dell'estrazione dell'argento e dell'oreficeria locale. Da qui parte anche la \"Via delle Miniere\", il sentiero che conduce alle antiche cave.",
  },
  {
    titolo: "Mostra Permanente dei Tessuti Artigianali",
    testo: "Longobucco è da secoli un centro di riferimento per la tessitura a mano di tappeti e coperte. La mostra nel centro storico racconta questa tradizione, ancora oggi portata avanti da botteghe familiari.",
  },
  {
    titolo: "Altre chiese del borgo",
    testo: "La Chiesa di San Domenico, con la statua lignea settecentesca del santo; la Chiesa di Santa Maria Maddalena, con un crocifisso ligneo ottocentesco; la Chiesa degli Angeli Custodi del XVII secolo.",
  },
];

// Cosa fare: attività ed esperienze
export const cosaFare: Meta[] = [
  {
    titolo: "La Via delle Miniere",
    testo: "Un percorso storico-naturalistico che dal paese conduce alle antiche cave d'argento, attraverso boschi fitti: una delle escursioni più interessanti nei dintorni di Longobucco.",
  },
  {
    titolo: "Trekking nel Parco Nazionale della Sila",
    testo: "Gran parte del territorio comunale ricade nel Parco della Sila: sentieri, boschi e la possibilità di raggiungere il Lago di Cecita, il più grande lago della Calabria.",
  },
  {
    titolo: "Scoprire l'artigianato tessile",
    testo: "Visitare le botteghe storiche dove si tessono ancora a mano tappeti e coperte con le tecniche tradizionali, tramandate da generazioni.",
  },
  {
    titolo: "Vivere il borgo tra le cantine tipiche",
    testo: "Le tradizionali \"Cantine\" del centro storico, note con i soprannomi dei proprietari, sono il luogo dove assaporare un bicchiere di vino locale e l'ospitalità dei longobucchesi.",
  },
];

// Dove si trova: posizione geografica e come arrivare
export const doveSiTrova: Meta[] = [
  {
    titolo: "Posizione",
    testo: "Longobucco si trova in provincia di Cosenza, nel cuore della Sila Greca, a 784 metri sul livello del mare, alle pendici del Monte Castello. È il quarto comune più esteso della Calabria.",
  },
  {
    titolo: "Il territorio",
    testo: "Buona parte del territorio comunale rientra nel Parco Nazionale della Sila. Il fiume Trionto attraversa la vallata, e a circa trenta chilometri si trova il Lago di Cecita.",
  },
  {
    titolo: "Come arrivare in auto",
    testo: "La strada più comune è uscire a Cosenza e proseguire lungo la statale che sale verso la Sila fino al paese.",
  },
];

// Piatti tipici: le specialità autentiche della tradizione contadina di Longobucco
export const piattiTipici: Meta[] = [
  {
    titolo: "U sacchiattu",
    testo: "Carne di maiale racchiusa nella cotenna del polpaccio, cucita e poi fatta bollire: un piatto antico della tradizione contadina locale.",
  },
  {
    titolo: "A fressurata",
    testo: "Carne di maiale fritta in padella, preparata secondo la ricetta tramandata nelle famiglie di Longobucco.",
  },
  {
    titolo: "I ferriatti al sugo di castrato",
    testo: "Un formato di pasta fatto a mano, condito con il sugo di carne di castrato: uno dei primi piatti più rappresentativi del paese.",
  },
  {
    titolo: "A 'mpanata",
    testo: "La colazione tradizionale del pastore: pane raffermo, siero di latte e ricotta appena fatta.",
  },
  {
    titolo: "I crustuli ammelati e a pasta a cumpetti",
    testo: "Dolci della tradizione natalizia: piccoli impasti fritti, legati insieme con miele. Si accompagnano alle grispedde, dolcetti di pasta frolla e zucchero a velo.",
  },
  {
    titolo: "Patata della Sila e Caciocavallo Silano",
    testo: "Due eccellenze dell'altopiano silano, alla base di molti piatti della cucina di montagna che si trovano ancora oggi nei ristoranti del paese.",
  },
];

// Storia e informazioni
export const storiaInfo: Meta[] = [
  {
    titolo: "Origini",
    testo: "Le origini di Longobucco risalgono all'epoca romana: il nome deriverebbe dal latino \"longa bucca\", che indica una lunga cavità, riferendosi alla conformazione della vallata. Nei secoli il territorio fu frequentato anche da popolazioni bizantine, normanne e longobarde.",
  },
  {
    titolo: "L'argento e i briganti",
    testo: "Nel territorio di Longobucco sono documentati giacimenti d'argento sfruttati almeno dal XII secolo. Le caratteristiche impervie del territorio favorirono anche il fenomeno del brigantaggio, che vide nascere qui figure note come Antonio Santoro, detto \"Re Curemme\".",
  },
  {
    titolo: "Un borgo raccontato dai viaggiatori",
    testo: "Nel 1911 il paese fu visitato dallo scrittore anglo-americano Norman Douglas, che lo descrisse nel suo libro \"Old Calabria\" come una città da sogno delle Mille e una Notte.",
  },
  {
    titolo: "Informazioni pratiche",
    testo: "Comune della provincia di Cosenza, circa 3.600 abitanti, CAP 87066. Il patrono è San Domenico, festeggiato il 4 agosto.",
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
