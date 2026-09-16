import type { MetadataRoute } from "next";
import { seo } from "@/content";

/** Le dice a Google qué páginas existen. Next lo sirve en /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
