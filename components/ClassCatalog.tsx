"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DANCE_CLASSES, DanceClass } from "@/data/danceData";
import { CheckCircle2, X, ArrowUpRight, Sparkles, Clock, Calendar, BookOpen, Award, ShieldCheck } from "lucide-react";

interface ClassCatalogProps {
  showAllDetails?: boolean;
}

export default function ClassCatalog({ showAllDetails = false }: ClassCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "classical" | "contemporary" | "kids">("all");
  const [selectedClass, setSelectedClass] = useState<DanceClass | null>(null);

  const filteredClasses = DANCE_CLASSES.filter((c) => {
    if (activeFilter === "all") return true;
    return c.category === activeFilter;
  });

  return (
    <section id="classes" className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-6 h-[1px] bg-gold-500" />
            <span>Curriculum & Batches</span>
            <span className="w-6 h-[1px] bg-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 tracking-tight">
            For Kids, Teens & Adults
          </h2>
          <p className="mt-4 text-stone-600 text-base leading-relaxed">
            From the timeless temple traditions of Bharatanatyam to energetic cinematic routines,
            find the dance discipline that elevates your soul.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap mb-12">
          {[
            { label: "All Classes", value: "all" },
            { label: "Classical (Bharatanatyam & Kathak)", value: "classical" },
            { label: "Bollywood & Semi-Classical", value: "contemporary" },
            { label: "Kids Foundations", value: "kids" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.value
                  ? "bg-maroon-900 text-gold-300 shadow-md border border-gold-400/40 transform scale-105"
                  : "bg-cream-100 text-maroon-950/80 hover:bg-gold-300/30 border border-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4.4] shadow-warm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-maroon-950 border border-gold-400/20 hover:border-gold-400/60"
              onClick={() => setSelectedClass(item)}
            >
              {/* Card Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/65 to-transparent" />

              {/* Top Meta */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="font-serif italic text-gold-300 text-lg font-bold bg-maroon-950/60 px-2.5 py-0.5 rounded-md border border-gold-400/20 backdrop-blur-sm">
                  {item.number}
                </span>
                <span className="bg-maroon-900/90 backdrop-blur-sm border border-gold-400/40 text-gold-300 text-[11px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-md">
                  {item.level}
                </span>
              </div>

              {/* Bottom Body */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 space-y-2">
                <h3 className="font-serif text-2xl font-bold text-cream-100 group-hover:text-gold-300 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-xs text-cream-100/80 line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-gold-400/20 flex items-center justify-between text-[11px] text-gold-400 font-medium">
                  <span>{item.ageGroup}</span>
                  <span className="font-bold underline group-hover:text-gold-300">View Curriculum &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Class Details Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-maroon-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-cream-50 rounded-2xl max-w-xl w-full overflow-hidden border border-gold-400/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="relative h-44 sm:h-64">
              <img
                src={selectedClass.image}
                alt={selectedClass.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/40 to-transparent" />
              <button
                onClick={() => setSelectedClass(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 rounded-full bg-maroon-950/80 text-cream-100 flex items-center justify-center hover:bg-maroon-900 border border-gold-400/40 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5 text-gold-400" />
              </button>
              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-cream-100">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                  {selectedClass.category} &bull; {selectedClass.level}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100">
                  {selectedClass.title}
                </h3>
              </div>
            </div>

            <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
              {/* Quick Meta Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200">
                  <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Age Group</div>
                  <div className="text-xs font-semibold text-maroon-950 mt-0.5">{selectedClass.ageGroup}</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200">
                  <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Commitment</div>
                  <div className="text-xs font-semibold text-maroon-950 mt-0.5">{selectedClass.duration}</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200 col-span-2 sm:col-span-1">
                  <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Certification</div>
                  <div className="text-xs font-semibold text-maroon-950 mt-0.5">Gandharva Board</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-maroon-900 mb-1.5 sm:mb-2">About This Program</h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {selectedClass.longDescription || selectedClass.description}
                </p>
              </div>

              {/* Highlights */}
              {selectedClass.highlights && (
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-maroon-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <span>Key Learning Outcomes</span>
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    {selectedClass.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Attire & Prereq */}
              <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-stone-200 text-xs">
                {selectedClass.attire && (
                  <div>
                    <span className="font-bold text-maroon-950">Recommended Attire: </span>
                    <span className="text-stone-600">{selectedClass.attire}</span>
                  </div>
                )}
                {selectedClass.prerequisites && (
                  <div>
                    <span className="font-bold text-maroon-950">Prerequisites: </span>
                    <span className="text-stone-600">{selectedClass.prerequisites}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                <Link
                  href={`/contact?interest=${encodeURIComponent(selectedClass.title)}#enroll`}
                  onClick={() => setSelectedClass(null)}
                  className="flex-1 text-center bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-maroon-950 font-bold px-5 py-3.5 rounded-xl text-sm shadow-md transition-all"
                >
                  Book Free Trial in {selectedClass.title}
                </Link>
                <Link
                  href="/schedule"
                  onClick={() => setSelectedClass(null)}
                  className="text-center px-5 py-3.5 rounded-xl border border-stone-300 hover:border-maroon-900 text-maroon-900 text-sm font-semibold transition-colors"
                >
                  View Timings
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
