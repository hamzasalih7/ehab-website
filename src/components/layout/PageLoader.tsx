"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export function PageLoader() {
  const t = useTranslations();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-900"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 rounded-full border-4 border-gold-400 border-t-transparent"
          />
          <div className="mt-6 flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center">
              <span className="text-brand-900 font-bold text-lg">E</span>
            </div>
            <span className="font-display text-white text-xl font-bold">
              Ehab Solutions
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{t("loading")}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
