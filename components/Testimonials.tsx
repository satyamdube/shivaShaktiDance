import React from "react";
import { TESTIMONIALS } from "@/data/danceData";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream-100/70 border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-6 h-[1px] bg-gold-500" />
            <span>Words of Gratitude</span>
            <span className="w-6 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Voices from Our Academy Family
          </h2>
          <p className="mt-3 text-stone-600 text-base">
            Read how learning dance has cultivated grace, health, and joy for students and families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-cream-50 rounded-2xl p-8 border border-wine-700/10 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gold-500/60 mb-4" />
                <div className="flex items-center gap-1 text-gold-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-stone-200">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-wine-700 text-maroon-950 font-bold flex items-center justify-center text-sm shadow">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-maroon-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-stone-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
