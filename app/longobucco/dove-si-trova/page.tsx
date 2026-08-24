import { doveSiTrova } from "@/data/config";
import SottosezioneLongobuccoPage from "@/components/SottosezioneLongobucco";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dove si trova Longobucco — Risvegliarsi",
  description: "Longobucco si trova in provincia di Cosenza, nel cuore della Sila Greca. Scopri la posizione, il territorio e come arrivare in auto.",
};

export default function DoveSiTrovaPage() {
  return (
    <SottosezioneLongobuccoPage
      titolo="Dove si trova Longobucco"
      intro="Nel cuore della Sila Greca, in provincia di Cosenza."
      contenuti={doveSiTrova}
    />
  );
}
