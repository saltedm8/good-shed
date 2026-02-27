"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Check } from "lucide-react";
import { RESTAURANT } from "@/lib/images";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const features = [
  "Exclusive use of the market space",
  "Bespoke seasonal menus crafted by our team",
  "Wine pairing by Master of Wine Clive Barlow",
  "Farm & market tours for guests",
  "Flexible seating from 20 to 120 guests",
  "Unique Victorian railway architecture",
  "On-site butchery, fishmonger & produce stalls",
  "Bespoke cocktail & drinks service",
];

export default function BanquetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Dining"
        title="Banquets"
        subtitle="The market as your dining room"
        image={RESTAURANT.evening}
      />

      {/* Intro */}
      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">An Extraordinary Setting</p>
            <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold leading-tight mb-6">
              Dine where the <span className="text-forest italic">market meets</span> the table
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-cognac mb-8" />
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mb-5">
              Imagine hosting your celebration within the original Victorian railway shed — surrounded by the finest artisan food stalls, flooded with natural light from grand arched windows.
            </p>
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mb-10">
              We create unique banquet experiences for private parties, corporate events, weddings and special occasions — with everything sourced from the very stalls around you.
            </p>
            <Link href="/contact" className="btn-gold inline-block"><span>Enquire About Your Event</span></Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={RESTAURANT.candles} alt="Banquet setup at The Goods Shed" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden mt-10">
                <Image src={RESTAURANT.kitchen} alt="Table setting at The Goods Shed" fill className="object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-charcoal text-4xl font-bold mb-3">What&apos;s Included</h2>
              <div className="divider" />
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <FadeIn key={f} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 bg-warm-white border border-cream-dark hover:border-gold/40 transition-colors">
                  <Check size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="font-cormorant text-charcoal/80 text-lg italic">{f}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={RESTAURANT.tableSetting} alt="The Goods Shed restaurant for events" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="font-lato text-gold text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</p>
            <h2 className="font-playfair text-cream text-4xl md:text-5xl font-bold mb-6">
              Plan Your Perfect Event
            </h2>
            <p className="font-cormorant text-cream/70 text-xl italic leading-relaxed mb-10">
              We&apos;d love to help you create something truly special. Contact us to discuss your requirements, dates and bespoke menu ideas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold inline-block"><span>Start the Conversation</span></Link>
              <a href="tel:01227459153" className="btn-outline inline-block">Call 01227 459 153</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
