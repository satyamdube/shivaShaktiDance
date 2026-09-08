import React from "react";
import { WHY_US_ITEMS } from "@/data/danceData";
import { Award, GraduationCap, Users, Sparkles, HeartHandshake } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  GraduationCap,
  Users,
  Sparkles,
  HeartHandshake,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-maroon-950 text-cream-100 relative overflow-hidden">
      {/* Subtle mandala background */}
      <div className="absolute inset-0 subtle-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>The Shiv Shakti Tradition</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100">
            Why Dancers Choose Us
          </h2>
          <p className="mt-4 text-cream-100/75 text-base">
            Rooted in tradition, powered by passion. We foster an artistic sanctuary where every student flourishes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_US_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-gold-400/[0.04] border border-gold-400/20 hover:border-gold-400/60 rounded-xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1.5 hover:bg-gold-400/[0.08] group"
              >
                <div className="w-14 h-14 rounded-full bg-maroon-900 border border-gold-400/40 flex items-center justify-center text-gold-400 mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-medium text-base text-cream-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-100/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
