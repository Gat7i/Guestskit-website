import type { MetadataRoute } from "next";

const BASE = "https://www.guestskit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    // Pages légales en noindex tant que legal.ts est incomplet — incluses pour complétude
    { url: `${BASE}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
