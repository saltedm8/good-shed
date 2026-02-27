"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { SHED, VEG, BUTCHERY, FISH, CHEESE, DOCKER, GILLS, MURRAYS, PATRIANA, WINE, WILD_GOOSE, MARKET_FLOOR } from "@/lib/images";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const stalls = [
  {
    name: "The Veg Stall",
    desc: "Locally sourced seasonal vegetables from Kentish farms — all under 12 food miles from Canterbury.",
    href: "/market/veg-stall",
    img: VEG.hero,
    tag: "Produce",
  },
  {
    name: "The Butchery",
    desc: "Traditional service with exceptional meat — better priced. Ethically and traditionally reared.",
    href: "/market/butchery",
    img: BUTCHERY.hero,
    tag: "Meat",
  },
  {
    name: "The Fishmonger",
    desc: "Canterbury's only independent fresh fish monger. Supplying fresh fish from local boats and British shores.",
    href: "/market/fishmonger",
    img: FISH.hero,
    tag: "Fish",
  },
  {
    name: "Cheese Makers of Canterbury",
    desc: "Bringing the finest British artisanal cheeses, including their own Ashmore and other fine varieties.",
    href: "/market/cheese-makers",
    img: CHEESE.hero,
    tag: "Cheese",
  },
  {
    name: "Docker",
    desc: "Delicious sourdough loaves, craft ales, cider and drinks — made in our shipping container at Folkestone Harbour.",
    href: "/market/docker",
    img: DOCKER.hero,
    tag: "Bakery & Drinks",
  },
  {
    name: "Gill's Café & Delicatessen",
    desc: "Coffee, pastries and light lunches made daily with ingredients from the market. Everything made at the Shed.",
    href: "/market/gills-cafe",
    img: GILLS.hero,
    tag: "Café",
  },
  {
    name: "Murrays General Store",
    desc: "Sourcing the finest foods Kent has to offer — and European deli products of exceptional quality.",
    href: "/market/murrays-stores",
    img: MURRAYS.hero,
    tag: "Deli",
  },
  {
    name: "Patriana Charcuterie",
    desc: "High quality, traditional charcuterie directly from producers in France and Spain.",
    href: "/market/patriana-charcuterie",
    img: PATRIANA.hero,
    tag: "Charcuterie",
  },
  {
    name: "Press Wine Services",
    desc: "Wines chosen by Master of Wine Clive Barlow — selected for quality, typicité and expression.",
    href: "/market/press-wine",
    img: WINE.hero,
    tag: "Wine",
  },
  {
    name: "Wild Goose",
    desc: "Little dishes and hedgerow-inspired cocktails in a relaxed, convivial setting.",
    href: "/market/wild-goose",
    img: WILD_GOOSE.hero,
    tag: "Bar & Plates",
  },
];

export default function MarketPage() {
  return (
    <>
      <PageHero
        eyebrow="The Goods Shed"
        title="The Market"
        subtitle="Independent producers, exceptional quality since 2002"
        image={MARKET_FLOOR}
      />

      {/* Intro */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-lato text-xs text-cognac tracking-[0.3em] uppercase mb-4">Farm to Fork</p>
            <h2 className="font-playfair text-charcoal text-4xl font-bold mb-5">More than a market</h2>
            <div className="divider" />
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mt-8">
              The Goods Shed is far more than a restaurant — it is also a farmers market that has been showcasing local produce and fine foods from an array of independent suppliers since 2002.
            </p>
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mt-4">
              You&apos;ll find a veg stall, a butchery and the only independent fishmonger in Canterbury. Stalls bursting with artisanal cheeses, breads baked on-site, fresh pasta, charcuterie and speciality ingredients. Fine wines and the largest selection of British bottled beers in the South East.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Opening Times */}
      <section className="bg-forest py-12 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Tuesday to Saturday", time: "9am – 6pm" },
            { label: "Sunday", time: "10am – 4pm" },
            { label: "Monday", time: "Closed" },
          ].map((item) => (
            <div key={item.label} className="border border-gold/20 py-5 px-4">
              <p className="font-lato text-gold/60 text-xs tracking-widest uppercase mb-2">{item.label}</p>
              <p className="font-playfair text-cream text-xl font-bold">{item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stalls Grid */}
      <section className="bg-warm-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="font-playfair text-charcoal text-4xl font-bold mb-3">Our Stallholders</h2>
            <div className="divider" />
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stalls.map((stall, i) => (
              <FadeIn key={stall.name} delay={i * 0.06}>
                <Link href={stall.href} className="group block bg-cream overflow-hidden border border-cream-dark hover:border-gold/40 transition-all duration-300 card-hover">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={stall.img}
                      alt={stall.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="stall-tag">{stall.tag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-charcoal font-bold text-xl mb-2 group-hover:text-forest transition-colors">{stall.name}</h3>
                    <p className="font-cormorant text-charcoal/60 text-base italic leading-relaxed mb-4">{stall.desc}</p>
                    <div className="flex items-center gap-2 text-cognac group-hover:text-forest transition-colors">
                      <span className="font-lato text-xs tracking-widest uppercase">Visit Stall</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Stallholders */}
      <section className="bg-cream-dark py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h3 className="font-playfair text-charcoal text-3xl font-bold mb-4">Contact Stallholders</h3>
            <p className="font-cormorant text-charcoal/60 text-xl italic mb-8">
              Want to check stock or place a special order? Email our fine food specialists directly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Cheese Makers", email: "cheesemakersofcanterbury@gmail.com" },
                { label: "Murray's Stores", email: "murrays@goodsshed.co.uk" },
                { label: "Patriana", email: "patriana@goodsshed.co.uk" },
                { label: "Press Wine", email: "presswine@goodsshed.co.uk" },
                { label: "Wild Goose", email: "wildgoose@goodsshed.co.uk" },
              ].map((s) => (
                <a key={s.label} href={`mailto:${s.email}`} className="btn-outline text-xs py-2.5 px-5 inline-block">
                  {s.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
