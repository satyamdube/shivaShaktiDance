import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import { COMPARISON_DATA } from "@/data/danceData";
import { Sparkles, Check, X, Quote, ArrowRight, BookOpen, Heart, Eye, Award, Music } from "lucide-react";
import TrishulLogo from "@/components/TrishulLogo";

export const metadata: Metadata = {
  title: "Why Choose Us — Shiv Shakti Dance Academy",
  description:
    "Discover the heritage, pedagogical rigor, and stage opportunities that set Shiv Shakti Dance Academy apart in New Delhi.",
};

const NAVARASAS_LIST = [
  {
    name: "Shringara",
    sanskrit: "शृङ्गार",
    meaning: "Divine Love & Beauty",
    deity: "Vishnu",
    color: "Shyama (Dark Blue)",
    expression: "Soft gaze, gentle half-smile, tilting neck, lyrical hand gestures",
    context: "Depicting Radha-Krishna devotion, devotion to Shiva, or bridal anticipation.",
  },
  {
    name: "Hasya",
    sanskrit: "हास्य",
    meaning: "Mirth, Joy & Playfulness",
    deity: "Shiva Pramathas",
    color: "White / Bright",
    expression: "Arched brows, sparkling wide eyes, buoyant lively steps",
    context: "Krishna stealing butter with mischievous friends, humorous dialogues in drama.",
  },
  {
    name: "Raudra",
    sanskrit: "रौद्र",
    meaning: "Fierce Divine Fury",
    deity: "Rudra",
    color: "Crimson Red",
    expression: "Flaring nostrils, blazing wide eyes, thunderous stamping footwork",
    context: "Lord Shiva performing the cosmic Rudra Tandava or Goddess Durga annihilating Mahishasura.",
  },
  {
    name: "Karuna",
    sanskrit: "करुणा",
    meaning: "Pathos & Compassion",
    deity: "Yama",
    color: "Pigeon Grey",
    expression: "Drooping eyelids, trembling lips, inward sighing posture",
    context: "Sita imprisoned in Ashoka Vatika, mother Yasoda yearning for Krishna.",
  },
  {
    name: "Veera",
    sanskrit: "वीर",
    meaning: "Heroism, Valor & Majesty",
    deity: "Indra",
    color: "Golden Wheat",
    expression: "High chest, resolute chin, expansive arms, commanding stance",
    context: "Arjuna raising the Gandiva bow at Kurukshetra, celestial warriors marching.",
  },
  {
    name: "Adbhuta",
    sanskrit: "अद्भुत",
    meaning: "Cosmic Wonder & Awe",
    deity: "Brahma",
    color: "Luminous Yellow",
    expression: "Gazing upward with wide wonderstruck eyes, still breath, trembling lotus mudra",
    context: "Yasoda beholding the entire universe swirling inside child Krishna's open mouth.",
  },
  {
    name: "Shanta",
    sanskrit: "शान्त",
    meaning: "Absolute Peace & Stillness",
    deity: "Narayana",
    color: "Pure Moonlit White",
    expression: "Relaxed forehead, meditative downward gaze, perfect symmetric stillness",
    context: "Sage in deep Samadhi meditation, the universe coming to tranquil rest.",
  },
];

const STAGE_RECITALS = [
  {
    hall: "Kamani Auditorium, Mandi House",
    city: "New Delhi",
    event: "Annual Margam Arangetram Showcase",
    count: "450+ Attendees",
    year: "2024 & 2025",
  },
  {
    hall: "Triveni Kala Sangam",
    city: "New Delhi",
    event: "Young Talents Kathak Baithak",
    count: "Solo Disciples Debut",
    year: "2025",
  },
  {
    hall: "India Habitat Centre (Stein Auditorium)",
    city: "Lodhi Road",
    event: "Nritya Samvedana Inter-Academy Festival",
    count: "First Prize Trophy",
    year: "2024",
  },
];

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <PageHeader
        title="The Shiv Shakti Distinction"
        subtitle="Where ancient Vedic rhythm meets 21st-century stage excellence. Discover the five cornerstones that define our training sanctuary."
        eyebrow="Our Sacred Pedagogy"
        breadcrumbs={[{ label: "Why Us" }]}
      />

      {/* 5 Pillars Component */}
      <WhyUs />

      {/* Natya Shastra Sanskrit Ethos Section */}
      <section className="py-20 bg-cream-100/70 border-b border-gold-400/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-maroon-950 text-gold-400 flex items-center justify-center mx-auto mb-6 border border-gold-400/40 shadow-lg">
            <TrishulLogo className="w-8 h-8 text-gold-400" />
          </div>

          <span className="text-xs uppercase tracking-widest text-wine-700 font-bold block mb-3">
            From the Natya Shastra &bull; Chapter 36
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl text-maroon-950 italic leading-relaxed max-w-3xl mx-auto mb-6">
            &ldquo;Yato hastastato drishti, yato drishtistato manaha.<br />
            Yato manastato bhavo, yato bhavastato rasaha.&rdquo;
          </blockquote>

          <p className="text-stone-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Where the hands go, the eyes follow. Where the eyes go, the mind focuses.
            Where the mind focuses, deep expression is born. And where expression is born,
            divine emotion (Rasa) awakens.
          </p>

          <div className="mt-6 text-xs text-gold-600 font-bold uppercase tracking-wider">
            &mdash; The Fundamental Principle Taught In Every Class
          </div>
        </div>
      </section>

      {/* Navarasas: The Nine Divine Emotions */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <Eye className="w-4 h-4 text-gold-500" />
              <span>Abhinaya & Expression</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              The Navarasas: Mastering Emotional Mastery
            </h2>
            <p className="mt-4 text-stone-600 text-base leading-relaxed">
              Unlike ordinary dance classes focusing only on aerobic steps, Shiv Shakti systematically trains
              students in the Natya Shastra’s 9 emotional realms (Navarasas) so every performance touches the soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NAVARASAS_LIST.map((rasa, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gold-400/30 shadow-warm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3 border-b border-stone-100 pb-3">
                  <div>
                    <span className="font-serif text-2xl font-bold text-maroon-950">
                      {rasa.name}
                    </span>
                    <span className="text-xs text-stone-500 ml-2 font-medium">
                      ({rasa.sanskrit})
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-widest bg-gold-400/10 px-2.5 py-1 rounded-full">
                    {rasa.meaning}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-maroon-900">Eye & Facial Expression: </span>
                    <span className="text-stone-600">{rasa.expression}</span>
                  </div>
                  <div>
                    <span className="font-bold text-maroon-900">Stage Narrative: </span>
                    <span className="text-stone-600">{rasa.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Academy vs Casual Studios */}
      <section className="py-20 bg-cream-100/70 border-t border-gold-400/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="w-6 h-[1px] bg-gold-500" />
              <span>Transparent Comparison</span>
              <span className="w-6 h-[1px] bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900">
              Shiv Shakti Academy vs. Casual Studios
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              Why our graduates perform with unmatched technical poise, stamina, and artistic authority.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gold-400/30 overflow-hidden shadow-warm">
            <div className="grid grid-cols-12 bg-maroon-950 text-cream-100 p-4 sm:p-6 text-xs sm:text-sm font-bold tracking-wider uppercase border-b border-gold-400/30">
              <div className="col-span-4 sm:col-span-4 text-gold-400">Feature / Standard</div>
              <div className="col-span-4 sm:col-span-4 text-gold-300">Shiv Shakti Academy</div>
              <div className="col-span-4 sm:col-span-4 text-stone-400">Casual Hobby Studios</div>
            </div>

            <div className="divide-y divide-stone-100">
              {COMPARISON_DATA.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center hover:bg-gold-400/[0.04] transition-colors"
                >
                  <div className="col-span-4 font-bold text-maroon-900">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-stone-800 flex items-start gap-2 pr-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{row.academy}</span>
                  </div>
                  <div className="col-span-4 text-stone-500 flex items-start gap-2 pl-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.casual}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stage Recitals & Iconic Auditoriums */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-gold-500" />
              <span>Real Stage Exposure</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              Where Our Students Take the Spotlight
            </h2>
            <p className="mt-4 text-stone-600 text-base leading-relaxed">
              We believe a dancer belongs on stage under live theatrical lights, accompanied by professional live musicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STAGE_RECITALS.map((rec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-gold-400 transition-all hover:shadow-warm"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-wine-700 bg-wine-700/10 px-2.5 py-1 rounded-full">
                  {rec.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-maroon-950 mt-3 mb-1">
                  {rec.hall}
                </h3>
                <div className="text-xs text-gold-600 font-semibold mb-2">
                  {rec.city}
                </div>
                <div className="text-xs font-bold text-stone-800 mb-1">
                  {rec.event}
                </div>
                <div className="text-xs text-stone-500">
                  {rec.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA */}
      <section className="py-16 bg-maroon-950 text-cream-100 border-t border-gold-400/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100">
            Experience the Shiv Shakti difference in person.
          </h2>
          <p className="text-cream-100/75 text-sm sm:text-base max-w-xl mx-auto">
            Book a complimentary trial session. Meet our faculty, step onto the wooden floor, and discover
            your inner rhythm.
          </p>
          <div>
            <Link
              href="/contact#enroll"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-maroon-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all animate-shimmer"
            >
              <span>Book Your Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
