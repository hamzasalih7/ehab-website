"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/Icon";
import type { ServiceNamespace } from "@/lib/services-data";

type ServiceDetailContentProps = {
  slug: string;
  namespace: ServiceNamespace;
  icon: string;
  features: string[];
  defaultService?: string;
  hideContact?: boolean;
};

export function ServiceDetailContent({
  slug,
  namespace,
  icon,
  features,
  defaultService,
  hideContact = false,
}: ServiceDetailContentProps) {
  const t = useTranslations(namespace);
  const tDetail = useTranslations("serviceDetail");

  const benefits = ["1", "2", "3", "4"] as const;
  const steps = ["1", "2", "3", "4"] as const;
  const faqs = ["1", "2", "3"] as const;

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold">
                  <DynamicIcon name={icon} className="w-8 h-8 text-brand-900" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-800 dark:text-white">
                  {tDetail("overview")}
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {t(`${slug}.description`)}
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 p-3 rounded-xl bg-brand-50 dark:bg-brand-800/50"
                  >
                    <Check className="w-5 h-5 text-gold-500 shrink-0" />
                    <span className="text-brand-700 dark:text-gray-200">
                      {t(`${slug}.${f}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-50 dark:bg-brand-800/30 p-6 border border-brand-100 dark:border-brand-700">
              <h3 className="font-semibold text-brand-800 dark:text-white mb-4">
                {tDetail("benefits")}
              </h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    {tDetail(`benefitsList.${b}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-brand-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title={tDetail("process")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-white dark:bg-brand-800 shadow-glass"
              >
                <span className="absolute -top-3 start-6 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-brand-900 font-bold text-sm shadow-gold">
                  {step}
                </span>
                <h3 className="font-semibold text-brand-800 dark:text-white mt-4 mb-2">
                  {tDetail(`processSteps.${step}.title`)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tDetail(`processSteps.${step}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading title={tDetail("faq")} />
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f}
                className="group rounded-2xl bg-white dark:bg-brand-800 border border-gray-100 dark:border-brand-700 overflow-hidden"
              >
                <summary className="flex items-center gap-3 p-5 cursor-pointer font-medium text-brand-800 dark:text-white list-none">
                  <HelpCircle className="w-5 h-5 text-gold-500 shrink-0" />
                  {tDetail(`faqItems.${f}.q`)}
                </summary>
                <p className="px-5 pb-5 ps-13 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {tDetail(`faqItems.${f}.a`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {!hideContact && (
        <section className="py-16 md:py-24 bg-brand-50 dark:bg-brand-900/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <SectionHeading title={tDetail("contactForm")} centered />
              <div className="rounded-2xl bg-white dark:bg-brand-800 p-8 shadow-premium border border-gray-100 dark:border-brand-700">
                <ContactForm defaultService={defaultService ?? slug} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
