"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { DynamicIcon } from "@/components/ui/Icon";
import { GlassCard } from "@/components/ui/GlassCard";
import type { ServiceNamespace } from "@/lib/services-data";

type SubServiceCardProps = {
  slug: string;
  icon: string;
  image?: string;
  features: string[];
  namespace: ServiceNamespace;
  href: string;
  index?: number;
};

export function SubServiceCard({
  slug,
  icon,
  image,
  features,
  namespace,
  href,
  index = 0,
}: SubServiceCardProps) {
  const t = useTranslations(namespace);
  const tCommon = useTranslations("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link href={href} className="block h-full group">
        <GlassCard className="h-full overflow-hidden p-0 dark:bg-brand-800/60">
          {image ? (
            <div className="relative h-44 overflow-hidden">
              <Image
                src={image}
                alt={t(`${slug}.title`)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
              <div className="absolute bottom-4 start-4 w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <DynamicIcon name={icon} className="w-6 h-6 text-brand-900" />
              </div>
            </div>
          ) : (
            <div className="p-6 pb-0">
              <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold mb-4 group-hover:scale-110 transition-transform">
                <DynamicIcon name={icon} className="w-7 h-7 text-brand-900" />
              </div>
            </div>
          )}
          <div className={image ? "p-6 pt-4" : "p-6 pt-0"}>
            <h3 className="font-display text-lg font-bold text-brand-800 dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
              {t(`${slug}.title`)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {t(`${slug}.description`)}
            </p>
            <ul className="space-y-1.5 mb-5">
              {features.slice(0, 4).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400"
                >
                  <Check className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                  <span>{t(`${slug}.${f}`)}</span>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400 group-hover:gap-3 transition-all">
              {tCommon("readMore")}
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}
