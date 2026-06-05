import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { generatePageMetadata } from "@/lib/metadata";
import { Target, Eye, Heart, Lightbulb, Handshake } from "lucide-react";

export async function generateMetadata() {
  return generatePageMetadata("about");
}

const valueIcons = [Heart, Target, Lightbulb, Handshake];
const valueKeys = ["integrity", "excellence", "innovation", "partnership"] as const;
const achievementKeys = ["1", "2", "3", "4"] as const;
const timelineYears = ["2015", "2018", "2021", "2024"] as const;

const team = [
  { name: "Ehab Al-Mansouri", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Fatima Al-Zahrani", role: "Director of Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Omar Hassan", role: "Head of Consulting", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Layla Ibrahim", role: "Client Relations Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");

  return (
    <>
      <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <SectionHeading title={t("introTitle")} />
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("introText")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-brand-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <Target className="w-10 h-10 text-gold-500 mb-4" />
              <h3 className="font-display text-2xl font-bold text-brand-800 dark:text-white mb-3">
                {t("missionTitle")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{t("missionText")}</p>
            </GlassCard>
            <GlassCard className="p-8">
              <Eye className="w-10 h-10 text-gold-500 mb-4" />
              <h3 className="font-display text-2xl font-bold text-brand-800 dark:text-white mb-3">
                {t("visionTitle")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{t("visionText")}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title={t("valuesTitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i];
              return (
                <GlassCard key={key} className="p-6 text-center">
                  <Icon className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-brand-800 dark:text-white mb-2">
                    {t(`values.${key}.title`)}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t(`values.${key}.description`)}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-brand-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title={t("teamTitle")} subtitle={t("teamSubtitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <GlassCard key={member.name} className="overflow-hidden p-0">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-brand-800 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gold-600 dark:text-gold-400">{member.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title={t("achievementsTitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievementKeys.map((key) => (
              <div
                key={key}
                className="p-6 rounded-2xl bg-brand-600 text-white text-center font-medium"
              >
                {t(`achievements.${key}`)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-brand-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title={t("timelineTitle")} />
          <div className="max-w-2xl mx-auto space-y-8">
            {timelineYears.map((year) => (
              <div key={year} className="flex gap-6">
                <div className="w-20 shrink-0 text-2xl font-display font-bold text-gold-500">
                  {year}
                </div>
                <GlassCard className="flex-1 p-6">
                  <h4 className="font-semibold text-brand-800 dark:text-white mb-1">
                    {t(`timeline.${year}.title`)}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t(`timeline.${year}.description`)}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
