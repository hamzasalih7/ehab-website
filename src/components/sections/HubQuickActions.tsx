"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/services-data";

export function HubQuickActions() {
  const tCommon = useTranslations("common");

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-brand-900 font-semibold shadow-gold"
      >
        {tCommon("contactUs")}
      </Link>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-600 text-brand-600 dark:border-gold-400 dark:text-gold-400 font-semibold"
      >
        <Phone className="w-5 h-5" />
        {siteConfig.phone}
      </a>
    </div>
  );
}
