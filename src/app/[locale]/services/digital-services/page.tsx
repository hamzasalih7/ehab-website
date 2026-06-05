import { setRequestLocale } from "next-intl/server";
import { ServiceHubLayout } from "@/components/sections/ServiceHubLayout";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return generatePageMetadata("digital");
}

export default async function DigitalServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServiceHubLayout
      hubSlug="digital-services"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      translationKey="digitalPage"
      basePath="/services/digital-services"
      defaultFormService="digital-services"
    />
  );
}
