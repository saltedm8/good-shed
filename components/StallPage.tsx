"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import { ArrowLeft, Mail, Phone } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export interface StallPageProps {
  tag: string;
  name: string;
  heroImg: string;
  heroSubtitle: string;
  body: React.ReactNode;
  sideImg: string;
  highlights?: string[];
  email?: string;
  phone?: string;
}

export default function StallPage({ tag, name, heroImg, heroSubtitle, body, sideImg, highlights, email, phone }: StallPageProps) {
  return (
    <>
      <PageHero
        eyebrow={tag}
        title={name}
        subtitle={heroSubtitle}
        image={heroImg}
      />

      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-6">
            <Link href="/market" className="inline-flex items-center gap-2 font-lato text-xs text-cognac/70 tracking-widest uppercase hover:text-cognac transition-colors">
              <ArrowLeft size={14} /> Back to The Market
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="stall-tag inline-block mb-5">{tag}</div>
              <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold leading-tight mb-6">{name}</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-cognac mb-8" />
              <div className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed space-y-5">
                {body}
              </div>

              {(email || phone) && (
                <div className="mt-10 space-y-3 border-t border-charcoal/10 pt-8">
                  <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Get in Touch</p>
                  {email && (
                    <a href={`mailto:${email}`} className="flex items-center gap-3 font-cormorant text-lg text-charcoal hover:text-forest transition-colors">
                      <Mail size={16} className="text-gold" /> {email}
                    </a>
                  )}
                  {phone && (
                    <a href={`tel:${phone}`} className="flex items-center gap-3 font-cormorant text-lg text-charcoal hover:text-forest transition-colors">
                      <Phone size={16} className="text-gold" /> {phone}
                    </a>
                  )}
                </div>
              )}
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={sideImg} alt={name} fill className="object-cover" />
                  <div className="absolute inset-0 border-4 border-gold/10" />
                </div>

                {highlights && highlights.length > 0 && (
                  <div className="bg-cream p-8 border border-cream-dark">
                    <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-5">Highlights</p>
                    <ul className="space-y-3">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <span className="text-gold mt-1">—</span>
                          <span className="font-cormorant text-charcoal/70 text-lg italic">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-forest py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cormorant text-cream/70 text-xl italic mb-6">Part of The Goods Shed Market & Food Hall</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/market" className="btn-gold inline-block"><span>All Stalls</span></Link>
            <Link href="/booking" className="btn-outline inline-block">Book the Restaurant</Link>
          </div>
        </div>
      </section>
    </>
  );
}
