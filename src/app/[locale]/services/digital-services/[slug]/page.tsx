import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { DigitalServiceDetail } from "@/components/sections/DigitalServiceDetail";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { getDigitalService, digitalServices } from "@/lib/services-data";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return digitalServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const service = getDigitalService(slug);
  if (!service) return {};
  const t = await getTranslations("digitalServices");
  return {
    title: `${t(`${slug}.title`)} | Ehab Solutions`,
    description: t(`${slug}.description`),
  };
}

export default async function DigitalDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getDigitalService(slug);
  if (!service) notFound();

  const t = await getTranslations("digitalServices");

  return (
    <>
      <PageHero
        title={t(`${slug}.title`)}
        subtitle={t(`${slug}.description`)}
        image={
          service.image ??
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
        }
      />
      <DigitalServiceDetail
        slug={slug}
        icon={service.icon}
        features={service.features}
      />
      <ContactCTA />
    </>
  );
}
