"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PageHero({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
}: {
  title: string;
  subtitle: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[45vh] flex items-center pt-28 pb-16 overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
