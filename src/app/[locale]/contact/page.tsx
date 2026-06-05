import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/services-data";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export async function generateMetadata() {
  return generatePageMetadata("contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const loc = locale as "en" | "ar";

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-800 dark:text-white mb-6">
                {t("formTitle")}
              </h2>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden h-64 shadow-premium">
                <iframe
                  src={siteConfig.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { Icon: MapPin, label: t("office"), value: siteConfig.address[loc] },
                  { Icon: Clock, label: t("hours"), value: siteConfig.hours[loc] },
                  { Icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                  { Icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-brand-50 dark:bg-brand-800/50 border border-brand-100 dark:border-brand-700"
                  >
                    <item.Icon className="w-5 h-5 text-gold-500 mb-2" />
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-700 dark:text-gray-200 hover:text-gold-500 text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-brand-700 dark:text-gray-200 text-sm">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                {t("whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
