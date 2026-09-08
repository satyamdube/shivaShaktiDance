"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SCHEDULE_ITEMS, ScheduleItem } from "@/data/danceData";
import { Calendar, Clock, User, CheckCircle, AlertCircle, LayoutGrid, List, MapPin, Sparkles, ArrowRight } from "lucide-react";

export default function ScheduleTable() {
  const [selectedDay, setSelectedDay] = useState<"all" | "Weekdays (Tue & Thu)" | "Weekends (Sat & Sun)">("all");
  const [viewMode, setViewMode] = useState<"cards" | "grid">("cards");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filteredSchedule = SCHEDULE_ITEMS.filter((item) => {
    const dayMatch = selectedDay === "all" || item.day === selectedDay;
    const catMatch =
      categoryFilter === "all" ||
      (categoryFilter === "classical" && item.category.toLowerCase().includes("classical")) ||
      (categoryFilter === "contemporary" && (item.category.toLowerCase().includes("contemporary") || item.category.toLowerCase().includes("bollywood"))) ||
      (categoryFilter === "kids" && item.category.toLowerCase().includes("kids"));
    return dayMatch && catMatch;
  });

  return (
    <section id="schedule" className="py-20 bg-cream-100/60 border-y border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
            <Calendar className="w-4 h-4 text-gold-500" />
            <span>Timetable & Live Vacancy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900">
            Current Batch Schedule
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Both morning & evening batches available. Reserve early as batch sizes are strictly capped at 12 students.
          </p>
        </div>

        {/* Controls Bar: Day Filter + Category Filter + View Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200 shadow-sm">
          {/* Day Filter */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { label: "All Days", value: "all" },
              { label: "Weekdays (Tue & Thu)", value: "Weekdays (Tue & Thu)" },
              { label: "Weekends (Sat & Sun)", value: "Weekends (Sat & Sun)" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedDay(tab.value as any)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedDay === tab.value
                    ? "bg-maroon-900 text-gold-300 shadow border border-gold-400/40"
                    : "bg-cream-100 text-stone-700 hover:bg-gold-100 border border-stone-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between sm:justify-end gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
            <span className="text-xs text-stone-500 font-medium hidden sm:inline">View:</span>
            <div className="flex items-center bg-cream-100 p-1 rounded-lg border border-stone-200">
              <button
                onClick={() => setViewMode("cards")}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  viewMode === "cards" ? "bg-white text-maroon-950 shadow-sm" : "text-stone-600 hover:text-maroon-950"
                }`}
                title="Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Cards</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  viewMode === "grid" ? "bg-white text-maroon-950 shadow-sm" : "text-stone-600 hover:text-maroon-950"
                }`}
                title="Timetable View"
              >
                <List className="w-3.5 h-3.5" />
                <span>Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Cards View */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-gold-400/30 shadow-warm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon-900 bg-gold-400/20 px-3 py-1 rounded-full border border-gold-400/30">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      <span>{item.time}</span>
                    </span>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        item.status === "Open"
                          ? "bg-emerald-100 text-emerald-800"
                          : item.status === "Few Seats Left"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.status === "Open"
                            ? "bg-emerald-600 animate-pulse"
                            : item.status === "Few Seats Left"
                            ? "bg-amber-600 animate-pulse"
                            : "bg-rose-600"
                        }`}
                      />
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-maroon-900 mb-1 group-hover:text-wine-700 transition-colors">
                    {item.className}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-stone-600 mb-3">
                    <span className="font-medium bg-cream-100 px-2.5 py-0.5 rounded border border-stone-200">
                      {item.day}
                    </span>
                    <span>Level: {item.level}</span>
                  </div>

                  <div className="text-xs text-stone-500 flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span>{item.studioRoom}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-stone-700">
                    <User className="w-4 h-4 text-wine-700" />
                    <span className="font-medium">{item.instructor}</span>
                  </div>
                  <Link
                    href={`/contact?batch=${encodeURIComponent(item.className + " (" + item.day + " - " + item.time + ")")}#enroll`}
                    className="font-bold text-wine-700 hover:text-maroon-950 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Reserve Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: Detailed Table View */
          <div className="bg-white rounded-2xl border border-gold-400/30 shadow-warm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-xs sm:text-sm">
                <thead className="bg-maroon-950 text-gold-300 font-serif">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Discipline & Batch</th>
                    <th className="px-6 py-4 font-semibold">Days</th>
                    <th className="px-6 py-4 font-semibold">Timing</th>
                    <th className="px-6 py-4 font-semibold">Instructor</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredSchedule.map((item) => (
                    <tr key={item.id} className="hover:bg-cream-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-serif font-bold text-maroon-950 text-base">{item.className}</div>
                        <div className="text-xs text-stone-500">{item.level} &bull; {item.studioRoom}</div>
                      </td>
                      <td className="px-6 py-4 text-stone-700 font-medium">{item.day}</td>
                      <td className="px-6 py-4 text-stone-900 font-bold">{item.time}</td>
                      <td className="px-6 py-4 text-stone-700">{item.instructor}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1 ${
                            item.status === "Open"
                              ? "bg-emerald-100 text-emerald-800"
                              : item.status === "Few Seats Left"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/contact?batch=${encodeURIComponent(item.className + " (" + item.day + " - " + item.time + ")")}#enroll`}
                          className="inline-flex items-center gap-1 text-xs font-bold bg-maroon-900 hover:bg-wine-700 text-gold-300 px-4 py-2 rounded-lg transition-colors"
                        >
                          <span>Reserve</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
