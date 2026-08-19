import Link from "next/link";
import type { Meta } from "@/data/config";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function SottosezioneLongobuccoPage({
  titolo,
  intro,
  contenuti,
}: {
  titolo: string;
  intro?: string;
  contenuti: Meta[];
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/longobucco"
        className="font-body text-sm text-inchiostro/50 underline decoration-inchiostro/20 underline-offset-4 hover:text-rosso"
      >
        ← Longobucco
      </Link>

      <h1 className="mt-4 text-center font-display text-4xl text-inchiostro sm:text-5xl">
        {titolo}
      </h1>
      {intro && (
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-inchiostro/70">{intro}</p>
      )}

      <div className="mx-auto mt-4 h-px w-14 bg-oro/50" />

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {contenuti.map((m) => (
          <div key={m.titolo} className="border-t border-oro/30 pt-4">
            <p className="font-display text-xl text-inchiostro">{m.titolo}</p>
            <p className="mt-2 font-body text-sm text-inchiostro/70">{m.testo}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <WhatsAppButton label="Chiedi consigli agli host" fixed={false} />
      </div>
    </div>
  );
}
