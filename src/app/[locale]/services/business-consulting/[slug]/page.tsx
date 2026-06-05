import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  getConsultingService,
  consultingServices,
} from "@/lib/services-data";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return consultingServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const service = getConsultingService(slug);
  if (!service) return {};
  const t = await getTranslations("consultingServices");
  return {
    title: `${t(`${slug}.title`)} | Ehab Solutions`,
    description: t(`${slug}.description`),
  };
}

export default async function ConsultingDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getConsultingService(slug);
  if (!service) notFound();

  const t = await getTranslations("consultingServices");

  return (
    <>
      <PageHero
        title={t(`${slug}.title`)}
        subtitle={t(`${slug}.description`)}
        image={
          service.image ??
          "https://images.unsplash.com/photo-1554224155-8d04cb8cd7ae?w=1920&q=80"
        }
      />
      <ServiceDetailContent
        slug={slug}
        namespace="consultingServices"
        icon={service.icon}
        features={service.features}
        defaultService={`consulting-${slug}`}
      />
      <ContactCTA />
    </>
  );
}
