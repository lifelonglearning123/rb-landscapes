import type { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/lib/services";
import { AREA_PAGES } from "@/lib/areas";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rblandscapesanddriveways.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/areas", "/portfolio", "/about", "/contact", "/book"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
  }));
  const servicePages = ALL_SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));
  const areaPages = AREA_PAGES.map((a) => ({
    url: `${SITE_URL}/areas/${a.slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...servicePages, ...areaPages];
}
