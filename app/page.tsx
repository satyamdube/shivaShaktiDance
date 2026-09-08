import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import ClassCatalog from "@/components/ClassCatalog";
import MudraExplorer from "@/components/MudraExplorer";
import DanceQuiz from "@/components/DanceQuiz";
import ScheduleTable from "@/components/ScheduleTable";
import WhyUs from "@/components/WhyUs";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import EnrollmentSection from "@/components/EnrollmentSection";
import ContactSection from "@/components/ContactSection";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />

      {/* Classes Preview with Gateway CTA */}
      <div className="relative">
        <ClassCatalog />
        <div className="text-center pb-16 bg-cream-50">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 bg-maroon-900 hover:bg-wine-700 text-gold-300 font-semibold px-8 py-3.5 rounded-full text-sm shadow-md transition-all transform hover:-translate-y-0.5 border border-gold-400/40"
          >
            <span>View Full Curriculum & Progression Path</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>

      {/* Interactive Natya Shastra Mudra & Rasa Explorer */}
      <MudraExplorer />

      {/* 30-Second Interactive Dance Calling & Batch Matcher Quiz */}
      <DanceQuiz />

      {/* Schedule Preview with Gateway CTA */}
      <div className="relative">
        <ScheduleTable />
        <div className="text-center pb-16 bg-cream-100/60 border-b border-gold-400/20">
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 bg-maroon-900 hover:bg-wine-700 text-gold-300 font-semibold px-8 py-3.5 rounded-full text-sm shadow-md transition-all transform hover:-translate-y-0.5 border border-gold-400/40"
          >
            <span>Check Detailed Batch Availability & Studio Policies</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>

      {/* Why Us with Gateway CTA */}
      <div className="relative">
        <WhyUs />
        <div className="text-center pb-16 bg-maroon-950">
          <Link
            href="/why-us"
            className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-maroon-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>Read Natya Shastra Ethos & Academy Comparison</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* About Section with Gateway CTA */}
      <div className="relative">
        <AboutSection />
        <div className="text-center pb-16 bg-cream-100/50">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-maroon-900 hover:bg-wine-700 text-gold-300 font-semibold px-8 py-3.5 rounded-full text-sm shadow-md transition-all transform hover:-translate-y-0.5 border border-gold-400/40"
          >
            <span>Meet All Gurus & Explore Studio Facilities</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>

      {/* Gallery with Gateway CTA */}
      <div className="relative">
        <Gallery />
        <div className="text-center pb-16 bg-cream-50">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-maroon-900 hover:bg-wine-700 text-gold-300 font-semibold px-8 py-3.5 rounded-full text-sm shadow-md transition-all transform hover:-translate-y-0.5 border border-gold-400/40"
          >
            <span>Open Interactive Media Gallery & Lightbox</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>

      <Testimonials />
      <EnrollmentSection />
      <ContactSection />
    </>
  );
}
