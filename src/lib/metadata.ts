import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type MetaKey =
  | "home"
  | "about"
  | "services"
  | "contact"
  | "consulting"
  | "realEstate"
  | "digital";

export async function generatePageMetadata(key: MetaKey): Promise<Metadata> {
  const t = await getTranslations("meta");
  const titleKey = `${key}Title` as const;
  const descKey = `${key}Description` as const;

  return {
    title: t(titleKey),
    description: t(descKey),
    openGraph: {
      title: t(titleKey),
      description: t(descKey),
      siteName: "Ehab Solutions",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "Ehab Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t(titleKey),
      description: t(descKey),
    },
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}
