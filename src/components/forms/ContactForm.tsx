"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  defaultService?: string;
  compact?: boolean;
};

export function ContactForm({ defaultService = "", compact = false }: ContactFormProps) {
  const t = useTranslations("contactPage");
  const tForm = useTranslations("form");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl border bg-white dark:bg-brand-800/50",
    "border-gray-200 dark:border-brand-600 text-brand-800 dark:text-white",
    "focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400",
    "transition-all placeholder:text-gray-400"
  );

  return (
    <div>
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <p className="text-green-800 dark:text-green-200 text-sm">{tForm("success")}</p>
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          <p className="text-red-800 text-sm">{tForm("error")}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className={cn("space-y-4", compact && "space-y-3")}>
        <div className={cn("grid gap-4", !compact && "md:grid-cols-2")}>
          <div>
            <label className="block text-sm font-medium text-brand-700 dark:text-gray-300 mb-1.5">
              {t("name")}
            </label>
            <input type="text" name="name" required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-700 dark:text-gray-300 mb-1.5">
              {t("email")}
            </label>
            <input type="email" name="email" required className={inputClass} />
          </div>
        </div>
        <div className={cn("grid gap-4", !compact && "md:grid-cols-2")}>
          <div>
            <label className="block text-sm font-medium text-brand-700 dark:text-gray-300 mb-1.5">
              {t("phone")}
            </label>
            <input type="tel" name="phone" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-700 dark:text-gray-300 mb-1.5">
              {t("service")}
            </label>
            <select
              name="service"
              defaultValue={defaultService}
              className={inputClass}
            >
              <option value="">{t("selectService")}</option>
              <option value="restaurant">Restaurant Services</option>
              <option value="construction">Construction Services</option>
              <option value="visa">Visa Services</option>
              <option value="consulting">Business Consulting</option>
              <option value="real-estate">Real Estate Services</option>
              <option value="digital-services">Digital Services</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-700 dark:text-gray-300 mb-1.5">
            {t("message")}
          </label>
          <textarea
            name="message"
            required
            rows={compact ? 4 : 5}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gold-gradient text-brand-900 font-semibold shadow-gold hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          {status === "sending" ? tForm("sending") : t("submit")}
        </button>
      </form>
    </div>
  );
}
