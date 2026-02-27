"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const restaurantLinks = [
  { label: "Restaurant", href: "/restaurant" },
  { label: "Menu", href: "/restaurant/menu" },
  { label: "Drinks List", href: "/restaurant/drinks-list" },
  { label: "Banquets", href: "/restaurant/banquets" },
  { label: "Booking", href: "/restaurant/booking" },
];

const marketLinks = [
  { label: "Market", href: "/market" },
  { label: "The Butchery", href: "/market/butchery" },
  { label: "The Fishmonger", href: "/market/fishmonger" },
  { label: "The Veg Stall", href: "/market/veg-stall" },
  { label: "Cheese Makers", href: "/market/cheese-makers" },
  { label: "Docker", href: "/market/docker" },
  { label: "Gill's Café & Delicatessen", href: "/market/gills-cafe" },
  { label: "Murrays Stores", href: "/market/murrays-stores" },
  { label: "Patriana Charcuterie", href: "/market/patriana-charcuterie" },
  { label: "Press Wine", href: "/market/press-wine" },
  { label: "Wild Goose", href: "/market/wild-goose" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [restaurantOpen, setRestaurantOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [mobileRestaurantOpen, setMobileRestaurantOpen] = useState(false);
  const [mobileMarketOpen, setMobileMarketOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-sm shadow-2xl py-3"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <span className="text-gold font-playfair text-xl font-bold tracking-widest uppercase leading-tight">
              The Goods Shed
            </span>
            <span className="text-gold/60 font-cormorant text-xs tracking-[0.3em] uppercase mt-0.5">
              Canterbury
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link href="/" className="nav-link text-cream/80 hover:text-gold font-lato text-xs tracking-widest uppercase transition-colors duration-300">
                Home
              </Link>
            </li>

            {/* Restaurant Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setRestaurantOpen(true)}
              onMouseLeave={() => setRestaurantOpen(false)}
            >
              <button className="nav-link text-cream/80 hover:text-gold font-lato text-xs tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5">
                Restaurant <ChevronDown size={12} className={`transition-transform duration-300 ${restaurantOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {restaurantOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-48 bg-charcoal/98 backdrop-blur-sm border border-gold/20 shadow-2xl"
                  >
                    {restaurantLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-3 text-cream/70 hover:text-gold hover:bg-forest/30 font-lato text-xs tracking-widest uppercase transition-all duration-200 border-b border-gold/10 last:border-0"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/booking" className="nav-link text-cream/80 hover:text-gold font-lato text-xs tracking-widest uppercase transition-colors duration-300">
                Bookings
              </Link>
            </li>

            {/* Market Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setMarketOpen(true)}
              onMouseLeave={() => setMarketOpen(false)}
            >
              <button className="nav-link text-cream/80 hover:text-gold font-lato text-xs tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5">
                Market <ChevronDown size={12} className={`transition-transform duration-300 ${marketOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {marketOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-charcoal/98 backdrop-blur-sm border border-gold/20 shadow-2xl"
                  >
                    {marketLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-3 text-cream/70 hover:text-gold hover:bg-forest/30 font-lato text-xs tracking-widest uppercase transition-all duration-200 border-b border-gold/10 last:border-0"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/farm-suppers" className="nav-link text-cream/80 hover:text-gold font-lato text-xs tracking-widest uppercase transition-colors duration-300">
                Farm Suppers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link text-cream/80 hover:text-gold font-lato text-xs tracking-widest uppercase transition-colors duration-300">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/booking" className="btn-gold text-[0.65rem] py-2.5 px-5 inline-block">
                <span>Book a Table</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gold p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col pt-24 pb-8 px-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 text-cream font-playfair text-2xl border-b border-gold/10">Home</Link>

              {/* Mobile Restaurant */}
              <div className="border-b border-gold/10">
                <button
                  className="w-full flex justify-between items-center py-3 text-cream font-playfair text-2xl"
                  onClick={() => setMobileRestaurantOpen(!mobileRestaurantOpen)}
                >
                  Restaurant <ChevronDown size={18} className={`transition-transform ${mobileRestaurantOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileRestaurantOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      {restaurantLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-4 text-gold/70 font-cormorant text-lg italic">
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/booking" onClick={() => setMobileOpen(false)} className="py-3 text-cream font-playfair text-2xl border-b border-gold/10">Bookings</Link>

              {/* Mobile Market */}
              <div className="border-b border-gold/10">
                <button
                  className="w-full flex justify-between items-center py-3 text-cream font-playfair text-2xl"
                  onClick={() => setMobileMarketOpen(!mobileMarketOpen)}
                >
                  Market <ChevronDown size={18} className={`transition-transform ${mobileMarketOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileMarketOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      {marketLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-4 text-gold/70 font-cormorant text-lg italic">
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/farm-suppers" onClick={() => setMobileOpen(false)} className="py-3 text-cream font-playfair text-2xl border-b border-gold/10">Farm Suppers</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-3 text-cream font-playfair text-2xl border-b border-gold/10">Contact</Link>
              <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="py-3 text-cream font-playfair text-2xl border-b border-gold/10">Newsletter</Link>
            </div>

            <div className="mt-auto pt-8">
              <Link href="/booking" onClick={() => setMobileOpen(false)} className="btn-gold w-full text-center block">
                <span>Book a Table</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
