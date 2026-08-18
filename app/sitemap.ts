import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { site } from "@/data/config";

// Cartelle da NON includere nella sitemap pubblica:
// - api: non sono pagine
// - admin: area riservata, non deve essere indicizzata
// - anteprima: pagina di lavoro/bozza, non pubblica
const ESCLUSE = new Set(["api", "admin", "anteprima"]);

function trovaRoutes(dir: string, base = ""): string[] {
  const routes: string[] = [];
  const voci = fs.readdirSync(dir, { withFileTypes: true });

  const haPage = voci.some((v) => v.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(v.name));
  if (haPage) routes.push(base === "" ? "/" : base);

  for (const voce of voci) {
    if (!voce.isDirectory()) continue;
    const nome = voce.name;
    // Salta cartelle escluse, route dinamiche ([slug]) e route group ((nome))
    if (ESCLUSE.has(nome) || nome.startsWith("[") || nome.startsWith("(") || nome.startsWith("_")) {
      continue;
    }
    routes.push(...trovaRoutes(path.join(dir, nome), `${base}/${nome}`));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes = trovaRoutes(appDir);

  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
