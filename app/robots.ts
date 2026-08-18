import type { MetadataRoute } from "next";
import { site } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/anteprima", "/api"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
