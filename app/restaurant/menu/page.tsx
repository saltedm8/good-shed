"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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

const menuSections = [
  {
    section: "Small Plates",
    note: "To share, or not to share",
    items: [
      { name: "Sourdough & cultured butter", price: "£4.50", note: "Baked on-site daily" },
      { name: "Charcuterie board", price: "£12.00", note: "Patriana selection, pickles, sourdough" },
      { name: "Smoked mackerel pâté", price: "£9.50", note: "Local mackerel, rye toast, cornichons" },
      { name: "Burrata, heritage tomato & basil", price: "£11.00", note: "Kentish tomatoes, aged balsamic" },
      { name: "Devilled lamb's kidneys on toast", price: "£9.00", note: "Stour Valley lamb, sourdough" },
      { name: "Oysters (half dozen)", price: "£18.00", note: "From our fishmonger, shallot vinegar" },
    ],
  },
  {
    section: "Mains",
    note: "From the market this morning",
    items: [
      { name: "Venison haunch, celeriac & cobnuts", price: "£28.00", note: "Stour Valley venison, black pudding, port jus" },
      { name: "Whole plaice, brown butter & capers", price: "£24.00", note: "Day-boat fish, purple sprouting broccoli" },
      { name: "Slow-roast pork belly", price: "£22.00", note: "Traditionally reared, apple, crackling, savoy" },
      { name: "Market vegetable tart", price: "£18.00", note: "Seasonal veg, Ashmore cheese, dressed leaves" },
      { name: "Salt marsh lamb rump", price: "£26.00", note: "Kentish lamb, white beans, anchovy & herb butter" },
      { name: "Aged Hereford ribeye (400g)", price: "£38.00", note: "28-day dry-aged, triple-cooked chips, béarnaise" },
    ],
  },
  {
    section: "Puddings",
    note: "A sweet conclusion",
    items: [
      { name: "Sticky toffee pudding", price: "£9.00", note: "Medjool dates, clotted cream, caramel sauce" },
      { name: "Poached pear, almond cream", price: "£8.50", note: "Kentish perry, toasted flaked almonds" },
      { name: "Cheese board", price: "£14.00", note: "Cheesemakers of Canterbury selection, biscuits, quince" },
      { name: "Chocolate & hazelnut delice", price: "£9.50", note: "Valrhona, hazelnut praline, sea salt" },
      { name: "Seasonal fruit crumble", price: "£8.00", note: "Whatever the orchard gives us today" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Restaurant"
        title="The Menu"
        subtitle="Market-fresh, seasonal & always changing"
        image={RESTAURANT.dish2}
      />

      <section className="bg-warm-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-cormorant text-charcoal/60 text-xl italic leading-relaxed">
              Our menu changes daily — driven by what the market offers that morning. These dishes are a guide to what you might find. Please ask your server for today&apos;s selection.
            </p>
            <div className="divider mt-8" />
          </FadeIn>
        </div>
      </section>

      {menuSections.map((section, si) => (
        <section key={section.section} className={`py-16 px-6 ${si % 2 === 0 ? "bg-warm-white" : "bg-cream"}`}>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="font-lato text-cognac text-xs tracking-[0.3em] uppercase mb-2">{section.note}</p>
                <h2 className="font-playfair text-charcoal text-3xl md:text-4xl font-bold">{section.section}</h2>
                <div className="divider mt-4" />
              </div>
            </FadeIn>
            <div className="space-y-0">
              {section.items.map((item, i) => (
                <FadeIn key={item.name} delay={i * 0.07}>
                  <div className="flex items-baseline justify-between py-5 border-b border-charcoal/10 group hover:bg-cream/50 transition-colors px-4 -mx-4">
                    <div className="flex-1">
                      <span className="font-playfair text-charcoal font-bold text-lg group-hover:text-forest transition-colors">{item.name}</span>
                      {item.note && <span className="font-cormorant text-charcoal/50 text-sm italic ml-3">{item.note}</span>}
                    </div>
                    <span className="font-cormorant text-cognac text-lg font-bold ml-8 shrink-0">{item.price}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Allergens notice */}
      <section className="bg-cream-dark py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-charcoal/50 text-base italic">
            Please inform your server of any dietary requirements or allergies. A discretionary 12.5% service charge is added to all tables. All prices include VAT.
          </p>
        </div>
      </section>

      <section className="bg-charcoal py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          <Link href="/restaurant/drinks-list" className="btn-gold inline-block"><span>Drinks List</span></Link>
          <Link href="/booking" className="btn-outline inline-block">Book a Table</Link>
          <Link href="/restaurant/banquets" className="btn-outline inline-block">Private Dining</Link>
        </div>
      </section>
    </>
  );
}
