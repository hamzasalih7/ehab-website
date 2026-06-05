import { MetadataRoute } from "next";
import {
  mainServices,
  consultingServices,
  realEstateServices,
  digitalServices,
  serviceCategories,
} from "@/lib/services-data";

const baseUrl = "https://ehabsolutions.sa";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"];
  const staticPages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/services/business-consulting",
    "/services/real-estate",
    "/services/digital-services",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }

    for (const service of mainServices) {
      entries.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const category of serviceCategories.filter((c) => c.hub)) {
      entries.push({
        url: `${baseUrl}/${locale}${category.href}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }

    const hubSubs = [
      { path: "/services/business-consulting", items: consultingServices },
      { path: "/services/real-estate", items: realEstateServices },
      { path: "/services/digital-services", items: digitalServices },
    ];

    for (const hub of hubSubs) {
      for (const service of hub.items) {
        entries.push({
          url: `${baseUrl}/${locale}${hub.path}/${service.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  return entries;
}
