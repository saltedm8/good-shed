"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
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

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Reserve"
        title="Book a Table"
        subtitle="We look forward to welcoming you"
        image={RESTAURANT.tableSetting}
      />

      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <FadeIn>
            <div className="bg-cream p-8 md:p-12 border border-cream-dark">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-charcoal text-3xl font-bold mb-3">Booking Received</h3>
                  <p className="font-cormorant text-charcoal/60 text-xl italic">We&apos;ll confirm your reservation within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-6">Your Details</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">First Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="John" />
                    </div>
                    <div>
                      <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Last Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="Smith" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Email</label>
                    <input type="email" required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="07700 000 000" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Date</label>
                      <input type="date" required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold" />
                    </div>
                    <div>
                      <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Time</label>
                      <select required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold">
                        <option value="">Select time</option>
                        <optgroup label="Lunch (Tue–Sun)">
                          {["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"].map(t => <option key={t}>{t}</option>)}
                        </optgroup>
                        <optgroup label="Dinner (Tue–Sat)">
                          {["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"].map(t => <option key={t}>{t}</option>)}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Party Size</label>
                    <select required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold">
                      <option value="">Number of guests</option>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
                      <option value="9+">9+ guests (please call us)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Special Requests</label>
                    <textarea rows={3} className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30 resize-none" placeholder="Dietary requirements, allergies, celebrations…" />
                  </div>

                  <button type="submit" className="btn-gold w-full">
                    <span>Request Reservation</span>
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Opening Hours</p>
                <div className="space-y-3">
                  <div className="flex justify-between py-3 border-b border-charcoal/10">
                    <span className="font-playfair text-charcoal font-bold">Lunch</span>
                    <span className="font-cormorant text-charcoal/70 italic text-lg">Tue–Sun, 12pm–3pm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-charcoal/10">
                    <span className="font-playfair text-charcoal font-bold">Dinner</span>
                    <span className="font-cormorant text-charcoal/70 italic text-lg">Tue–Sat, 5:30pm–9pm</span>
                  </div>
                  <p className="font-cormorant text-charcoal/40 text-base italic">Closed Mondays</p>
                </div>
              </div>

              <div>
                <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Call Us</p>
                <a href="tel:01227459153" className="font-playfair text-charcoal text-2xl font-bold hover:text-forest transition-colors">01227 459 153</a>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={RESTAURANT.dish1} alt="The Goods Shed restaurant" fill className="object-cover" />
                <div className="absolute inset-0 border-4 border-gold/10" />
              </div>

              <div className="bg-forest p-6 border border-gold/20">
                <p className="font-cormorant text-cream/80 text-lg italic leading-relaxed">
                  For large groups, private dining or special occasions, please <Link href="/contact" className="text-gold underline underline-offset-2">contact us directly</Link> or visit our <Link href="/restaurant/banquets" className="text-gold underline underline-offset-2">banquets page</Link>.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
