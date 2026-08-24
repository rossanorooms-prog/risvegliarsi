import { storiaInfo } from "@/data/config";
import SottosezioneLongobuccoPage from "@/components/SottosezioneLongobucco";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storia e informazioni su Longobucco — Risvegliarsi",
  description: "Dalle origini bizantine ai briganti, dalle miniere d'argento alla visita di Norman Douglas: la storia di Longobucco (CS), borgo della Sila Greca.",
};

export default function StoriaPage() {
  return (
    <SottosezioneLongobuccoPage
      titolo="Storia e informazioni"
      intro="Dalle origini romane ai briganti, fino ai giorni nostri."
      contenuti={storiaInfo}
    />
  );
}
