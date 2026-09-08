"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, Send, CheckCircle2, AlertCircle, Phone, Clock, ShieldCheck, Ticket, User, Calendar, MapPin, MessageCircle } from "lucide-react";
import TrishulLogo from "@/components/TrishulLogo";

function EnrollmentFormContent() {
  const searchParams = useSearchParams();
  const initialInterest = searchParams.get("interest") || searchParams.get("discipline") || "";
  const initialBatch = searchParams.get("batch") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    danceClass: "Bharatanatyam",
    batchPreference: "Weekdays (Tue & Thu) - Evening",
    ageGroup: "Adult (16+ yrs)",
    notes: "",
  });

  useEffect(() => {
    if (initialInterest) {
      if (initialInterest.toLowerCase().includes("bharat")) {
        setFormData((prev) => ({ ...prev, danceClass: "Bharatanatyam" }));
      } else if (initialInterest.toLowerCase().includes("kathak")) {
        setFormData((prev) => ({ ...prev, danceClass: "Kathak & Footwork" }));
      } else if (initialInterest.toLowerCase().includes("bolly") || initialInterest.toLowerCase().includes("semi")) {
        setFormData((prev) => ({ ...prev, danceClass: "Bollywood & Semi-Classical" }));
      } else if (initialInterest.toLowerCase().includes("kid") || initialInterest.toLowerCase().includes("bal")) {
        setFormData((prev) => ({ ...prev, danceClass: "Kids Dance Foundations", ageGroup: "Kids (5-10 yrs)" }));
      }
    }
    if (initialBatch) {
      setFormData((prev) => ({ ...prev, notes: `Interested in batch: ${initialBatch}` }));
    }
  }, [initialInterest, initialBatch]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: data.message,
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          danceClass: "Bharatanatyam",
          batchPreference: "Weekdays (Tue & Thu) - Evening",
          ageGroup: "Adult (16+ yrs)",
          notes: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
      {/* Left Column: Benefits + Live Studio Trial Pass Preview */}
      <div className="lg:col-span-5 space-y-5 sm:space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complimentary First Session</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100 leading-tight">
          Begin Your Dance Journey With a Free Trial
        </h2>

        <p className="text-cream-100/75 text-sm sm:text-base leading-relaxed">
          Step into our studio or join our interactive session. Experience the ambience, meet your
          mentor, and feel the rhythm before you commit.
        </p>

        {/* Live Interactive VIP Studio Pass Preview */}
        <div className="rounded-2xl border-2 border-gold-400/40 bg-gradient-to-br from-maroon-900 via-maroon-950 to-maroon-900 p-4 sm:p-6 shadow-2xl relative overflow-hidden text-cream-100 gold-border-glow">
          <div className="flex items-center justify-between border-b border-gold-400/20 pb-3 sm:pb-4 mb-3 sm:mb-4 gap-2">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <TrishulLogo className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400 shrink-0" />
              <div className="truncate">
                <span className="font-serif font-bold text-xs sm:text-sm tracking-wide text-gold-300 block truncate">
                  SHIV SHAKTI DANCE ACADEMY
                </span>
                <span className="text-[9px] sm:text-[10px] text-cream-100/60 uppercase tracking-widest font-mono">
                  COMPLIMENTARY GUEST PASS
                </span>
              </div>
            </div>
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-gold-400/20 text-gold-300 font-mono text-[11px] sm:text-xs font-bold border border-gold-400/40 shrink-0">
              FREE
            </span>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
                  Guest Dancer
                </span>
                <span className="font-serif text-sm sm:text-base font-bold text-cream-100 truncate block">
                  {formData.name.trim() || "Prospective Dancer"}
                </span>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
                  Category
                </span>
                <span className="text-xs font-semibold text-cream-100">
                  {formData.ageGroup}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
                  Selected Discipline
                </span>
                <span className="text-xs font-bold text-gold-300 truncate block">
                  {formData.danceClass}
                </span>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
                  Batch Preference
                </span>
                <span className="text-xs font-medium text-cream-100/90">
                  {formData.batchPreference.split("-")[0]}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3.5 sm:mt-4 pt-3 border-t border-gold-400/20 flex items-center justify-between text-[10px] text-cream-100/60">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gold-400" />
              <span>Greater Kailash-I, New Delhi</span>
            </span>
            <span className="font-mono text-gold-400">#SSDA-TRIAL-2026</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-gold-400/5 border border-gold-400/20">
            <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-cream-100 text-xs">100% Free, Zero Obligation</h4>
              <p className="text-[11px] text-cream-100/70">
                No credit card or upfront deposit required. Complete 45-minute guided session.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-gold-400/5 border border-gold-400/20">
            <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-cream-100 text-xs">Direct Callback Within 24 Hours</h4>
              <p className="text-[11px] text-cream-100/70">
                Our studio coordinator will call or WhatsApp you to confirm your exact batch timing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Form */}
      <div className="lg:col-span-7 w-full">
        <div className="bg-maroon-900/90 rounded-2xl p-4 sm:p-8 md:p-10 border border-gold-400/30 shadow-2xl backdrop-blur-sm gold-border-glow">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mb-1.5 sm:mb-2">
            Book Your Trial Slot
          </h3>
          <p className="text-xs sm:text-sm text-cream-100/70 mb-5 sm:mb-6">
            Fill out the quick form below. Your personalized Guest Pass will be generated instantly.
          </p>

          {status.type === "success" && (
            <div className="mb-5 sm:mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 flex flex-col gap-2.5 animate-fadeIn">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm font-medium">{status.message}</div>
              </div>
              <a
                href="https://wa.me/919811024590?text=Namaste%20Shiv%20Shakti%20Dance%20Academy%2C%20I%20just%20submitted%20my%20trial%20slot%20reservation!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start ml-8 text-xs font-bold text-emerald-300 hover:text-emerald-100 bg-emerald-900/60 border border-emerald-400/40 px-3 py-1.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat with Coordinator on WhatsApp Now</span>
              </a>
            </div>
          )}

          {status.type === "error" && (
            <div className="mb-5 sm:mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-200 flex items-start gap-3 animate-fadeIn">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div className="text-sm font-medium">{status.message}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-maroon-950/90 border border-gold-400/30 rounded-lg px-3.5 py-2.5 text-sm text-cream-100 placeholder-stone-400 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98110 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-maroon-950/90 border border-gold-400/30 rounded-lg px-3.5 py-2.5 text-sm text-cream-100 placeholder-stone-400 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-maroon-950/90 border border-gold-400/30 rounded-lg px-3.5 py-2.5 text-sm text-cream-100 placeholder-stone-400 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                  Dance Discipline *
                </label>
                <select
                  value={formData.danceClass}
                  onChange={(e) => setFormData({ ...formData, danceClass: e.target.value })}
                  className="w-full bg-maroon-950/90 border border-gold-400/30 rounded-lg px-3.5 py-2.5 text-sm text-cream-100 focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="Bharatanatyam">Bharatanatyam (Kalakshetra Bani)</option>
                  <option value="Kathak & Footwork">Kathak (Lucknow Gharana)</option>
                  <option value="Bollywood & Semi-Classical">Bollywood & Semi-Classical</option>
                  <option value="Kids Dance Foundations">Kids Dance Foundations (Ages 5-12)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                  Age Category
                </label>
                <select
                  value={formData.ageGroup}
                  onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                  className="w-full bg-maroon-950/90 border border-gold-400/30 rounded-lg px-3.5 py-2.5 text-sm text-cream-100 focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="Kids (5-10 yrs)">Kids (5–10 years)</option>
                  <option value="Teens (11-16 yrs)">Teens (11–16 years)</option>
                  <option value="Adult (16+ yrs)">Adult (16+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                  Preferred Batch
                </label>
                <select
                  value={formData.batchPreference}
                  onChange={(e) => setFormData({ ...formData, batchPreference: e.target.value })}
                  className="w-full bg-maroon-950/90 border border-gold-400/30 rounded-lg px-3.5 py-2.5 text-sm text-cream-100 focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="Weekdays (Tue & Thu) - Evening">Weekdays (Tue & Thu) - Evening</option>
                  <option value="Weekends (Sat & Sun) - Morning">Weekends (Sat & Sun) - Morning</option>
                  <option value="Weekends (Sat & Sun) - Evening">Weekends (Sat & Sun) - Evening</option>
                  <option value="Flexible">Flexible / Discuss on Call</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                Prior Dance Experience or Questions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Tell us if you have learned before or any specific goals..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-maroon-950/90 border border-gold-400/30 rounded-lg px-3.5 py-2 text-sm text-cream-100 placeholder-stone-400 focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 hover:from-gold-400 hover:to-gold-200 text-maroon-950 font-bold py-3.5 px-6 rounded-lg shadow-xl hover:shadow-gold-500/25 transition-all flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 animate-shimmer"
            >
              {loading ? (
                <span>Submitting reservation...</span>
              ) : (
                <>
                  <span>Confirm & Book Free Trial Pass</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="pt-2 text-center">
              <a
                href={`https://wa.me/919811024590?text=${encodeURIComponent(
                  `Namaste Shiv Shakti Dance Academy! I would like to reserve a trial slot for ${formData.danceClass || "Dance Class"} (${formData.batchPreference || "Preferred Batch"}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5 border border-emerald-500/30 w-full"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Or Reserve Slot Directly on WhatsApp</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function EnrollmentSection() {
  return (
    <section id="enroll" className="py-16 sm:py-24 bg-maroon-950 text-cream-100 relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute inset-0 subtle-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Suspense fallback={<div className="text-center py-12 text-gold-400">Loading enrollment sanctuary...</div>}>
          <EnrollmentFormContent />
        </Suspense>
      </div>
    </section>
  );
}
