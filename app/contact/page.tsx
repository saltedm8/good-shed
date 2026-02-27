"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="The Goods Shed"
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image={SHED.shop}
      />

      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <FadeIn className="lg:col-span-1 space-y-8">
            <div>
              <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-5">Find Us</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <MapPin size={20} className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-playfair text-charcoal font-bold text-lg group-hover:text-forest transition-colors">The Goods Shed</p>
                  <p className="font-cormorant text-charcoal/60 text-lg italic">Station Rd West</p>
                  <p className="font-cormorant text-charcoal/60 text-lg italic">Canterbury, CT2 8AN</p>
                </div>
              </a>
            </div>

            <div>
              <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-5">Call Us</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-gold shrink-0 mt-1" />
                  <div>
                    <a href="tel:01227462688" className="font-playfair text-charcoal font-bold text-lg hover:text-forest transition-colors block">01227 462 688</a>
                    <p className="font-cormorant text-charcoal/50 text-sm italic">Market & Online Orders</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-gold shrink-0 mt-1" />
                  <div>
                    <a href="tel:01227459153" className="font-playfair text-charcoal font-bold text-lg hover:text-forest transition-colors block">01227 459 153</a>
                    <p className="font-cormorant text-charcoal/50 text-sm italic">Restaurant</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-5">Opening Hours</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-playfair text-charcoal font-bold">Market</p>
                    <p className="font-cormorant text-charcoal/60 italic">Tue–Sat: 9am – 6pm</p>
                    <p className="font-cormorant text-charcoal/60 italic">Sunday: 10am – 4pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-playfair text-charcoal font-bold">Restaurant</p>
                    <p className="font-cormorant text-charcoal/60 italic">Lunch Tue–Sun: 12pm – 3pm</p>
                    <p className="font-cormorant text-charcoal/60 italic">Dinner Tue–Sat: 5:30pm – 9pm</p>
                  </div>
                </div>
                <p className="font-cormorant text-charcoal/40 italic pl-7">Closed Mondays</p>
              </div>
            </div>

            {/* Stallholder contacts */}
            <div>
              <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-5">Contact Stallholders</p>
              <div className="space-y-3">
                {[
                  { name: "Cheese Makers", email: "cheesemakersofcanterbury@gmail.com" },
                  { name: "Murray's General Store", email: "murrays@goodsshed.co.uk" },
                  { name: "Patriana Charcuterie", email: "patriana@goodsshed.co.uk" },
                  { name: "Press Wine Services", email: "presswine@goodsshed.co.uk" },
                  { name: "Wild Goose", email: "wildgoose@goodsshed.co.uk" },
                ].map((s) => (
                  <a key={s.name} href={`mailto:${s.email}`} className="flex items-center gap-3 group">
                    <Mail size={14} className="text-gold/50 shrink-0" />
                    <div>
                      <p className="font-playfair text-charcoal text-sm font-bold group-hover:text-forest transition-colors">{s.name}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.15} className="lg:col-span-2">
            <div className="bg-cream p-8 md:p-12 border border-cream-dark h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-charcoal text-3xl font-bold mb-3">Message Sent</h3>
                  <p className="font-cormorant text-charcoal/60 text-xl italic">We&apos;ll be in touch very soon.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div>
                    <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-2">Subject</p>
                    <select className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold">
                      <option>General Enquiries</option>
                      <option>Market & Online Orders</option>
                      <option>Restaurant Enquiries</option>
                      <option>Private Dining & Banquets</option>
                      <option>Farm Suppers</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Name *</label>
                      <input type="text" required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Email *</label>
                      <input type="email" required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30" placeholder="Optional" />
                  </div>

                  <div>
                    <label className="block font-lato text-xs text-charcoal/60 tracking-widest uppercase mb-2">Message *</label>
                    <textarea rows={6} required className="w-full px-4 py-3 bg-warm-white border border-charcoal/15 font-cormorant text-lg text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30 resize-none" placeholder="How can we help you?" />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 accent-forest" />
                    <span className="font-cormorant text-charcoal/60 text-base italic">Subscribe to The Goods Shed newsletter</span>
                  </label>

                  <button type="submit" className="btn-gold w-full">
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.3!2d1.0749!3d51.2795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decba9fa4ce6ef%3A0x38e3df2b7f3f6e9a!2sThe%20Goods%20Shed!5e0!3m2!1sen!2suk!4v1234567890"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Goods Shed Map"
        />
        <div className="absolute inset-0 border-4 border-gold/20 pointer-events-none" />
      </section>
    </>
  );
}
