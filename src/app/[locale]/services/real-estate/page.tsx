import { setRequestLocale } from "next-intl/server";
import { ServiceHubLayout } from "@/components/sections/ServiceHubLayout";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return generatePageMetadata("realEstate");
}

export default async function RealEstatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServiceHubLayout
      hubSlug="real-estate"
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
      translationKey="realEstatePage"
      basePath="/services/real-estate"
      defaultFormService="real-estate"
    />
  );
}
