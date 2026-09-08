"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919811024590?text=Namaste%20Shiv%20Shakti%20Dance%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20classes."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3 sm:p-3.5 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-105 border-2 border-emerald-300/40 touch-manipulation"
      aria-label="Chat with Admissions on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2 hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
