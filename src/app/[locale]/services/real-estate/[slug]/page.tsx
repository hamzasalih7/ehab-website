import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  getRealEstateService,
  realEstateServices,
} from "@/lib/services-data";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return realEstateServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const service = getRealEstateService(slug);
  if (!service) return {};
  const t = await getTranslations("realEstateServices");
  return {
    title: `${t(`${slug}.title`)} | Ehab Solutions`,
    description: t(`${slug}.description`),
  };
}

export default async function RealEstateDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getRealEstateService(slug);
  if (!service) notFound();

  const t = await getTranslations("realEstateServices");

  return (
    <>
      <PageHero
        title={t(`${slug}.title`)}
        subtitle={t(`${slug}.description`)}
        image={
          service.image ??
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
        }
      />
      <ServiceDetailContent
        slug={slug}
        namespace="realEstateServices"
        icon={service.icon}
        features={service.features}
        defaultService={`real-estate-${slug}`}
      />
      <ContactCTA />
    </>
  );
}
