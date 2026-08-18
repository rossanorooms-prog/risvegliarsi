import type { MetadataRoute } from "next";
import { site } from "@/data/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nome} — ${site.claim}`,
    short_name: site.nome,
    description: `Bed & Breakfast a ${site.comune} (${site.provincia})`,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#B08D45",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
