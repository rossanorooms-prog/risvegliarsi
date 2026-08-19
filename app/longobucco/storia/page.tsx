import { storiaInfo } from "@/data/config";
import SottosezioneLongobuccoPage from "@/components/SottosezioneLongobucco";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Storia e informazioni — Risvegliarsi" };

export default function StoriaPage() {
  return (
    <SottosezioneLongobuccoPage
      titolo="Storia e informazioni"
      intro="Dalle origini romane ai briganti, fino ai giorni nostri."
      contenuti={storiaInfo}
    />
  );
}
