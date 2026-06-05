"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 md:mb-16", centered && "text-center max-w-3xl mx-auto")}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-sm font-semibold tracking-widest uppercase mb-3",
            light ? "text-gold-400" : "text-gold-500 dark:text-gold-400"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-brand-800 dark:text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light
              ? "text-white/80"
              : "text-gray-600 dark:text-gray-300"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
