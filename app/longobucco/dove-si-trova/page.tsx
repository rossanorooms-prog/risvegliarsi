import { doveSiTrova } from "@/data/config";
import SottosezioneLongobuccoPage from "@/components/SottosezioneLongobucco";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dove si trova Longobucco — Risvegliarsi" };

export default function DoveSiTrovaPage() {
  return (
    <SottosezioneLongobuccoPage
      titolo="Dove si trova Longobucco"
      intro="Nel cuore della Sila Greca, in provincia di Cosenza."
      contenuti={doveSiTrova}
    />
  );
}
