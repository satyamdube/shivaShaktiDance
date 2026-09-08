import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ClassCatalog from "@/components/ClassCatalog";
import { PROGRESSION_STEPS } from "@/data/danceData";
import { CheckCircle2, Sparkles, Shirt, Music, Heart, ArrowRight, Award, Bell, BookOpen, ShieldCheck } from "lucide-react";
import TrishulLogo from "@/components/TrishulLogo";

export const metadata: Metadata = {
  title: "Dance Classes & Curriculum — Shiv Shakti Dance Academy",
  description:
    "Explore our classical Bharatanatyam, Kathak, Bollywood Semi-Classical, and Kids Dance training programs in New Delhi.",
};

const GHUNGROO_LEVELS = [
  {
    tier: "Beginner (Aarambh)",
    bells: "50 Bells / Leg",
    cord: "Padded Red Velvet or Braided Cotton",
    weight: "Lightweight (~250g)",
    purpose: "Teaches delicate foot placement without overloading young ankles or joints.",
    idealFor: "Year 1–2 students learning Tatta, Natta, and introductory Tatkar.",
  },
  {
    tier: "Intermediate (Madhyama)",
    bells: "100 Bells / Leg",
    cord: "Heavy Woven Cotton Cord (Dori)",
    weight: "Medium Density (~500g)",
    purpose: "Produces sharp, crystalline resonance required for complex Solkattu and Teentaal padhant.",
    idealFor: "Year 3–4 dancers mastering Jathi sequences, Varnams, and chakkars.",
  },
  {
    tier: "Arangetram & Concert (Poorna)",
    bells: "150–200 Bells / Leg",
    cord: "Traditional Hand-Strung Brass on Cotton",
    weight: "Full Concert Weight (~900g)",
    purpose: "Deep metallic resonance designed to project over live Carnatic and Hindustani orchestra.",
    idealFor: "Senior disciples preparing for solo debut recitals and stage graduation.",
  },
];

const GANDHARVA_CURRICULUM = [
  {
    stage: "Stage 1",
    title: "Prarambhik & Praveshika Pratham",
    duration: "Year 1 – 2",
    syllabus: "Basic Adavus / Tatkar, Talam counting (Rupak & Adi), 28 Single-hand Mudras, simple shlokas.",
  },
  {
    stage: "Stage 2",
    title: "Praveshika Poorna",
    duration: "Year 3",
    syllabus: "All 10 series of Adavus, Alarippu, Jatiswaram, Teentaal Toda / Tukra, Abhinaya foundation.",
  },
  {
    stage: "Stage 3",
    title: "Madhyama Pratham & Poorna",
    duration: "Year 4 – 5",
    syllabus: "Shabdam, full Varnam, Thillana, Tarana, complex Jaatis, Natya Shastra shloka recitations.",
  },
  {
    stage: "Stage 4",
    title: "Visharad (Diploma)",
    duration: "Year 6 – 7",
    syllabus: "Complete Margam repertoire, solo stage stamina, choreographic improvisation, viva voce.",
  },
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <PageHeader
        title="Curriculum & Dance Programs"
        subtitle="Immerse yourself in structured training that balances technical precision with emotive storytelling. For children, teens, and adults."
        eyebrow="Classical & Modern Disciplines"
        breadcrumbs={[{ label: "Classes" }]}
      />

      {/* Main Catalog Component */}
      <ClassCatalog />

      {/* Attire & Sacred Ghungroos Visual Guide */}
      <section className="py-20 bg-cream-100/80 border-t border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <Bell className="w-4 h-4 text-gold-500" />
              <span>Sacred Instruments of Rhythm</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              The Dancer&apos;s Ghungroo & Attire Guide
            </h2>
            <p className="mt-4 text-stone-600 text-base leading-relaxed">
              In Indian classical dance, Ghungroos (brass bells) are not mere accessories; they are sacred
              instruments consecrated before Nataraja. Discover the progression from your very first cord.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GHUNGROO_LEVELS.map((g, idx) => (
              <div
                key={idx}
                className="bg-cream-50 rounded-2xl p-7 border border-gold-400/30 shadow-warm relative flex flex-col justify-between hover:shadow-xl hover:border-gold-400 transition-all transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-wider bg-gold-400/10 px-3 py-1 rounded-full border border-gold-400/30">
                      {g.tier}
                    </span>
                    <span className="font-serif text-lg font-bold text-maroon-900 flex items-center gap-1.5">
                      <Bell className="w-4 h-4 text-gold-500" />
                      {g.bells}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-maroon-950 mb-2">
                    {g.cord}
                  </h3>

                  <div className="text-xs font-semibold text-wine-700 mb-4">
                    Weight Profile: {g.weight}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {g.purpose}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider block mb-1">
                    Recommended For
                  </span>
                  <div className="text-xs font-semibold text-maroon-950">
                    {g.idealFor}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Attire Tip Strip */}
          <div className="mt-12 rounded-2xl bg-white p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0">
                <Shirt className="w-6 h-6 text-gold-600" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-maroon-950">Practice Attire for Daily Classes</h4>
                <p className="text-xs text-stone-600">
                  Cotton practice saree / pyjama with dupatta tied firmly across the chest. Clean bare feet on teakwood floor.
                </p>
              </div>
            </div>
            <Link
              href="/contact#enroll"
              className="shrink-0 px-6 py-2.5 rounded-full bg-maroon-900 hover:bg-wine-700 text-gold-300 text-xs font-bold transition-colors"
            >
              Ask Studio Coordinator &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Progression Roadmap */}
      <section className="py-20 bg-cream-50 border-t border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>Step-by-Step Evolution</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              The Classical Dancer&apos;s Journey
            </h2>
            <p className="mt-4 text-stone-600 text-base leading-relaxed">
              Every master dancer begins with a single step. Our graded curriculum is rooted in the
              Natya Shastra, guiding students through rhythmic discipline, expression, and stage graduation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRESSION_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-7 border border-gold-400/30 shadow-warm relative flex flex-col justify-between hover:shadow-warm-lg transition-all transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-gold-600">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-semibold text-wine-700 bg-wine-700/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-maroon-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider block mb-1">
                    Key Milestone
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-maroon-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{step.milestone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gandharva Mahavidyalaya Certified Exam Track */}
      <section className="py-20 bg-cream-100/70 border-t border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-gold-500" />
              <span>Government-Recognized Diplomas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              Gandharva Mahavidyalaya Examination Syllabus
            </h2>
            <p className="mt-4 text-stone-600 text-base leading-relaxed">
              We prepare eligible students for annual board exams conducted by Akhil Bharatiya Gandharva Mahavidyalaya Mandal,
              giving our graduates recognized credentials for university admissions and national fellowships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {GANDHARVA_CURRICULUM.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gold-400/30 shadow-warm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-wine-700 uppercase tracking-widest bg-wine-700/10 px-3 py-1 rounded-full">
                    {item.stage} &bull; {item.duration}
                  </span>
                  <BookOpen className="w-4 h-4 text-gold-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-maroon-950 mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.syllabus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attire & Studio Guidelines Banner */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-maroon-950 text-cream-100 rounded-3xl p-8 sm:p-12 border border-gold-400/30 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold flex items-center gap-2">
                  <TrishulLogo className="w-4 h-4" />
                  <span>Studio Protocol & Free Trial</span>
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100">
                  Ready to Experience Your First Class?
                </h3>
                <p className="text-cream-100/75 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Step inside our sunlit, teakwood-floored studio in Greater Kailash. Experience how our Gurus gently
                  guide beginners and challenge advanced dancers alike.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-gold-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                    <span>No prior dance background required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                    <span>Free Ghungroo fitting during trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                    <span>Friendly batch sizes capped at 12</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <Link
                  href="/contact#enroll"
                  className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-maroon-950 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-gold-500/25 transition-all text-sm sm:text-base flex items-center gap-2 animate-shimmer"
                >
                  <span>Book Free Trial Class</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
