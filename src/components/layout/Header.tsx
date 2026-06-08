"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon, Globe, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/services-data";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";
import {
  consultingServices,
  realEstateServices,
  digitalServices,
  type ServiceItem,
} from "@/lib/services-data";

const mainNav = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
] as const;

type ServiceNavItem = {
  key: string;
  href: string;
  subItems?: ServiceItem[];
  subPath?: string;
  subNamespace?: "consultingServices" | "realEstateServices" | "digitalServices";
};

const serviceLinks: ServiceNavItem[] = [
  { key: "restaurant", href: "/services/restaurant" },
  { key: "construction", href: "/services/construction" },
  { key: "visa", href: "/services/visa" },
  {
    key: "consulting",
    href: "/services/business-consulting",
    subItems: consultingServices,
    subPath: "/services/business-consulting",
    subNamespace: "consultingServices",
  },
  {
    key: "realEstate",
    href: "/services/real-estate",
    subItems: realEstateServices,
    subPath: "/services/real-estate",
    subNamespace: "realEstateServices",
  },
  {
    key: "digital",
    href: "/services/digital-services",
    subItems: digitalServices,
    subPath: "/services/digital-services",
    subNamespace: "digitalServices",
  },
];

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tConsulting = useTranslations("consultingServices");
  const tRealEstate = useTranslations("realEstateServices");
  const tDigital = useTranslations("digitalServices");
  const locale = useLocale();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const getSubTitle = (namespace: string, slug: string) => {
    switch (namespace) {
      case "realEstateServices":
        return tRealEstate(`${slug}.title`);
      case "digitalServices":
        return tDigital(`${slug}.title`);
      default:
        return tConsulting(`${slug}.title`);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const switchLocale = locale === "en" ? "ar" : "en";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-brand-900/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
              <span className="text-brand-900 font-bold text-lg">E</span>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-display font-bold text-lg leading-tight transition-colors",
                  scrolled ? "text-brand-800 dark:text-white" : "text-white"
                )}
              >
                Ehab Solutions
              </span>
              <span
                className={cn(
                  "text-xs tracking-wider",
                  scrolled ? "text-gold-500" : "text-gold-400"
                )}
              >
                {locale === "ar" ? "إيهاب للحلول" : "Premium Business Services"}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-brand-700 dark:text-gray-200 hover:text-gold-500"
                    : "text-white/90 hover:text-gold-400",
                  pathname === item.href && "text-gold-500"
                )}
              >
                {t(item.key)}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => {
                setServicesOpen(false);
                setActiveSubmenu(null);
              }}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-brand-700 dark:text-gray-200 hover:text-gold-500"
                    : "text-white/90 hover:text-gold-400"
                )}
              >
                {t("services")}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full start-0 mt-2 w-72 rounded-2xl bg-white dark:bg-brand-800 shadow-premium border border-gray-100 dark:border-brand-700 overflow-visible"
                  >
                    {serviceLinks.map((link) =>
                      link.subItems ? (
                        <div
                          key={link.key}
                          className="relative"
                          onMouseEnter={() => setActiveSubmenu(link.key)}
                        >
                          <Link
                            href={link.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-brand-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-700/50 transition-colors border-b border-gray-50 dark:border-brand-700/50"
                          >
                            {t(link.key)}
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </Link>
                          <AnimatePresence>
                            {activeSubmenu === link.key && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className={cn(
                                  "absolute top-0 w-80 max-h-[70vh] overflow-y-auto rounded-2xl bg-white dark:bg-brand-800 shadow-premium border border-gray-100 dark:border-brand-700 z-50",
                                  locale === "ar"
                                    ? "end-full me-1"
                                    : "start-full ms-1"
                                )}
                              >
                                {link.subItems.map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`${link.subPath}/${s.slug}`}
                                    className="block px-4 py-2.5 text-sm text-brand-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-700/50 border-b border-gray-50 dark:border-brand-700/50 last:border-0"
                                  >
                                    {getSubTitle(link.subNamespace!, s.slug)}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          key={link.key}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-brand-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-700/50 transition-colors border-b border-gray-50 dark:border-brand-700/50 last:border-0"
                        >
                          {t(link.key)}
                        </Link>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                scrolled
                  ? "text-brand-700 dark:text-gray-200 hover:text-gold-500"
                  : "text-white/90 hover:text-gold-400"
              )}
            >
              {t("contact")}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-lg transition-colors",
                scrolled
                  ? "text-brand-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-brand-700"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link
              href={pathname}
              locale={switchLocale}
              className={cn(
                "p-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors",
                scrolled
                  ? "text-brand-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-brand-700"
                  : "text-white hover:bg-white/10"
              )}
            >
              <Globe className="w-4 h-4" />
              {switchLocale.toUpperCase()}
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gold-gradient text-brand-900 font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
            >
              {t("getStarted")}
            </Link>
          </div>

          <button
            className={cn(
              "lg:hidden p-2 rounded-lg",
              scrolled ? "text-brand-800 dark:text-white" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-brand-900 border-t dark:border-brand-700 max-h-[80vh] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {[...mainNav, { key: "contact" as const, href: "/contact" }].map(
                (item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="px-4 py-3 rounded-lg text-brand-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-800"
                  >
                    {t(item.key)}
                  </Link>
                )
              )}
              <p className="px-4 pt-2 text-xs font-semibold text-gold-500 uppercase tracking-wider">
                {t("services")}
              </p>
              {serviceLinks.map((link) => (
                <div key={link.key}>
                  <Link
                    href={link.href}
                    className="px-6 py-2 text-sm font-medium text-brand-700 dark:text-gray-200"
                  >
                    {t(link.key)}
                  </Link>
                  {link.subItems?.map((s) => (
                    <Link
                      key={s.slug}
                      href={`${link.subPath}/${s.slug}`}
                      className="px-10 py-1.5 text-xs text-brand-500 dark:text-gray-400 block"
                    >
                      {getSubTitle(link.subNamespace!, s.slug)}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex items-center gap-2 px-4 pt-4">
                <button onClick={toggleTheme} className="p-2 rounded-lg border">
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <Link
                  href={pathname}
                  locale={switchLocale}
                  className="p-2 rounded-lg border flex items-center gap-1 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  {switchLocale.toUpperCase()}
                </Link>
              </div>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                {tCommon("whatsapp")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
