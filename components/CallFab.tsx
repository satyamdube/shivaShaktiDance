"use client";

import React from "react";
import { PhoneCall } from "lucide-react";

export default function CallFab() {
  return (
    <a
      href="tel:+919811024590"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-gold-300 text-maroon-950 p-3 sm:p-3.5 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-105 border-2 border-gold-300/80 touch-manipulation"
      aria-label="Call Shiv Shakti Dance Academy Admissions"
    >
      {/* Subtle glowing beacon dot */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-wine-700" />
      </span>

      <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2 hidden sm:inline">
        Call: +91 98110 24590
      </span>
    </a>
  );
}
