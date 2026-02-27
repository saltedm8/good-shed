"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
  height?: string;
}

export default function PageHero({ title, subtitle, eyebrow, image, height = "h-[60vh]" }: PageHeroProps) {
  return (
    <section className={`relative ${height} min-h-[400px] flex items-center justify-center overflow-hidden`}>
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/75" />

      {/* Decorative border */}
      <div className="absolute inset-6 border border-gold/20 pointer-events-none hidden md:block" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="font-lato text-gold text-xs uppercase tracking-[0.3em] mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-playfair text-cream text-5xl md:text-7xl font-bold leading-tight mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-cormorant text-cream/80 text-xl md:text-2xl italic"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
