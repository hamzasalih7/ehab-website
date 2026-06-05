import { setRequestLocale } from "next-intl/server";
import { ServiceHubLayout } from "@/components/sections/ServiceHubLayout";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return generatePageMetadata("consulting");
}

export default async function BusinessConsultingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServiceHubLayout
      hubSlug="business-consulting"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      translationKey="consultingPage"
      basePath="/services/business-consulting"
      defaultFormService="consulting"
    />
  );
}
