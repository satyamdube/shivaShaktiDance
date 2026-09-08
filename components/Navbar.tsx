"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Phone, ArrowRight, Calendar, Compass, Info, Image, MessageSquare } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", icon: Compass },
    { name: "Classes", href: "/classes", icon: Compass },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Why Us", href: "/why-us", icon: Sparkles },
    { name: "About", href: "/about", icon: Info },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Contact", href: "/contact", icon: MessageSquare },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-maroon-950/95 backdrop-blur-md shadow-xl border-b border-gold-400/20"
          : "bg-maroon-950/90 backdrop-blur-sm border-b border-gold-400/15"
      }`}
    >
      {/* Top Announcement Strip */}
      <div className="bg-gradient-to-r from-wine-700/40 via-maroon-900 to-wine-700/40 border-b border-gold-400/15 py-1.5 px-3 sm:px-4 text-center text-[10px] sm:text-xs text-gold-300 font-medium tracking-wide flex items-center justify-center gap-2 sm:gap-3 overflow-hidden">
        <span className="inline-flex items-center gap-1.5 truncate">
          <Sparkles className="w-3 h-3 text-gold-400 shrink-0 animate-pulse" />
          <span className="truncate">Admissions Open &bull; Greater Kailash, South Delhi</span>
        </span>
        <span className="hidden sm:inline text-gold-400/50">&bull;</span>
        <span className="hidden sm:inline text-cream-100/80">Batch Limit: 12 Dancers</span>
        <span className="hidden md:inline text-gold-400/50">&bull;</span>
        <a href="tel:+919811024590" className="hidden md:inline text-gold-300 hover:text-white underline font-bold shrink-0">
          Call: +91 98110 24590
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <Link href="/" className="inline-flex items-center shrink-0" onClick={() => setIsOpen(false)}>
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all relative py-1 ${
                    isActive
                      ? "text-gold-300 font-semibold after:scale-x-100"
                      : "text-cream-100/80 hover:text-gold-300 font-medium after:scale-x-0"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gold-400 hover:after:scale-x-100 after:transition-transform`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact#enroll"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-maroon-950 px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-gold-500/20 shrink-0"
            >
              <Sparkles className="w-4 h-4 text-maroon-950" />
              <span>Book Free Trial</span>
            </Link>
          </div>

          {/* Mobile Actions: Compact Trial Button + Hamburger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <Link
              href="/contact#enroll"
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-bold bg-gold-400 hover:bg-gold-300 text-maroon-950 px-3 py-1.5 rounded shadow whitespace-nowrap transition-colors"
            >
              Free Trial
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream-100 hover:text-gold-400 p-2 rounded-lg bg-white/5 border border-gold-400/20 focus:outline-none touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5 text-gold-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gold-400/20 bg-maroon-950/98 backdrop-blur-2xl px-4 sm:px-6 py-5 flex flex-col justify-between overflow-y-auto h-[calc(100dvh-80px)] max-h-[calc(100dvh-80px)] shadow-2xl animate-slide-down">
          <div className="space-y-2">
            <div className="text-[10px] uppercase font-bold text-gold-400 tracking-widest px-3 mb-2">
              Academy Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    isActive
                      ? "bg-gold-400/15 border-gold-400/40 text-gold-300 font-bold"
                      : "bg-white/5 border-white/5 text-cream-100 font-medium hover:bg-white/10 hover:border-gold-400/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-gold-400" />
                    <span className="text-base">{link.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold-400/60" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom CTAs */}
          <div className="pt-5 mt-4 border-t border-gold-400/20 space-y-3 pb-4">
            <Link
              href="/contact#enroll"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-maroon-950 font-bold py-3.5 rounded-xl shadow-lg text-sm transition-all"
            >
              Book Complimentary Trial Class
            </Link>

            <a
              href="tel:+919811024590"
              className="w-full text-center flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-cream-100 font-semibold py-3 rounded-xl border border-gold-400/30 text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call Studio: +91 98110 24590</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
