import React from "react";
import TrishulLogo from "@/components/TrishulLogo";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 group shrink-0 ${className}`}>
      {/* Sacred Golden Trishul Emblem */}
      <div
        className={`shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center ${
          isLarge
            ? "w-12 h-14 sm:w-14 sm:h-16"
            : isSmall
            ? "w-8 h-10 sm:w-9 sm:h-11"
            : "w-8 h-10 sm:w-10 sm:h-12 md:w-11 md:h-14"
        }`}
      >
        <TrishulLogo className="w-full h-full object-contain drop-shadow-md" />
      </div>

      {/* 3-Tier Brand Typography */}
      <div className="flex flex-col justify-center select-none whitespace-nowrap">
        {/* Tier 1: Shiv Shakti (Warm Golden Serif) */}
        <div
          className={`font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 transition-colors ${
            isLarge
              ? "text-2xl sm:text-3xl"
              : isSmall
              ? "text-base sm:text-lg leading-tight"
              : "text-lg sm:text-xl md:text-2xl leading-tight"
          }`}
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}
        >
          Shiv Shakti
        </div>

        {/* Tier 2: DANCE ACADEMY (Crisp All-Caps White Sans) */}
        <div
          className={`font-sans font-extrabold uppercase text-white transition-opacity ${
            isLarge
              ? "text-[11px] sm:text-[13px] tracking-[0.22em] mt-0.5 sm:mt-1"
              : isSmall
              ? "text-[8px] sm:text-[9px] tracking-[0.18em] mt-0.5"
              : "text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] mt-0.5"
          }`}
        >
          DANCE ACADEMY
        </div>

        {/* Tier 3: Where Devotion Meets Expression (Flowing Calligraphic Script) */}
        <div
          className={`font-script text-cream-100/90 font-normal leading-none italic ${
            isLarge
              ? "text-sm sm:text-base md:text-lg mt-0.5 sm:mt-1"
              : isSmall
              ? "text-[11px] sm:text-xs mt-0.5"
              : "text-[11px] sm:text-xs md:text-sm mt-0.5"
          }`}
        >
          Where Devotion Meets Expression
        </div>
      </div>
    </div>
  );
}
