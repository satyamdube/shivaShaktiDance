import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScheduleTable from "@/components/ScheduleTable";
import { Clock, Users, CalendarCheck, RefreshCw, AlertCircle, ArrowRight, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Class Schedule & Batches — Shiv Shakti Dance Academy",
  description:
    "View our weekly class timetable for Bharatanatyam, Kathak, Bollywood, and Kids dance batches in South Delhi.",
};

export default function SchedulePage() {
  const policies = [
    {
      icon: Users,
      title: "Strict 12-Dancer Batch Limit",
      desc: "We never overcrowd. Individual posture alignment and mudra correction is guaranteed for every dancer.",
    },
    {
      icon: RefreshCw,
      title: "Flexible Make-Up Classes",
      desc: "Missed a session due to exams or travel? Notify us 24 hours prior to attend an alternate batch within the month.",
    },
    {
      icon: CalendarCheck,
      title: "Trial Class Reservations",
      desc: "Prospective dancers can attend one complete scheduled class as a complimentary trial prior to formal admission.",
    },
    {
      icon: Clock,
      title: "Punctuality & Pranam",
      desc: "Every class begins with the traditional Bhoomi Pranam (prayer to Mother Earth). Please arrive 10 minutes early.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <PageHeader
        title="Class Timetable & Batch Schedule"
        subtitle="Convenient morning and evening timings designed for school children, college students, and working professionals."
        eyebrow="Weekly Schedule"
        breadcrumbs={[{ label: "Schedule" }]}
      />

      {/* Main Timetable Component */}
      <ScheduleTable />

      {/* Studio Attendance Policies */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="w-6 h-[1px] bg-gold-500" />
              <span>Studio Discipline & Flexibility</span>
              <span className="w-6 h-[1px] bg-gold-500" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900">
              Batch Policies & Attendance
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Designed to balance rigor and respect for tradition with the schedules of busy modern lifestyles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-cream-100/80 rounded-2xl p-6 border border-stone-200/80 hover:border-gold-400/50 transition-all hover:shadow-warm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-maroon-950 text-gold-400 flex items-center justify-center mb-5 border border-gold-400/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-maroon-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Schedule Assistance CTA Banner */}
          <div className="mt-16 text-center bg-maroon-950 text-cream-100 rounded-3xl p-8 sm:p-12 border border-gold-400/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="text-left space-y-2">
              <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Bespoke Training Available</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100">
                Need a custom or private batch schedule?
              </h3>
              <p className="text-xs sm:text-sm text-cream-100/75 max-w-xl">
                We also offer 1-on-1 Arangetram coaching, wedding choreography, and corporate weekend workshops tailored to your timeline.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href="https://wa.me/919811024590?text=Namaste%2C%20I%20am%20inquiring%20about%20a%20custom%20or%20private%20dance%20batch%20schedule."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Coordinator</span>
              </a>

              <Link
                href="/contact#enroll"
                className="bg-gold-400 hover:bg-gold-300 text-maroon-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm"
              >
                <span>Book Studio Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
