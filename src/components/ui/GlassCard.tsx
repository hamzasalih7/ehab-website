"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "rounded-2xl border border-white/20 bg-white/70 dark:bg-brand-800/40",
        "backdrop-blur-xl shadow-glass dark:border-white/10",
        "dark:shadow-premium",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
