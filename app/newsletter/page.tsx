"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import { SHED } from "@/lib/images";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const benefits = [
  { title: "Seasonal Recipes", desc: "Inspired by our market produce and restaurant dishes — cook the same ingredients at home." },
  { title: "Producer Stories", desc: "Meet the farmers, fishers and makers behind the food you love at The Goods Shed." },
  { title: "Market News", desc: "New arrivals, seasonal highlights and what's not to be missed this week." },
  { title: "Early Access", desc: "First to know about Farm Suppers, special events and limited collaborations." },
  { title: "Special Offers", desc: "Exclusive subscriber offers from the restaurant and our stallholders." },
  { title: "No Spam. Ever.", desc: "We only write when we have something genuinely worth sharing." },
];

export default function NewsletterPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Stay Connected"
        title="Newsletter"
        subtitle="Good food, great stories — straight to your inbox"
        image={SHED.market1}
      />

      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Subscribe</p>
            <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold mb-4">
              Get the most from the seasons
            </h2>
            <div className="divider" />
            <p className="font-cormorant text-charcoal/60 text-xl italic mt-8 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t believe in spam — whether it&apos;s on your plate or in your inbox. We&apos;ll only send you interesting, high-quality content, big announcements and special offers.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="bg-cream p-6 border border-cream-dark hover:border-gold/40 transition-colors">
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h3 className="font-playfair text-charcoal font-bold text-lg mb-2">{b.title}</h3>
                  <p className="font-cormorant text-charcoal/60 text-base italic leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="max-w-lg mx-auto">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-charcoal text-3xl font-bold mb-3">You&apos;re Subscribed!</h3>
                  <p className="font-cormorant text-charcoal/60 text-xl italic">Welcome to The Goods Shed community.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Your Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-cream border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-5 py-4 bg-cream border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="your@email.com" />
                  </div>
                  <button type="submit" className="btn-gold w-full mt-2">
                    <span>Subscribe to the Newsletter</span>
                  </button>
                  <p className="text-center font-cormorant text-charcoal/40 text-sm italic">No spam. Unsubscribe at any time.</p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
