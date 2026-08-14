"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "risveg_cookie_consent";

export default function CookieBanner() {
  const [visibile, setVisibile] = useState(false);

  useEffect(() => {
    try {
      const consenso = localStorage.getItem(STORAGE_KEY);
      if (!consenso) setVisibile(true);
    } catch {
      setVisibile(true);
    }
  }, []);

  function accetta() {
    try {
      localStorage.setItem(STORAGE_KEY, "accettato");
    } catch {
      // se localStorage non è disponibile, nascondiamo comunque il banner per questa sessione
    }
    setVisibile(false);
  }

  if (!visibile) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-oro/30 bg-inchiostro px-5 py-4 text-crema shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center font-body text-sm text-crema/80 sm:text-left">
          Questo sito utilizza solo cookie tecnici necessari al funzionamento
          (es. per l&apos;area riservata amministratore). Consulta la{" "}
          <Link href="/cookie" className="underline hover:text-orochiaro">
            Cookie Policy
          </Link>
          .
        </p>
        <button
          onClick={accetta}
          className="shrink-0 rounded-full bg-oro px-6 py-2 font-body text-sm uppercase tracking-widest2 text-inchiostro transition hover:bg-orochiaro"
        >
          Ho capito
        </button>
      </div>
    </div>
  );
}
