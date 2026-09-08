import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  eyebrow: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative bg-maroon-950 text-cream-100 py-12 sm:py-20 md:py-24 border-b border-gold-400/20 overflow-hidden">
      {/* Decorative background mandalas */}
      <div className="absolute inset-0 subtle-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full border border-gold-400/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full border border-gold-400/15 border-dashed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb nav */}
        <nav className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-cream-100/60 mb-5 sm:mb-6 bg-maroon-900/60 border border-gold-400/20 px-3.5 sm:px-4 py-1.5 rounded-full max-w-full overflow-x-auto">
          <Link href="/" className="hover:text-gold-300 transition-colors shrink-0">
            Home
          </Link>
          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400/60 shrink-0" />
              {bc.href ? (
                <Link href={bc.href} className="hover:text-gold-300 transition-colors truncate">
                  {bc.label}
                </Link>
              ) : (
                <span className="text-gold-300 font-medium truncate">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 text-gold-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">
          <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400" />
          <span>{eyebrow}</span>
          <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-cream-100 tracking-tight leading-[1.15] sm:leading-tight max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-cream-100/75 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
