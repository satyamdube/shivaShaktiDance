import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-cream-100 border-t border-gold-400/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gold-400/10">
          {/* Col 1 & 2: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center">
              <BrandLogo size="lg" />
            </Link>

            <p className="text-sm text-cream-100/70 max-w-sm leading-relaxed">
              New Delhi&apos;s premier institute for Indian classical and contemporary dance. Nurturing poise,
              cultural heritage, and stage excellence across all generations.
            </p>

            <div className="text-xs text-gold-400/90 font-medium">
              C-Block, Greater Kailash Part I, South Delhi, India &bull; Metro: Kailash Colony
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-lg font-bold text-cream-100 mb-4 text-gold-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-cream-100/75">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-gold-400 transition-colors">
                  Curriculum & Classes
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-gold-400 transition-colors">
                  Batch Schedule
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-gold-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  Our Heritage & Gurus
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors">
                  Stage Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Dance Disciplines */}
          <div>
            <h4 className="font-serif text-lg font-bold text-cream-100 mb-4 text-gold-300">
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-cream-100/75">
              <li>
                <Link href="/classes" className="hover:text-gold-400 transition-colors">
                  Bharatanatyam Margam
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-gold-400 transition-colors">
                  Kathak & Classical Footwork
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-gold-400 transition-colors">
                  Bollywood & Semi-Classical
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-gold-400 transition-colors">
                  Kids Foundation (5-12 yrs)
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-gold-400 transition-colors">
                  Arangetram Mentorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio Admissions */}
          <div>
            <h4 className="font-serif text-lg font-bold text-cream-100 mb-4 text-gold-300">
              Admissions
            </h4>
            <p className="text-xs text-cream-100/70 mb-4 leading-relaxed">
              New admissions are open for upcoming weekday & weekend batches.
            </p>
            <Link
              href="/contact#enroll"
              className="inline-block w-full text-center bg-gold-400 hover:bg-gold-300 text-maroon-950 font-bold py-2.5 px-4 rounded text-xs uppercase tracking-wider transition-colors shadow"
            >
              Book Free Trial
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-100/60">
          <div>
            &copy; {new Date().getFullYear()} Shiv Shakti Dance Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Next.js 15 &bull; React 19 &bull; App Router &bull; TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
