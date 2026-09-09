import React from "react";
import Link from "next/link";
import {
  WifiOff,
  RefreshCw,
  Phone,
  MessageCircle,
  Home,
  BookOpen,
  Calendar,
  Sparkles,
} from "lucide-react";

import RetryButton from "@/components/RetryButton";

export const metadata = {
  title: "Offline — Shiv Shakti Dance Academy",
  description:
    "You are currently browsing offline. Cached academy pages and direct contact lines remain accessible.",
};

export default function OfflinePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-cream-50 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-wine-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full mx-auto relative z-10">
        {/* Offline Icon Emblem */}
        <div className="relative inline-block mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-maroon-900 to-maroon-950 border-2 border-gold-400/60 shadow-warm-lg flex items-center justify-center mx-auto text-gold-300">
            <WifiOff className="w-10 h-10 animate-pulse text-gold-400" />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-maroon-800 border border-gold-400 items-center justify-center text-[10px] text-gold-300 font-bold">
              ⚡
            </span>
          </span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/10 border border-maroon-900/20 text-maroon-900 text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>Offline Mode Active</span>
        </div>

        {/* Headings */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-maroon-950 mb-3 tracking-tight">
          Where Devotion Keeps Moving
        </h1>
        <p className="text-sm sm:text-base text-ink/75 leading-relaxed max-w-md mx-auto mb-8">
          You are currently offline, but you can still access previously loaded
          curriculum, schedules, and academy contact numbers.
        </p>

        {/* Retry Button */}
        <div className="flex justify-center mb-10">
          <RetryButton />
        </div>

        {/* Cached Pages Quick Links */}
        <div className="bg-white/80 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-6 shadow-sm mb-8 text-left">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-maroon-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-500" />
            <span>Cached Pages (Available Offline)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 hover:bg-cream-100/80 border border-gold-400/20 text-ink transition-colors group"
            >
              <Home className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Home Page</span>
            </Link>
            <Link
              href="/classes"
              className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 hover:bg-cream-100/80 border border-gold-400/20 text-ink transition-colors group"
            >
              <BookOpen className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Dance Classes</span>
            </Link>
            <Link
              href="/schedule"
              className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 hover:bg-cream-100/80 border border-gold-400/20 text-ink transition-colors group"
            >
              <Calendar className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">Class Schedule</span>
            </Link>
          </div>
        </div>

        {/* Offline Helpline Card */}
        <div className="bg-maroon-950 text-cream-50 rounded-2xl p-5 border border-gold-400/30 text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-warm">
          <div>
            <div className="text-xs text-gold-400 uppercase tracking-widest font-semibold mb-1">
              Direct Academy Helpline
            </div>
            <p className="text-xs text-cream-100/80">
              Cellular voice calls work even without mobile internet data.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="tel:+919876543210"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-maroon-950 px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
