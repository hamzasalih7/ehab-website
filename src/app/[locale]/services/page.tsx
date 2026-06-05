import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryHubCard } from "@/components/sections/CategoryHubCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { generatePageMetadata } from "@/lib/metadata";
import { serviceCategories } from "@/lib/services-data";

export async function generateMetadata() {
  return generatePageMetadata("services");
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicesPage");
  const tServices = await getTranslations("services");

  return (
    <>
      <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title={tServices("title")}
            subtitle={tServices("subtitle")}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, i) => (
              <CategoryHubCard
                key={category.slug}
                slug={category.slug}
                icon={category.icon}
                image={category.image}
                href={category.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
