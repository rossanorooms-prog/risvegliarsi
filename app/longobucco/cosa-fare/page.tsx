import { cosaFare } from "@/data/config";
import SottosezioneLongobuccoPage from "@/components/SottosezioneLongobucco";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cosa fare a Longobucco — Risvegliarsi" };

export default function CosaFarePage() {
  return (
    <SottosezioneLongobuccoPage
      titolo="Cosa fare a Longobucco"
      intro="Tra escursioni, artigianato tessile e la vita del borgo: qualche idea per vivere Longobucco da vicino."
      contenuti={cosaFare}
    />
  );
}
