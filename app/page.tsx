"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import {
  SHED, RESTAURANT, VEG, BUTCHERY, FISH, CHEESE, WINE, WILD_GOOSE,
  DOCKER, GILLS, MURRAYS, PATRIANA, MARKET_FLOOR,
} from "@/lib/images";

const marketStalls = [
  {
    name: "The Veg Stall",
    tagline: "Locally sourced seasonal veg — all under 12 food miles",
    href: "/market/veg-stall",
    img: VEG.hero,
  },
  {
    name: "The Butchery",
    tagline: "Traditional service with exceptional, ethically reared meat",
    href: "/market/butchery",
    img: BUTCHERY.hero,
  },
  {
    name: "The Fishmonger",
    tagline: "Canterbury's only independent fresh fish monger",
    href: "/market/fishmonger",
    img: FISH.hero,
  },
  {
    name: "Cheese Makers",
    tagline: "The finest British artisanal cheeses at the counter",
    href: "/market/cheese-makers",
    img: CHEESE.hero,
  },
  {
    name: "Press Wine",
    tagline: "Wines chosen by Master of Wine Clive Barlow",
    href: "/market/press-wine",
    img: WINE.hero,
  },
  {
    name: "Wild Goose",
    tagline: "Little dishes and hedgerow-inspired cocktails",
    href: "/market/wild-goose",
    img: WILD_GOOSE.hero,
  },
];

const reviews = [
  {
    text: "Ingredients are sourced from roughly 2ft away in the market: finest Kentish produce, British traditions and techniques, Spanish sensibilities. The result is balm to the soul.",
    source: "The Guardian",
  },
  {
    text: "Enter, and you are confronted by the kind of scene that makes you wonder if you've died and been whisked off to gastronomic heaven: the finest Kentish fruit and veg, glorious, doughy pillows of fresh bread.",
    source: "The Telegraph",
  },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setReviewIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src={MARKET_FLOOR}
            alt="The Goods Shed market hall interior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80" />
        </motion.div>

        {/* Decorative frame */}
        <div className="absolute inset-8 border border-gold/20 pointer-events-none hidden md:block" />
        <div className="absolute inset-10 border border-gold/10 pointer-events-none hidden md:block" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="font-lato text-gold text-xs uppercase tracking-[0.4em] mb-6"
          >
            Canterbury, Kent · Est. 2002
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-playfair text-cream text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6"
          >
            The Goods
            <span className="block text-gold italic">Shed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-cormorant text-cream/80 text-2xl md:text-3xl italic mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Farmers Market, Food Hall &amp; Restaurant
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/booking" className="btn-gold inline-block">
              <span>Reserve a Table</span>
            </Link>
            <Link href="/market" className="btn-outline inline-block">
              Explore the Market
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── Story Section ── */}
      <section className="bg-cream py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold leading-tight mb-6">
              I went to the market…
            </h2>
            <div className="divider mb-8" style={{ margin: "0 0 2rem 0" }} />
            <div className="font-cormorant text-charcoal/70 text-xl leading-relaxed space-y-5 italic">
              <p>
                …and I bought fresh stocks from Badlesmere, some traditionally reared pork chops, local mackerel, bread pulled straight from the oven and vegetables collected that morning from Kentish farms.
              </p>
              <p>
                I sat and had a fine sandwich from Jonnie Sandwich with a glass of wine from Clive and pondered Sunday lunch. The seasonal restaurant menu inspired local venison, celeriac, black pudding and cobnuts.
              </p>
              <p>
                At Wild Goose, folk were enjoying hedgerow-inspired cocktails and little dishes. Next time, I thought…
              </p>
            </div>
            <Link href="/restaurant" className="btn-gold mt-10 inline-block">
              <span>Discover the Restaurant</span>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative pb-10">
              <div className="grid grid-cols-2 gap-4">
                {/* Left image: the market interior */}
                <div className="img-overlay rounded-sm overflow-hidden aspect-[3/4] relative">
                  <Image
                    src={RESTAURANT.evening}
                    alt="The Goods Shed restaurant evening service"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Right image: restaurant dining */}
                <div className="img-overlay rounded-sm overflow-hidden aspect-[3/4] mt-12 relative">
                  <Image
                    src={RESTAURANT.lunch}
                    alt="The Goods Shed restaurant dining"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-charcoal px-8 py-4 text-center shadow-2xl border border-gold/20 whitespace-nowrap">
                <p className="font-playfair text-gold text-3xl font-bold">20+</p>
                <p className="font-lato text-cream/50 text-xs tracking-widest uppercase">Years of Excellence</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Press Reviews ── */}
      <section className="bg-forest py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src={RESTAURANT.evening} alt="" fill className="object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-lato text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">As Seen In</p>
          <div className="flex justify-center gap-8 mb-12">
            {["The Guardian", "The Telegraph"].map((pub) => (
              <span key={pub} className="font-playfair text-gold/50 text-lg font-bold tracking-wide">{pub}</span>
            ))}
          </div>

          <div className="relative min-h-[180px]">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: reviewIndex === i ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-4"
              >
                <span className="font-playfair text-8xl text-gold/20 leading-none block mb-2">&ldquo;</span>
                <p className="font-cormorant text-cream text-xl md:text-2xl italic leading-relaxed mb-6">
                  {review.text}
                </p>
                <p className="font-lato text-gold text-xs tracking-[0.3em] uppercase">— {review.source}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewIndex(i)}
                className={`w-8 h-0.5 transition-all duration-300 ${reviewIndex === i ? "bg-gold" : "bg-gold/20"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Stalls Grid ── */}
      <section className="bg-warm-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">The Producers</p>
            <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold mb-4">
              The Market &amp; Food Hall
            </h2>
            <div className="divider" />
            <p className="font-cormorant text-charcoal/60 text-xl mt-6 max-w-2xl mx-auto italic">
              Showcasing local produce and fine foods from independent suppliers since 2002
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketStalls.map((stall, i) => (
              <AnimatedSection key={stall.name} delay={i * 0.08}>
                <Link href={stall.href} className="group block card-hover">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={stall.img}
                      alt={stall.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="stall-tag inline-block mb-3">The Goods Shed</div>
                      <h3 className="font-playfair text-cream text-xl font-bold mb-1">{stall.name}</h3>
                      <p className="font-cormorant text-cream/70 text-sm italic">{stall.tagline}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-gold/0 group-hover:bg-gold/90 rounded-full p-2 transition-all duration-300">
                      <ArrowRight size={16} className="text-charcoal opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/market" className="btn-outline inline-block">
              View All Stalls
            </Link>
          </div>
        </div>
      </section>

      {/* ── Restaurant Feature ── */}
      <section className="relative py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          <div className="relative img-overlay">
            <Image
              src={RESTAURANT.hero}
              alt="The Goods Shed restaurant"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-charcoal flex items-center px-10 md:px-16 py-20">
            <AnimatedSection>
              <p className="font-lato text-gold/70 text-xs tracking-[0.3em] uppercase mb-4">Seasonal Dining</p>
              <h2 className="font-playfair text-cream text-4xl md:text-5xl font-bold leading-tight mb-6">
                A Restaurant
                <span className="block text-gold italic">Born of the Market</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-cognac mb-8" />
              <p className="font-cormorant text-cream/70 text-xl italic leading-relaxed mb-6">
                Our menu changes daily — shaped by what arrived at the market that morning. Finest Kentish produce, British traditions and techniques, Spanish sensibilities.
              </p>
              <p className="font-cormorant text-cream/60 text-lg italic leading-relaxed mb-10">
                Lunch Tuesday to Sunday · Dinner Tuesday to Saturday
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/restaurant/menu" className="btn-gold inline-block">
                  <span>View Menu</span>
                </Link>
                <Link href="/booking" className="btn-outline inline-block">
                  Reserve
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Farm Suppers ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={RESTAURANT.candles}
            alt="Farm supper evening at The Goods Shed"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="w-full h-full" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(200,169,110,0.1) 60px, rgba(200,169,110,0.1) 61px), repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(200,169,110,0.1) 60px, rgba(200,169,110,0.1) 61px)" }} />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-lato text-gold text-xs tracking-[0.3em] uppercase mb-4">Special Events</p>
            <h2 className="font-playfair text-cream text-5xl md:text-6xl font-bold leading-tight mb-6">
              Farm Suppers
            </h2>
            <div className="divider" />
            <p className="font-cormorant text-cream/70 text-2xl italic leading-relaxed mt-8 mb-10">
              Exceptional evenings celebrating the very best of Kent&apos;s seasonal harvest. Long tables, good company, and food grown within miles of where you sit.
            </p>
            <Link href="/farm-suppers" className="btn-gold inline-block">
              <span>Discover Farm Suppers</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-lato text-cognac text-xs tracking-[0.3em] uppercase mb-4">Stay Connected</p>
            <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <div className="divider" />
            <p className="font-cormorant text-charcoal/60 text-xl italic mt-6 mb-10 leading-relaxed">
              Recipes, the stories behind our food, seasonal highlights and special offers — straight to your inbox. No spam, only quality.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto shadow-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-warm-white font-cormorant text-lg text-charcoal border border-gold/30 focus:outline-none focus:border-gold placeholder:text-charcoal/30"
              />
              <button type="submit" className="btn-gold shrink-0">
                <span>Subscribe</span>
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Getting Here ── */}
      <section className="bg-warm-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Find Us</p>
            <h2 className="font-playfair text-charcoal text-4xl md:text-5xl font-bold mb-4">Getting Here</h2>
            <div className="divider" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <AnimatedSection delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: "🚶", method: "On Foot", detail: "5 minutes from the High Street — follow signs to Canterbury West Station" },
                  { icon: "🚗", method: "By Car", detail: "Free customer car park on site" },
                  { icon: "🚲", method: "By Bicycle", detail: "Bike rack available. On the Crab & Winkle Way route" },
                  { icon: "🚂", method: "By Rail", detail: "Next to Canterbury West Station — under 1 hour from London on High Speed" },
                ].map((item) => (
                  <div key={item.method} className="bg-cream p-6 border-l-2 border-gold">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h4 className="font-playfair text-charcoal font-bold text-lg mb-2">{item.method}</h4>
                    <p className="font-cormorant text-charcoal/60 text-base italic leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 p-5 bg-forest text-cream border border-gold/20">
                <MapPin size={18} className="text-gold shrink-0" />
                <div>
                  <p className="font-playfair font-bold">The Goods Shed</p>
                  <p className="font-cormorant text-lg italic text-cream/70">Station Rd West, Canterbury, CT2 8AN</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative h-80 md:h-full min-h-[400px] bg-cream-dark overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.3!2d1.0749!3d51.2795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decba9fa4ce6ef%3A0x38e3df2b7f3f6e9a!2sThe%20Goods%20Shed!5e0!3m2!1sen!2suk!4v1234567890"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Goods Shed Location"
                />
                <div className="absolute inset-0 border-4 border-gold/20 pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
