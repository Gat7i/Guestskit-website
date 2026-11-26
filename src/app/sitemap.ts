import type { MetadataRoute } from "next";
import { legalComplete } from "@/lib/legal";

const BASE = "https://www.guestskit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ];
  // Pages légales incluses seulement quand elles sont accessibles (legalComplete=true)
  if (legalComplete) {
    entries.push(
      { url: `${BASE}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
      { url: `${BASE}/confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 }
    );
  }
  return entries;
}
