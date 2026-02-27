"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Calendar, Users, Leaf } from "lucide-react";
import { RESTAURANT, SHED } from "@/lib/images";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const upcomingSuppers = [
  {
    date: "Friday 21 March 2026",
    theme: "The First of Spring",
    desc: "Celebrating the vernal equinox with the season's first asparagus, spring lamb and fresh herbs.",
    seats: "28 seats remaining",
    price: "£65 per person",
  },
  {
    date: "Saturday 18 April 2026",
    theme: "The Wild Kitchen",
    desc: "Foraged greens, wild garlic, sea herbs and the finest catch of the Kent coast.",
    seats: "12 seats remaining",
    price: "£70 per person",
  },
  {
    date: "Friday 16 May 2026",
    theme: "Asparagus Evening",
    desc: "A celebration of the Kentish asparagus season — a fleeting and precious thing.",
    seats: "Sold out — join waitlist",
    price: "£65 per person",
  },
  {
    date: "Saturday 20 June 2026",
    theme: "Midsummer Feast",
    desc: "Strawberries, broad beans, new potatoes, and summer's first courgette flowers.",
    seats: "32 seats remaining",
    price: "£72 per person",
  },
];

export default function FarmSuppersPage() {
  const [waitlistEmail, setWaitlistEmail] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Special Events"
        title="Farm Suppers"
        subtitle="Long tables, good company & the finest of the season"
        image={RESTAURANT.candles}
        height="h-[75vh]"
      />

      {/* Intro */}
      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Seasonal Celebrations</p>
            <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold leading-tight mb-6">
              A table among <span className="text-forest italic">the market stalls</span>
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-cognac mb-8" />
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mb-5">
              Farm Suppers at The Goods Shed are exceptional evenings celebrating the very best of Kent&apos;s seasonal harvest. Imagine a long table set within the Victorian railway shed, surrounded by the market stalls, candlelit and warm.
            </p>
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mb-5">
              The food is grown within miles of where you sit. The menu is written that week, shaped by what the farms and market have brought in. Wines are paired by Clive Barlow, and the evening is unhurried and convivial.
            </p>
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mb-10">
              These evenings are popular and seats are limited. Booking is essential.
            </p>
            <Link href="/contact" className="btn-gold inline-block"><span>Enquire & Book</span></Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden">
                <Image src={RESTAURANT.hero} alt="Farm supper evening at The Goods Shed" fill className="object-cover" />
                <div className="absolute inset-0 border-4 border-gold/10" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Calendar size={24} />, label: "Regular Events", sub: "All year round" },
                  { icon: <Users size={24} />, label: "Intimate Dining", sub: "Limited seats" },
                  { icon: <Leaf size={24} />, label: "Seasonal Menu", sub: "Written that week" },
                ].map((item) => (
                  <div key={item.label} className="bg-cream p-4 text-center border border-cream-dark">
                    <div className="text-gold flex justify-center mb-2">{item.icon}</div>
                    <p className="font-playfair text-charcoal text-sm font-bold">{item.label}</p>
                    <p className="font-cormorant text-charcoal/50 text-sm italic">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming Suppers */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="font-lato text-cognac text-xs tracking-[0.3em] uppercase mb-3">Upcoming Events</p>
              <h2 className="font-playfair text-charcoal text-4xl font-bold mb-3">2026 Supper Calendar</h2>
              <div className="divider" />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {upcomingSuppers.map((supper, i) => (
              <FadeIn key={supper.date} delay={i * 0.1}>
                <div className="bg-warm-white border border-cream-dark hover:border-gold/40 transition-all duration-300 p-6 md:p-8 group">
                  <div className="flex flex-wrap items-start gap-4 justify-between">
                    <div className="flex-1">
                      <p className="font-lato text-cognac text-xs tracking-[0.2em] uppercase mb-2">{supper.date}</p>
                      <h3 className="font-playfair text-charcoal text-2xl font-bold mb-2 group-hover:text-forest transition-colors">{supper.theme}</h3>
                      <p className="font-cormorant text-charcoal/60 text-lg italic leading-relaxed">{supper.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-playfair text-cognac text-xl font-bold">{supper.price}</p>
                      <p className="font-cormorant text-charcoal/50 text-sm italic mt-1">{supper.seats}</p>
                      <Link href="/contact" className="mt-4 btn-gold inline-block text-[0.65rem] py-2 px-4">
                        <span>{supper.seats.includes("Sold") ? "Join Waitlist" : "Book Now"}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="font-lato text-gold text-xs tracking-[0.3em] uppercase mb-4">Never Miss a Supper</p>
            <h2 className="font-playfair text-cream text-4xl font-bold mb-6">Join the Newsletter</h2>
            <p className="font-cormorant text-cream/60 text-xl italic mb-8 leading-relaxed">
              Farm Suppers are announced to our newsletter subscribers first. Sign up to receive early access and exclusive invitations.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/10 border border-gold/30 font-cormorant text-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold"
              />
              <button type="submit" className="btn-gold shrink-0">
                <span>Subscribe</span>
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
