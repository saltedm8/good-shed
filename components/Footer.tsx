"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-bark via-gold to-cognac" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="block mb-6">
            <span className="font-playfair text-gold text-2xl font-bold tracking-wider block">The Goods Shed</span>
            <span className="font-cormorant text-gold/50 text-sm tracking-[0.3em] uppercase mt-1 block">Farmers Market & Restaurant</span>
          </Link>
          <p className="font-cormorant text-lg italic text-cream/60 leading-relaxed">
            &ldquo;A place where market, restaurant and community come together.&rdquo;
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-gold transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-gold transition-colors duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Opening Times */}
        <div>
          <h4 className="font-playfair text-gold text-lg mb-6 tracking-wide">Opening Times</h4>
          <div className="space-y-4">
            <div>
              <p className="font-lato text-xs tracking-widest uppercase text-gold/60 mb-1">Market</p>
              <p className="font-cormorant text-base">Tue – Sat: 9am – 6pm</p>
              <p className="font-cormorant text-base">Sunday: 10am – 4pm</p>
              <p className="font-cormorant text-base text-cream/40">Closed Mondays</p>
            </div>
            <div>
              <p className="font-lato text-xs tracking-widest uppercase text-gold/60 mb-1">Restaurant</p>
              <p className="font-cormorant text-base">Lunch Tue – Sun: 12pm – 3pm</p>
              <p className="font-cormorant text-base">Dinner Tue – Sat: 5:30pm – 9pm</p>
              <p className="font-cormorant text-base text-cream/40">Closed Mondays</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-playfair text-gold text-lg mb-6 tracking-wide">Get In Touch</h4>
          <div className="space-y-4">
            <a href="https://maps.google.com/?q=The+Goods+Shed+Canterbury" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
              <MapPin size={16} className="text-gold/50 mt-0.5 shrink-0 group-hover:text-gold transition-colors" />
              <span className="font-cormorant text-base leading-relaxed group-hover:text-cream transition-colors">Station Rd West<br />Canterbury, CT2 8AN</span>
            </a>
            <a href="tel:01227462688" className="flex items-center gap-3 group">
              <Phone size={16} className="text-gold/50 shrink-0 group-hover:text-gold transition-colors" />
              <div>
                <p className="font-cormorant text-base group-hover:text-cream transition-colors">01227 462 688</p>
                <p className="font-lato text-xs text-cream/40">Market & Online Orders</p>
              </div>
            </a>
            <a href="tel:01227459153" className="flex items-center gap-3 group">
              <Phone size={16} className="text-gold/50 shrink-0 group-hover:text-gold transition-colors" />
              <div>
                <p className="font-cormorant text-base group-hover:text-cream transition-colors">01227 459 153</p>
                <p className="font-lato text-xs text-cream/40">Restaurant</p>
              </div>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-playfair text-gold text-lg mb-6 tracking-wide">Explore</h4>
          <nav className="grid grid-cols-1 gap-2">
            {[
              { label: "Restaurant", href: "/restaurant" },
              { label: "Menu", href: "/restaurant/menu" },
              { label: "Drinks List", href: "/restaurant/drinks-list" },
              { label: "Banquets", href: "/restaurant/banquets" },
              { label: "Farm Suppers", href: "/farm-suppers" },
              { label: "The Market", href: "/market" },
              { label: "Book a Table", href: "/booking" },
              { label: "Newsletter", href: "/newsletter" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-cormorant text-base text-cream/50 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-lato text-xs text-cream/30 tracking-widest uppercase">
            © {new Date().getFullYear()} The Goods Shed, Canterbury. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-lato text-xs text-cream/30 hover:text-gold transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/contact" className="font-lato text-xs text-cream/30 hover:text-gold transition-colors uppercase tracking-widest">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
