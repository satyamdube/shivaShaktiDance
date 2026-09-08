"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Star, Award, Compass, ShieldCheck, Heart, Users } from "lucide-react";
import { STATS } from "@/data/danceData";
import TrishulLogo from "@/components/TrishulLogo";

const HERO_DISCIPLINES = [
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    origin: "Kalakshetra Style",
    tagline: "Sacred temple geometry, intricate Hastas & full Margam",
    image: "https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "kathak",
    name: "Kathak",
    origin: "Lucknow Gharana",
    tagline: "Lightning Tatkar footwork, padhant recitation & lyrical chakkars",
    image: "https://images.pexels.com/photos/31880387/pexels-photo-31880387.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "bollywood",
    name: "Semi-Classical & Bollywood",
    origin: "Cinematic Fusion",
    tagline: "Soulful rhythms, emotive grace & exhilarating stage choreographies",
    image: "https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const activeStyle = HERO_DISCIPLINES[activeTab];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center bg-maroon-950 text-cream-100 overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-20">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity bg-cover bg-center transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: `url('${activeStyle.image}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/95 to-maroon-900/70 z-0 pointer-events-none" />

      {/* Decorative Radial Mandalas & Golden Rings */}
      <div className="absolute -top-12 -right-12 w-80 sm:w-[34rem] h-80 sm:h-[34rem] rounded-full border border-gold-400/10 pointer-events-none -z-0 animate-[spin_120s_linear_infinite]" />
      <div className="absolute top-16 right-16 w-64 sm:w-96 h-64 sm:h-96 rounded-full border border-gold-400/20 border-dashed pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-gold-400/5 blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Interactivity */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Top Pill with Trident */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 via-gold-400/15 to-transparent border border-gold-400/40 text-gold-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-md max-w-full">
              <TrishulLogo className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold-400 shrink-0" />
              <span className="truncate">Greater Kailash, New Delhi &bull; Gandharva Board</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.12] sm:leading-[1.08] text-cream-100">
              Where devotion <br />
              meets <span className="italic text-gold-400 font-serif">expression</span>
            </h1>

            <p className="text-cream-100/80 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
              Step into New Delhi’s premier sanctuary for authentic Indian classical dance. Experience the sacred
              harmony of rhythm, posture, and soul under master Gurus from foundational adavus to majestic stage Arangetram.
            </p>

            {/* Quick Interactive Discipline Selector */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold-400/80 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Explore Classical & Fusion Disciplines</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {HERO_DISCIPLINES.map((d, idx) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                      activeTab === idx
                        ? "bg-gold-400 text-maroon-950 border-gold-400 shadow-md shadow-gold-500/20 scale-105 font-bold"
                        : "bg-white/5 text-cream-100/80 border-gold-400/20 hover:border-gold-400/60 hover:text-cream-100"
                    }`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gold-300/90 italic font-serif transition-opacity duration-300 pt-0.5">
                &ldquo;{activeStyle.tagline}&rdquo;
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact#enroll"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-maroon-950 font-bold px-6 sm:px-7 py-3.5 rounded-xl shadow-xl shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base animate-shimmer text-center"
              >
                <span>Book a Free Trial Class</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/classes"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-cream-100 border border-gold-400/40 hover:border-gold-300 px-5 sm:px-6 py-3.5 rounded-xl font-medium transition-all text-sm sm:text-base text-center"
              >
                <Compass className="w-4 h-4 text-gold-400" />
                <span>Explore Curriculum</span>
              </Link>
            </div>

            {/* Community Social Proof Stack */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
              <div className="flex -space-x-2 overflow-hidden shrink-0">
                <img
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-gold-400/60 object-cover"
                  src="https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Student"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-gold-400/60 object-cover"
                  src="https://images.pexels.com/photos/31880387/pexels-photo-31880387.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Student"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-gold-400/60 object-cover"
                  src="https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Student"
                />
                <div className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gold-400 text-maroon-950 font-bold text-xs ring-2 ring-gold-400">
                  500+
                </div>
              </div>

              <div className="text-xs text-cream-100/80">
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                  ))}
                  <span className="font-bold text-cream-100 ml-1">4.9 / 5.0</span>
                </div>
                <div className="text-cream-100/60 text-[11px] sm:text-xs">Certified dancers & performing disciples in Delhi NCR</div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 border-t border-gold-400/15 max-w-2xl">
              {STATS.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-serif text-2xl sm:text-4xl font-bold text-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-sm text-cream-100/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Outer Golden Arch Frame with Luxury Glass & Glow */}
              <div className="relative p-2.5 sm:p-3 rounded-t-full rounded-b-3xl border border-gold-400/40 bg-gradient-to-b from-maroon-900/60 via-maroon-950/80 to-maroon-950 backdrop-blur-md shadow-2xl shadow-maroon-950/80">
                <div className="relative aspect-[3/3.8] sm:aspect-[3/4] w-full overflow-hidden rounded-t-full rounded-b-2xl border border-gold-400/30">
                  <img
                    src={activeStyle.image}
                    alt={activeStyle.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-maroon-950/10 to-transparent" />

                  {/* Discipline Overlay tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <div className="inline-block px-2.5 py-1 rounded-full bg-maroon-950/90 border border-gold-400/40 text-gold-300 text-[11px] sm:text-xs font-semibold backdrop-blur-md">
                      {activeStyle.name} &bull; {activeStyle.origin}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-2 sm:-left-6 bg-cream-100 text-maroon-950 p-3 sm:p-4 rounded-xl shadow-2xl border border-gold-400/50 max-w-[calc(100%-1rem)] sm:max-w-[280px] transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-1 text-gold-600 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-[11px] sm:text-xs text-stone-700 italic leading-snug">
                  &ldquo;My daughter found grace, discipline and real joy here. Guru ji&apos;s teaching is unmatched.&rdquo;
                </p>
                <div className="mt-1.5 text-[9px] sm:text-[10px] uppercase font-bold text-wine-700 tracking-wider">
                  &bull; Sunita M., South Delhi Parent
                </div>
              </div>

              {/* Floating Sacred Trident Badge */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-maroon-900 border-2 border-gold-400 text-gold-300 p-2 sm:p-3 rounded-full shadow-2xl flex items-center justify-center animate-bounce duration-1000">
                <TrishulLogo className="w-6 h-6 sm:w-8 sm:h-8 text-gold-400" />
              </div>

              {/* Verified Quality Tag */}
              <div className="absolute top-1/2 -right-3 sm:-right-5 transform -translate-y-1/2 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-maroon-950/90 border border-gold-400/40 text-[11px] font-semibold text-gold-300 shadow-xl backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>Max 12 Dancers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-gold-400/70 text-[10px] tracking-[0.25em] uppercase pointer-events-none">
        <span>Scroll to explore</span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
