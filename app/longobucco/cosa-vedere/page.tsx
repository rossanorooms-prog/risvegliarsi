import { cosaVedere } from "@/data/config";
import SottosezioneLongobuccoPage from "@/components/SottosezioneLongobucco";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosa vedere a Longobucco — Risvegliarsi",
  description: "Chiesa Matrice, Torre Civica, il centro storico e il Museo dell'Artigianato Silano: cosa vedere a Longobucco (CS), borgo della Sila Greca.",
};

export default function CosaVederePage() {
  return (
    <SottosezioneLongobuccoPage
      titolo="Cosa vedere a Longobucco"
      intro="Chiese, torri storiche e un centro storico fatto di vicoli stretti e scalinate: ecco cosa non perdere durante la tua visita."
      contenuti={cosaVedere}
    />
  );
}
