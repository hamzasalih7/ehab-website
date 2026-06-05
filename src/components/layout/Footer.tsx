"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/services-data";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale() as "en" | "ar";

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center">
                <span className="text-brand-900 font-bold text-lg">E</span>
              </div>
              <span className="font-display font-bold text-xl">Ehab Solutions</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t("description")}
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: siteConfig.social.linkedin },
                { Icon: Twitter, href: siteConfig.social.twitter },
                { Icon: Instagram, href: siteConfig.social.instagram },
                { Icon: Facebook, href: siteConfig.social.facebook },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-brand-800 flex items-center justify-center hover:bg-gold-500 hover:text-brand-900 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gold-400 mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: tNav("home") },
                { href: "/about", label: tNav("about") },
                { href: "/services", label: tNav("services") },
                { href: "/contact", label: tNav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gold-400 mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              {[
                { href: "/services/restaurant", label: tNav("restaurant") },
                { href: "/services/construction", label: tNav("construction") },
                { href: "/services/visa", label: tNav("visa") },
                {
                  href: "/services/business-consulting",
                  label: tNav("consulting"),
                },
                { href: "/services/real-estate", label: tNav("realEstate") },
                {
                  href: "/services/digital-services",
                  label: tNav("digital"),
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gold-400 mb-4">{t("contact")}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                {siteConfig.address[locale]}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold-400">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold-400"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Ehab Solutions. {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-gold-400">
              {t("privacy")}
            </Link>
            <Link href="/contact" className="hover:text-gold-400">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
