"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/services-data";

const portfolioImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&q=80",
];

type DigitalServiceDetailProps = {
  slug: string;
  icon: string;
  features: string[];
};

export function DigitalServiceDetail({
  slug,
  icon,
  features,
}: DigitalServiceDetailProps) {
  const tPortfolio = useTranslations("digitalDetail");
  const tDetail = useTranslations("serviceDetail");
  const tCommon = useTranslations("common");

  return (
    <>
      <ServiceDetailContent
        slug={slug}
        namespace="digitalServices"
        icon={icon}
        features={features}
        defaultService={`digital-${slug}`}
        hideContact
      />

      <section className="py-16 bg-white dark:bg-brand-900">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={tPortfolio("portfolioLabel")}
            title={tPortfolio("portfolioTitle")}
            subtitle={tPortfolio("portfolioSubtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-glass group"
              >
                <Image
                  src={src}
                  alt={`${tPortfolio("portfolioItem")} ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/40 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-50 dark:bg-brand-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionHeading title={tDetail("contactForm")} centered />
            <div className="rounded-2xl bg-white dark:bg-brand-800 p-8 shadow-premium border border-gray-100 dark:border-brand-700">
              <ContactForm defaultService={`digital-${slug}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-gray-100 dark:border-brand-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-brand-900 font-semibold shadow-gold hover:opacity-90"
            >
              {tCommon("getQuote")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              {tCommon("whatsapp")}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-brand-600 text-brand-600 dark:border-gold-400 dark:text-gold-400 font-semibold"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
