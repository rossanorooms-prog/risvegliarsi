import { site } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-inchiostro/10 bg-inchiostro py-10 text-crema">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-display text-2xl tracking-wide">{site.nome}</p>
        <p className="mt-1 font-body text-sm uppercase tracking-widest2 text-crema/60">
          {site.claim}
        </p>
        <p className="mt-6 font-body text-sm text-crema/70">
          {site.comune} ({site.provincia})
        </p>
        <p className="mt-1 font-body text-sm text-crema/70">
          WhatsApp: +{site.whatsappNumero.replace(/^39/, "39 ")}
        </p>
        <p className="mt-8 font-body text-xs text-crema/40">
          © {new Date().getFullYear()} {site.nome}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
