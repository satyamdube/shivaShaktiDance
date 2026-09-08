"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, BookOpen, Heart, Eye } from "lucide-react";
import Link from "next/link";

interface MudraItem {
  id: string;
  name: string;
  sanskrit: string;
  category: "Asamyukta (Single Hand)" | "Samyukta (Combined)";
  meaning: string;
  depicts: string[];
  quote: string;
  image: string;
}

interface RasaItem {
  id: string;
  name: string;
  sanskrit: string;
  emotion: string;
  deity: string;
  color: string;
  description: string;
}

const MUDRAS: MudraItem[] = [
  {
    id: "pataka",
    name: "Pataka",
    sanskrit: "पताक",
    category: "Asamyukta (Single Hand)",
    meaning: "The Flag / Banner",
    depicts: ["Forest & Clouds", "Blessing & Reassurance", "Bhoomi (Mother Earth)", "Cutting / Striking"],
    quote: "Natya Shastra Shloka: 'Natyarambhe varidharane vane vastunishedhane...'",
    image: "https://images.pexels.com/photos/7872076/pexels-photo-7872076.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "tripataka",
    name: "Tripataka",
    sanskrit: "त्रिपताक",
    category: "Asamyukta (Single Hand)",
    meaning: "Three Parts of Flag",
    depicts: ["Crown (Kireedam)", "Thunderbolt of Indra", "Flames of Agni", "Tree branches"],
    quote: "Formed by bending the ring finger in Pataka mudra.",
    image: "https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "alapadma",
    name: "Alapadma",
    sanskrit: "अलपद्म",
    category: "Asamyukta (Single Hand)",
    meaning: "Full-Blown Lotus",
    depicts: ["Full blooming lotus", "Mirror of beauty", "Solar disc", "Elegance and wonder"],
    quote: "Finger tips spiral outward evoking blooming sacred petals.",
    image: "https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "mayura",
    name: "Mayura",
    sanskrit: "मयूर",
    category: "Asamyukta (Single Hand)",
    meaning: "The Majestic Peacock",
    depicts: ["Peacock beak & plumage", "Applying tilak on forehead", "Braiding sacred hair", "Omkara"],
    quote: "Thumb and ring finger join with other fingers standing proud.",
    image: "https://images.pexels.com/photos/33638418/pexels-photo-33638418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "shikhara",
    name: "Shikhara",
    sanskrit: "शिखर",
    category: "Asamyukta (Single Hand)",
    meaning: "The Cosmic Spire / Peak",
    depicts: ["The Bow of Shiva (Pinaka)", "Unshakable resolve", "Lord Nataraja's bell", "Steadfast pillar"],
    quote: "Fist closed with thumb standing erect like a sacred temple peak.",
    image: "https://images.pexels.com/photos/31880387/pexels-photo-31880387.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "hamsasya",
    name: "Hamsasya",
    sanskrit: "हंसास्य",
    category: "Asamyukta (Single Hand)",
    meaning: "The Swan Beak",
    depicts: ["Purity & Discernment", "Tying sacred thread", "Holding pearls or jasmine", "Delicate painting"],
    quote: "Forefinger and thumb gently join tips in meditation.",
    image: "https://images.pexels.com/photos/30481580/pexels-photo-30481580.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const RASAS: RasaItem[] = [
  {
    id: "shringara",
    name: "Shringara",
    sanskrit: "शृङ्गार",
    emotion: "Love, Beauty & Devotion",
    deity: "Lord Vishnu",
    color: "Light Green / Emerald",
    description: "The crown of all rasas. Expresses divine yearning of the individual soul (Jivatma) for the supreme cosmic beloved (Paramatma).",
  },
  {
    id: "hasya",
    name: "Hasya",
    sanskrit: "हास्य",
    emotion: "Mirth, Joy & Humor",
    deity: "Shiva Pramathas",
    color: "Pure White",
    description: "Innocent playfulness, laughter, and mischievous banter between Krishna, Yashoda, and the Gopis.",
  },
  {
    id: "raudra",
    name: "Raudra",
    sanskrit: "रौद्र",
    emotion: "Fury, Anger & Power",
    deity: "Lord Rudra (Shiva)",
    color: "Crimson Red",
    description: "Fierce cosmic destruction, stamping footwork (Tandava), flaring nostrils, and blazing eyes defending dharma.",
  },
  {
    id: "karuna",
    name: "Karuna",
    sanskrit: "करुणा",
    emotion: "Compassion, Pathos & Yearning",
    deity: "Yama",
    color: "Pigeon Gray / Ash",
    description: "Tears of empathy, spiritual separation, and deep universal mercy toward all living beings.",
  },
  {
    id: "adbhuta",
    name: "Adbhuta",
    sanskrit: "अद्भुत",
    emotion: "Wonder, Awe & Amazement",
    deity: "Lord Brahma",
    color: "Golden Yellow",
    description: "Wide unblinking eyes, stillness of breath, beholding the cosmic universe (Vishwaroopa) within child Krishna's mouth.",
  },
  {
    id: "shanta",
    name: "Shanta",
    sanskrit: "शान्त",
    emotion: "Peace, Serenity & Stillness",
    deity: "Narayana",
    color: "Moonlight Clear",
    description: "Absolute quietude, meditative Samadhi, the dissolution of ego into supreme tranquil awareness.",
  },
];

export default function MudraExplorer() {
  const [activeTab, setActiveTab] = useState<"mudras" | "rasas">("mudras");
  const [selectedMudraIndex, setSelectedMudraIndex] = useState(0);
  const [selectedRasaIndex, setSelectedRasaIndex] = useState(0);

  const activeMudra = MUDRAS[selectedMudraIndex];
  const activeRasa = RASAS[selectedRasaIndex];

  return (
    <section className="py-16 sm:py-24 bg-maroon-950 text-cream-100 relative overflow-hidden">
      {/* Background Mandala Grids */}
      <div className="absolute inset-0 subtle-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-10 -right-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-gold-400/10 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-gold-400/10 border-dashed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-gold-400 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Natya Shastra Masterclass</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 leading-tight">
            The Language of <span className="italic text-gold-400 font-serif">Mudras &amp; Rasas</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-cream-100/75 text-sm sm:text-base lg:text-lg leading-relaxed">
            In classical Indian dance, every fingertip angle, gaze, and breath tells an ancient story.
            Explore the sacred hand gestures (*Hastha Mudras*) and nine divine emotions (*Navarasas*).
          </p>

          {/* Mode Switcher */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => setActiveTab("mudras")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === "mudras"
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 shadow-lg"
                  : "bg-maroon-900/90 text-cream-100/80 hover:text-gold-300 border border-gold-400/25"
              }`}
            >
              Hastha Mudras (Hand Gestures)
            </button>
            <button
              onClick={() => setActiveTab("rasas")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === "rasas"
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 shadow-lg"
                  : "bg-maroon-900/90 text-cream-100/80 hover:text-gold-300 border border-gold-400/25"
              }`}
            >
              Navarasas (9 Classical Emotions)
            </button>
          </div>
        </div>

        {/* ================= MUDRAS TAB ================= */}
        {activeTab === "mudras" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Horizontal scroll on mobile / vertical stack on desktop */}
            <div className="lg:col-span-4">
              <span className="text-xs uppercase font-bold tracking-wider text-gold-400/80 block mb-2 px-1">
                Select a Hastha Mudra:
              </span>
              <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
                {MUDRAS.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMudraIndex(idx)}
                    className={`shrink-0 w-52 sm:w-60 lg:w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                      selectedMudraIndex === idx
                        ? "bg-gradient-to-r from-maroon-900 via-wine-700/40 to-maroon-900 border-gold-400 text-gold-300 shadow-md transform -translate-y-0.5"
                        : "bg-maroon-900/40 border-gold-400/15 text-cream-100/70 hover:border-gold-400/40 hover:text-cream-100"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="font-serif font-bold text-sm sm:text-base text-cream-100">
                          {m.name}
                        </span>
                        <span className="text-[11px] sm:text-xs text-gold-400/80 font-serif italic">
                          ({m.sanskrit})
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-xs text-cream-100/60 block mt-0.5 truncate">
                        {m.meaning}
                      </span>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform shrink-0 ${
                        selectedMudraIndex === idx ? "text-gold-400 translate-x-1" : "opacity-30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Active Mudra Showcase Card */}
            <div className="lg:col-span-8 bg-maroon-900/80 rounded-2xl sm:rounded-3xl border border-gold-400/30 overflow-hidden shadow-2xl p-5 sm:p-8 md:p-10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Visual Capture */}
                <div className="md:col-span-5">
                  <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-gold-400/40 shadow-xl">
                    <img
                      src={activeMudra.image}
                      alt={activeMudra.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="bg-maroon-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-[11px] uppercase font-bold text-gold-300 border border-gold-400/30">
                        {activeMudra.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mudra Details */}
                <div className="md:col-span-7 space-y-4 sm:space-y-5">
                  <div>
                    <div className="flex items-baseline gap-2 sm:gap-3">
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gold-300">
                        {activeMudra.name}
                      </h3>
                      <span className="text-base sm:text-xl text-gold-400/80 font-serif italic">
                        ({activeMudra.sanskrit})
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-cream-100/70 block mt-1">
                      Meaning: {activeMudra.meaning}
                    </span>
                  </div>

                  {/* Viniyogas (Usage / Depictions) */}
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400 mb-2">
                      Sacred Depictions (Viniyogas):
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeMudra.depicts.map((d, i) => (
                        <div
                          key={i}
                          className="text-xs text-cream-100/80 bg-white/5 border border-gold-400/15 rounded-lg px-3 py-2 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Natya Shastra Quote */}
                  <div className="p-3 sm:p-4 rounded-xl bg-gold-400/10 border border-gold-400/20">
                    <span className="text-[10px] sm:text-[11px] uppercase font-bold text-gold-400 block mb-1">
                      Sanskrit Guidance:
                    </span>
                    <p className="text-xs sm:text-sm text-cream-100/90 italic font-serif leading-relaxed">
                      &ldquo;{activeMudra.quote}&rdquo;
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      href="/classes"
                      className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-xs sm:text-sm font-semibold tracking-wide"
                    >
                      <span>Master all 28 Asamyukta Mudras in our Foundation Class</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= RASAS TAB ================= */}
        {activeTab === "rasas" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {RASAS.map((r, idx) => (
                <div
                  key={r.id}
                  onClick={() => setSelectedRasaIndex(idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    selectedRasaIndex === idx
                      ? "bg-gradient-to-br from-maroon-900 via-wine-700/50 to-maroon-900 border-gold-400 shadow-xl transform -translate-y-1"
                      : "bg-maroon-900/40 border-gold-400/20 hover:border-gold-400/50 hover:bg-maroon-900/60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif text-2xl font-bold text-cream-100">
                        {r.name}
                      </span>
                      <span className="text-xs text-gold-400 font-serif italic">
                        {r.sanskrit}
                      </span>
                    </div>

                    <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-gold-400 bg-gold-400/10 px-2.5 py-0.5 rounded mb-3">
                      {r.emotion}
                    </div>

                    <p className="text-xs text-cream-100/75 leading-relaxed mb-4">
                      {r.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gold-400/20 flex items-center justify-between text-[11px] text-cream-100/60">
                    <span>Presiding: <strong className="text-gold-300">{r.deity}</strong></span>
                    <span>Color: <strong className="text-gold-300">{r.color}</strong></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Rasa Teaching Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-wine-700/30 via-maroon-900 to-wine-700/30 border border-gold-400/30 text-center max-w-3xl mx-auto">
              <blockquote className="font-serif text-lg sm:text-xl text-cream-100 italic mb-3">
                &ldquo;Yato bhavastato rasaha &mdash; Where genuine devotion and expression dwell, divine emotion is born in the hearts of the audience.&rdquo;
              </blockquote>
              <Link
                href="/contact#enroll"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-xs sm:text-sm font-bold uppercase tracking-wider mt-1"
              >
                <span>Experience Abhinaya in a Free Trial Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
