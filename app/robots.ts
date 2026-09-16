import type { MetadataRoute } from "next";
import { seo } from "@/content";

/** Permite el rastreo completo y apunta al sitemap. Next lo sirve en /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${seo.url}/sitemap.xml`,
  };
}
