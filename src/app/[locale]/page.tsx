import { setRequestLocale } from "next-intl/server";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeSections } from "@/components/sections/HomeSections";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return generatePageMetadata("home");
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <HomeSections />
    </>
  );
}
