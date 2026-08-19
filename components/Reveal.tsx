"use client";

import { useEffect, useRef, useState } from "react";

type Direzione = "sinistra" | "destra" | "su" | "dissolvenza";

export default function Reveal({
  children,
  direzione = "su",
  ritardoMs = 0,
  className = "",
}: {
  children: React.ReactNode;
  direzione?: Direzione;
  ritardoMs?: number;
  className?: string;
}) {
  const [visibile, setVisibile] = useState(false);
  const nodoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodo = nodoRef.current;
    if (!nodo) return;

    const rect = nodo.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisibile(true);
      return;
    }

    const osservatore = new IntersectionObserver(
      (voci) => {
        if (voci[0]?.isIntersecting) {
          setVisibile(true);
          osservatore.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    osservatore.observe(nodo);
    return () => osservatore.disconnect();
  }, []);

  function stile(): React.CSSProperties {
    const base: React.CSSProperties = {
      transitionProperty: "transform, opacity",
      transitionDuration: "800ms",
      transitionTimingFunction: "ease-out",
      transitionDelay: `${ritardoMs}ms`,
    };
    if (visibile) return { ...base, transform: "translate(0, 0)", opacity: 1 };
    if (direzione === "sinistra") return { ...base, transform: "translateX(-32px)", opacity: 0 };
    if (direzione === "destra") return { ...base, transform: "translateX(32px)", opacity: 0 };
    if (direzione === "dissolvenza") return { ...base, transform: "translate(0, 0)", opacity: 0 };
    return { ...base, transform: "translateY(28px)", opacity: 0 };
  }

  return (
    <div ref={nodoRef} style={stile()} className={className}>
      {children}
    </div>
  );
}
