import { piattiTipici } from "@/data/config";
import SottosezioneLongobuccoPage from "@/components/SottosezioneLongobucco";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Piatti tipici di Longobucco — Risvegliarsi" };

export default function PiattiTipiciPage() {
  return (
    <SottosezioneLongobuccoPage
      titolo="Piatti tipici di Longobucco"
      intro="I sapori della Sila Greca, tra prodotti di montagna e ricette tramandate nelle famiglie del posto."
      contenuti={piattiTipici}
    />
  );
}
