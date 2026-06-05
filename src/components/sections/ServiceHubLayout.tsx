import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { SubServiceCard } from "@/components/sections/SubServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  getNamespaceForHub,
  getSubServices,
  type ServiceItem,
} from "@/lib/services-data";
import { HubQuickActions } from "@/components/sections/HubQuickActions";

type ServiceHubLayoutProps = {
  hubSlug: string;
  heroImage: string;
  translationKey: "consultingPage" | "realEstatePage" | "digitalPage";
  basePath: string;
  defaultFormService: string;
};

export async function ServiceHubLayout({
  hubSlug,
  heroImage,
  translationKey,
  basePath,
  defaultFormService,
}: ServiceHubLayoutProps) {
  const t = await getTranslations(translationKey);
  const tCommon = await getTranslations("common");
  const subServices = getSubServices(hubSlug);
  const namespace = getNamespaceForHub(hubSlug);

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        image={heroImage}
      />

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("intro")}
          </p>
          <HubQuickActions />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title={t("subServicesTitle")} subtitle={t("intro")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subServices.map((service: ServiceItem, i: number) => (
              <SubServiceCard
                key={service.slug}
                slug={service.slug}
                icon={service.icon}
                image={service.image}
                features={service.features}
                namespace={namespace}
                href={`${basePath}/${service.slug}`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <SectionHeading title={tCommon("contactUs")} centered />
          <div className="rounded-2xl bg-white dark:bg-brand-800 p-8 shadow-premium border border-gray-100 dark:border-brand-700">
            <ContactForm defaultService={defaultFormService} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
