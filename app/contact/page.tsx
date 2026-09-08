"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import EnrollmentSection from "@/components/EnrollmentSection";
import ContactSection from "@/components/ContactSection";
import { FAQS } from "@/data/danceData";
import { HelpCircle, ChevronDown, ChevronUp, Train, MapPin, Sparkles, Phone, Clock, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <PageHeader
        title="Contact & Studio Admissions"
        subtitle="We invite you to visit our tranquil studio in Greater Kailash, New Delhi, or reserve your complimentary trial class online."
        eyebrow="Get in Touch"
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Live Studio Status Strip */}
      <div className="bg-maroon-950 border-b border-gold-400/30 text-cream-100 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400">Studio Open Today</span>
            <span className="text-cream-100/60">&bull;</span>
            <span className="text-cream-100/80">9:00 AM – 8:00 PM IST &bull; Live Batches in Session</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cream-100/70 hidden sm:inline">Admissions Coordinator Hotline:</span>
            <a
              href="tel:+919811024590"
              className="font-bold text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98110 24590</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trial Booking Section with Live VIP Guest Pass Preview */}
      <EnrollmentSection />

      {/* Studio Location & Contact Cards */}
      <ContactSection />

      {/* Metro & Directions Guide */}
      <section className="py-20 bg-cream-100/70 border-y border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <Train className="w-4 h-4 text-gold-500" />
              <span>Visiting Our Greater Kailash Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900">
              How to Reach Our Sanctuary
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Conveniently located in South Delhi with effortless access from both Violet and Magenta Metro lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-gold-400/50 transition-all hover:shadow-warm">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs mb-4">
                Violet
              </div>
              <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">
                Kailash Colony Station
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-2 font-medium">
                Violet Line &bull; 1.2 km away
              </p>
              <p className="text-xs text-stone-500">
                5-minute auto-rickshaw or e-rickshaw ride directly to C-Block, Greater Kailash-I.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-gold-400/50 transition-all hover:shadow-warm">
              <div className="w-10 h-10 rounded-full bg-fuchsia-100 text-fuchsia-800 flex items-center justify-center font-bold text-xs mb-4">
                Magenta
              </div>
              <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">
                Greater Kailash Station
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-2 font-medium">
                Magenta Line &bull; 1.8 km away
              </p>
              <p className="text-xs text-stone-500">
                7-minute cab ride. Ideal for students commuting from Noida, Gurugram, or IGI Airport.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-gold-400/50 transition-all hover:shadow-warm">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-4">
                Cars
              </div>
              <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">
                Driving & Dedicated Parking
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-2 font-medium">
                Near M-Block Market
              </p>
              <p className="text-xs text-stone-500">
                Dedicated visitor parking available directly in front of the academy and adjacent service lane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <HelpCircle className="w-4 h-4 text-gold-500" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Everything you need to know about joining our classes, batch fees, and trial sessions.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-lg font-bold text-maroon-900 hover:text-wine-700 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gold-600 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-stone-700 text-sm leading-relaxed border-t border-stone-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
