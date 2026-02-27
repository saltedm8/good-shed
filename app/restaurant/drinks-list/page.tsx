"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import PageHero from "@/components/PageHero";
import { WINE } from "@/lib/images";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const wines = [
  {
    region: "White Wine",
    items: [
      { name: "Muscadet, Domaine de la Pépière", origin: "Loire, France", glass: "£7.50", bottle: "£32.00" },
      { name: "Albariño, Bodegas Terras Gauda", origin: "Rías Baixas, Spain", glass: "£9.00", bottle: "£38.00" },
      { name: "Chablis Premier Cru, Domaine Billaud-Simon", origin: "Burgundy, France", glass: null, bottle: "£58.00" },
      { name: "Grüner Veltliner, Hirsch", origin: "Kamptal, Austria", glass: "£8.50", bottle: "£36.00" },
    ],
  },
  {
    region: "Red Wine",
    items: [
      { name: "Rioja Reserva, Bodegas Muga", origin: "Rioja, Spain", glass: "£9.00", bottle: "£40.00" },
      { name: "Pinot Noir, Felton Road", origin: "Central Otago, NZ", glass: null, bottle: "£68.00" },
      { name: "Côtes du Rhône, Château Rayas", origin: "Rhône, France", glass: "£8.50", bottle: "£37.00" },
      { name: "Barolo, Giacomo Conterno", origin: "Piedmont, Italy", glass: null, bottle: "£95.00" },
    ],
  },
  {
    region: "Rosé & Sparkling",
    items: [
      { name: "Champagne Billecart-Salmon Brut", origin: "Champagne, France", glass: "£13.00", bottle: "£72.00" },
      { name: "Balfour Brut Rosé", origin: "Kent, England", glass: "£11.00", bottle: "£55.00" },
      { name: "Provence Rosé, Domaine Tempier", origin: "Bandol, France", glass: "£9.50", bottle: "£44.00" },
    ],
  },
];

const drinks = [
  {
    category: "Cocktails",
    items: [
      { name: "Hedgerow Negroni", desc: "Sloe gin, elderflower Campari, vermouth", price: "£12.00" },
      { name: "Canterbury Orchard Sour", desc: "Apple brandy, lemon, honey, egg white", price: "£11.00" },
      { name: "Blackberry Smash", desc: "Bourbon, blackberry, sage, ginger beer", price: "£11.00" },
      { name: "Wild Goose Spritz", desc: "Elderflower, gooseberry, prosecco", price: "£10.00" },
    ],
  },
  {
    category: "Craft Ales & Cider",
    items: [
      { name: "Larkins Hop Picker IPA", desc: "Kent hop-forward ale, 4.8%", price: "£5.50" },
      { name: "Old Dairy Copper Top", desc: "Tenterden, Kent, 4.1%", price: "£5.00" },
      { name: "Biddenden Cider", desc: "Traditional Kentish dry cider", price: "£5.50" },
      { name: "Docker Sourdough Ale", desc: "Our own Folkestone Harbour brew", price: "£5.50" },
    ],
  },
  {
    category: "Non-Alcoholic",
    items: [
      { name: "Elderflower & mint pressé", desc: "Kentish elderflower, fresh mint", price: "£4.00" },
      { name: "Local apple juice", desc: "Pressed from Kentish orchards", price: "£3.50" },
      { name: "Seasonal shrub soda", desc: "Ask your server for today's flavour", price: "£4.50" },
      { name: "Fever-Tree tonic waters", desc: "All varieties available", price: "£3.00" },
    ],
  },
];

export default function DrinksListPage() {
  return (
    <>
      <PageHero
        eyebrow="The Restaurant"
        title="Drinks List"
        subtitle="Fine wines, craft ales & hedgerow cocktails"
        image={WINE.hero}
      />

      {/* Intro */}
      <section className="bg-warm-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-cormorant text-charcoal/70 text-xl italic leading-relaxed mb-4">
              Our wines are selected by <strong className="not-italic font-bold text-forest">Master of Wine Clive Barlow</strong> — chosen specifically to deliver quality, typicité and expression from independent importers and producers.
            </p>
            <p className="font-cormorant text-charcoal/60 text-lg italic leading-relaxed">
              We also carry the largest selection of British bottled beers in the South East of England.
            </p>
            <div className="divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Wine List */}
      {wines.map((section, si) => (
        <section key={section.region} className={`py-14 px-6 ${si % 2 === 0 ? "bg-warm-white" : "bg-cream"}`}>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-playfair text-charcoal text-3xl font-bold mb-2">{section.region}</h2>
              <div className="w-8 h-0.5 bg-gold mb-8" />
            </FadeIn>
            <div className="space-y-0">
              <div className="grid grid-cols-3 text-right pb-3 border-b border-charcoal/10">
                <span className="col-span-1 text-left font-lato text-xs text-cognac/60 tracking-widest uppercase"></span>
                <span className="font-lato text-xs text-cognac/60 tracking-widest uppercase">Glass</span>
                <span className="font-lato text-xs text-cognac/60 tracking-widest uppercase">Bottle</span>
              </div>
              {section.items.map((wine, i) => (
                <FadeIn key={wine.name} delay={i * 0.06}>
                  <div className="grid grid-cols-3 items-baseline py-4 border-b border-charcoal/8 text-right group hover:bg-cream/60 transition-colors px-2 -mx-2">
                    <div className="col-span-1 text-left">
                      <p className="font-playfair text-charcoal font-bold text-base group-hover:text-forest transition-colors">{wine.name}</p>
                      <p className="font-cormorant text-charcoal/50 text-sm italic">{wine.origin}</p>
                    </div>
                    <span className="font-cormorant text-cognac">{wine.glass ?? "—"}</span>
                    <span className="font-cormorant text-cognac font-bold">{wine.bottle}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cocktails & Drinks */}
      {drinks.map((section, si) => (
        <section key={section.category} className={`py-14 px-6 ${(wines.length + si) % 2 === 0 ? "bg-warm-white" : "bg-cream"}`}>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-playfair text-charcoal text-3xl font-bold mb-2">{section.category}</h2>
              <div className="w-8 h-0.5 bg-gold mb-8" />
            </FadeIn>
            <div className="space-y-0">
              {section.items.map((item, i) => (
                <FadeIn key={item.name} delay={i * 0.06}>
                  <div className="flex items-baseline justify-between py-5 border-b border-charcoal/8 group hover:bg-cream/60 transition-colors px-2 -mx-2">
                    <div>
                      <span className="font-playfair text-charcoal font-bold text-lg group-hover:text-forest transition-colors">{item.name}</span>
                      <span className="font-cormorant text-charcoal/50 text-sm italic ml-3">{item.desc}</span>
                    </div>
                    <span className="font-cormorant text-cognac font-bold ml-8 shrink-0">{item.price}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-charcoal py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          <Link href="/restaurant/menu" className="btn-gold inline-block"><span>Food Menu</span></Link>
          <Link href="/booking" className="btn-outline inline-block">Reserve a Table</Link>
          <Link href="/market/press-wine" className="btn-outline inline-block">Press Wine Services</Link>
        </div>
      </section>
    </>
  );
}
