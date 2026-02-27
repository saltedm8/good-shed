"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import { RESTAURANT, SHED } from "@/lib/images";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }}>
      {children}
    </motion.div>
  );
}

const highlights = [
  { title: "Daily Changing Menu", text: "Our menu evolves with what the market brings each morning — expect the unexpected." },
  { title: "Kentish Provenance", text: "Every ingredient sourced within miles: finest Kentish fruit, veg, meat and fish." },
  { title: "Spanish Sensibilities", text: "British traditions and techniques meet the warmth of Spanish cooking philosophy." },
  { title: "Wine & Drinks", text: "Curated wines by Master of Wine Clive Barlow, craft ales, cider, and cocktails." },
];

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        eyebrow="The Goods Shed"
        title="The Restaurant"
        subtitle="Seasonal, market-driven dining at its finest"
        image={RESTAURANT.hero}
      />

      {/* Intro */}
      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Farm to Fork</p>
            <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ingredients sourced <span className="text-forest italic">2 feet away</span>
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-cognac mb-8" />
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mb-5">
              The Goods Shed restaurant sits at the heart of our farmers market, with ingredients literally sourced from the stalls around it. The menu changes daily based on what landed at market that morning.
            </p>
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mb-10">
              Finest Kentish produce, British traditions and techniques, Spanish sensibilities. The result, as The Guardian put it, is &ldquo;balm to the soul&rdquo;.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/restaurant/menu" className="btn-gold inline-block"><span>View Menu</span></Link>
              <Link href="/booking" className="btn-outline inline-block">Book a Table</Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                    src={RESTAURANT.tableSetting}
                    alt="The Goods Shed restaurant interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-4 border-gold/10" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-charcoal text-4xl font-bold mb-3">What Makes Us Special</h2>
              <div className="divider" />
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.1}>
                <div className="text-center p-6 bg-warm-white border border-cream-dark hover:border-gold/40 transition-colors duration-300">
                  <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
                  <h3 className="font-playfair text-charcoal font-bold text-lg mb-3">{h.title}</h3>
                  <p className="font-cormorant text-charcoal/60 text-base italic leading-relaxed">{h.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Times */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="font-lato text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">When to Visit</p>
              <h2 className="font-playfair text-cream text-4xl font-bold">Opening Hours</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="border border-gold/20 p-8 text-center">
                <p className="font-lato text-gold text-xs tracking-[0.3em] uppercase mb-4">Lunch</p>
                <p className="font-playfair text-cream text-2xl font-bold mb-2">Tuesday to Sunday</p>
                <p className="font-cormorant text-gold text-3xl italic">12pm – 3pm</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border border-gold/20 p-8 text-center">
                <p className="font-lato text-gold text-xs tracking-[0.3em] uppercase mb-4">Dinner</p>
                <p className="font-playfair text-cream text-2xl font-bold mb-2">Tuesday to Saturday</p>
                <p className="font-cormorant text-gold text-3xl italic">5:30pm – 9pm</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <p className="text-center font-cormorant text-cream/40 text-lg italic mt-6">Closed Mondays</p>
            <div className="text-center mt-8">
              <Link href="/booking" className="btn-gold inline-block"><span>Reserve Your Table</span></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-forest py-16 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Menu", href: "/restaurant/menu" },
            { label: "Drinks List", href: "/restaurant/drinks-list" },
            { label: "Banquets", href: "/restaurant/banquets" },
            { label: "Book a Table", href: "/booking" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border border-gold/30 text-center py-5 font-lato text-xs text-gold tracking-[0.2em] uppercase hover:bg-gold/10 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
