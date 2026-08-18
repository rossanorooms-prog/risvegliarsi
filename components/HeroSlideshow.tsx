"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Foto } from "@/data/config";

export default function HeroSlideshow({ foto, intervalloMs = 5000 }: { foto: Foto[]; intervalloMs?: number }) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (foto.length <= 1) return;
    const timer = setInterval(() => {
      setIndice((i) => (i + 1) % foto.length);
    }, intervalloMs);
    return () => clearInterval(timer);
  }, [foto.length, intervalloMs]);

  return (
    <div className="absolute inset-0">
      {foto.map((f, i) => (
        <Image
          key={f.src}
          src={f.src}
          alt={f.alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === indice ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
