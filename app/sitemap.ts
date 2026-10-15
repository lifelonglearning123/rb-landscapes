import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import { SITE_URL } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/portfolio", "/about", "/contact", "/book"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
  }));
  const servicePages = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));
  const areaPages = AREAS.map((a) => ({
    url: `${SITE_URL}/areas/${a.slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...servicePages, ...areaPages];
}
