"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  Shield,
  HeadphonesIcon,
  Award,
  Globe,
  Quote,
  ArrowRight,
} from "lucide-react";
import { CategoryHubCard } from "@/components/sections/CategoryHubCard";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { serviceCategories } from "@/lib/services-data";

const whyIcons = [Globe, Shield, HeadphonesIcon, Award];

export function HomeSections() {
  const tAbout = useTranslations("about");
  const tServices = useTranslations("services");
  const tWhy = useTranslations("whyUs");
  const tTestimonials = useTranslations("testimonials");

  const whyKeys = ["expertise", "compliance", "support", "results"] as const;
  const testimonialKeys = ["1", "2", "3"] as const;

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-premium"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                label={tAbout("label")}
                title={tAbout("title")}
                subtitle={tAbout("description")}
                centered={false}
              />
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 font-semibold hover:gap-3 transition-all"
              >
                {tAbout("learnMore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-brand-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={tServices("label")}
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
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-600 text-brand-600 dark:border-gold-400 dark:text-gold-400 font-semibold hover:bg-brand-600 hover:text-white dark:hover:bg-gold-400 dark:hover:text-brand-900 transition-colors"
            >
              {tServices("viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading label={tWhy("label")} title={tWhy("title")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyKeys.map((key, i) => {
              const Icon = whyIcons[i];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-6 h-full text-center">
                    <div className="w-14 h-14 rounded-xl bg-brand-100 dark:bg-brand-700 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-brand-600 dark:text-gold-400" />
                    </div>
                    <h3 className="font-semibold text-brand-800 dark:text-white mb-2">
                      {tWhy(`items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {tWhy(`items.${key}.description`)}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-brand-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={tTestimonials("label")}
            title={tTestimonials("title")}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-8 h-full">
                  <Quote className="w-10 h-10 text-gold-400/50 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                    &ldquo;{tTestimonials(`items.${key}.quote`)}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-brand-800 dark:text-white">
                      {tTestimonials(`items.${key}.author`)}
                    </p>
                    <p className="text-sm text-gold-600 dark:text-gold-400">
                      {tTestimonials(`items.${key}.role`)}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
