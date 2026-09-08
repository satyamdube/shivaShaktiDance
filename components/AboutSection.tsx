import React from "react";
import { Check, Sparkles, Heart } from "lucide-react";

export default function AboutSection() {
  const points = [
    "Steeped in authentic Guru-Shishya Parampara (master-disciple lineage)",
    "Structured syllabus with optional graded certification examinations",
    "Stage-ready choreography, costume styling, and annual auditorium recitals",
    "Supportive, encouraging environment for shy beginners to blossom into confident performers",
  ];

  return (
    <section id="about" className="py-24 bg-cream-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase with Guru Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold-400/30 aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Guru & Academy Dancers"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Guru Profile Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-maroon-950 text-cream-100 p-6 rounded-2xl border border-gold-400/50 shadow-2xl max-w-xs sm:max-w-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gold-500 to-wine-600 border-2 border-gold-400 flex items-center justify-center font-serif text-2xl font-bold text-maroon-950 shadow shrink-0">
                    MS
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-gold-400 font-bold block">
                      Artistic Director & Guru
                    </span>
                    <h4 className="font-serif text-xl font-bold text-cream-100">
                      Vidushi Meenakshi Sharma
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-cream-100/70 italic leading-relaxed">
                  &ldquo;Dance is not merely movement; it is devotion turned visible. When you surrender to rhythm, you find your truest self.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* About Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span>Our Heritage & Vision</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 leading-tight">
              A Sacred Space Where Heritage Meets Creative Expression
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Founded over a decade ago in New Delhi, <strong>Shiv Shakti Dance Academy</strong> was born
              from a deep reverence for the sacred Indian classical arts. We believe that rhythmic
              discipline unlocks inner poise, emotional expression, and joyful vitality.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether you are a 5-year-old child taking your first energetic steps, a teenager preparing
              for an Arangetram, or an adult reconnecting with your childhood passion for dance, our
              doors are open to you.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-stone-800 text-sm">
                  <div className="w-5 h-5 rounded-full bg-wine-700/10 text-wine-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#enroll"
                className="inline-flex items-center gap-2 text-maroon-900 font-bold border-b-2 border-gold-500 hover:text-wine-700 pb-1 text-sm tracking-wide transition-colors"
              >
                <span>Read student journeys and enroll today</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
