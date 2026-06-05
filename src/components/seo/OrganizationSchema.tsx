import { siteConfig } from "@/lib/services-data";

export function OrganizationSchema({ locale }: { locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: "https://ehabsolutions.sa",
    logo: "https://ehabsolutions.sa/logo.png",
    description:
      locale === "ar"
        ? "خدمات أعمال متميزة في المملكة العربية السعودية"
        : "Premium business services in Saudi Arabia",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
      streetAddress: siteConfig.address.en,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: Object.values(siteConfig.social),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
