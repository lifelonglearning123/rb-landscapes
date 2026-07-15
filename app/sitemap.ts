import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rblandscapesanddriveways.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/portfolio", "/about", "/contact", "/book"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
  }));
  const servicePages = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...servicePages];
}
