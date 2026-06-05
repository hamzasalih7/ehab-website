import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { getMainService, mainServices } from "@/lib/services-data";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return mainServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const service = getMainService(slug);
  if (!service) return {};
  const t = await getTranslations("mainServices");
  return {
    title: `${t(`${slug}.title`)} | Ehab Solutions`,
    description: t(`${slug}.description`),
  };
}

export default async function MainServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getMainService(slug);
  if (!service) notFound();

  const t = await getTranslations("mainServices");

  return (
    <>
      <PageHero
        title={t(`${slug}.title`)}
        subtitle={t(`${slug}.description`)}
        image={service.image}
      />
      <ServiceDetailContent
        slug={slug}
        namespace="mainServices"
        icon={service.icon}
        features={service.features}
        defaultService={slug}
      />
      <ContactCTA />
    </>
  );
}
