import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { FACULTY_MEMBERS } from "@/data/danceData";
import { Sparkles, Award, GraduationCap, Building2, Music, CheckCircle2, ArrowRight, GitFork, Milestone, Compass } from "lucide-react";
import TrishulLogo from "@/components/TrishulLogo";

export const metadata: Metadata = {
  title: "About Us & Lineage — Shiv Shakti Dance Academy",
  description:
    "Discover the Guru-Shishya Parampara lineage, our esteemed classical Gurus, and our 12-year history in South Delhi.",
};

const LINEAGE_BRANCHES = [
  {
    discipline: "Bharatanatyam (Kalakshetra Bani)",
    origin: "Tanjore Quartet Tradition",
    steps: [
      { name: "Ancient Natya Shastra", role: "Sacred Root (Sage Bharata Muni)" },
      { name: "Tanjore Quartet & Rukmini Devi", role: "Kalakshetra Foundation" },
      { name: "Guru K. N. Dandayudhapani Pillai", role: "Direct Lineage Mentor" },
      { name: "Vidushi Meenakshi Sharma", role: "Founder & Artistic Director" },
      { name: "Shiv Shakti Disciples", role: "Current & Graduating Dancers" },
    ],
  },
  {
    discipline: "Kathak (Lucknow Gharana)",
    origin: "Kalka-Bindadin Heritage",
    steps: [
      { name: "Katha Kahe So Kathak", role: "Ancient Temple Storytellers" },
      { name: "Kalka-Bindadin Maharaj", role: "Lucknow Gharana Royal Court" },
      { name: "Padma Vibhushan Pt. Birju Maharaj", role: "Direct Inspiration & Master" },
      { name: "Pt. Rajendra Gangani Disciples", role: "Faculty Leadership" },
      { name: "Shiv Shakti Disciples", role: "Current & Graduating Dancers" },
    ],
  },
];

const MILESTONES = [
  {
    year: "2014",
    title: "Sacred Consecration",
    desc: "Academy founded in Greater Kailash, South Delhi with 8 devoted shishyas on traditional sprung teakwood.",
  },
  {
    year: "2017",
    title: "First Solo Arangetram Recital",
    desc: "Graduation of our pioneer Bharatanatyam batch at Kamani Auditorium before a packed audience of critics.",
  },
  {
    year: "2020",
    title: "Gandharva Board Affiliation",
    desc: "Officially accredited examination center under Akhil Bharatiya Gandharva Mahavidyalaya Mandal.",
  },
  {
    year: "2023",
    title: "National Recital Accolades",
    desc: "Academy disciples awarded Gold at the National Youth Dance Festival and featured on national television.",
  },
  {
    year: "2026",
    title: "A Vibrant Community of 500+ Dancers",
    desc: "Nurturing the next generation of classical and contemporary dancers with world-class facilities and global masterclasses.",
  },
];

export default function AboutPage() {
  const facilities = [
    {
      title: "Sprung Teakwood Dance Floors",
      desc: "Specially engineered shock-absorbing wooden floors to protect dancers' knees, ankles, and joints during vigorous Tatkar and Adavu jumps.",
    },
    {
      title: "Carnatic & Hindustani Acoustics",
      desc: "Surround audio system paired with live traditional instruments (Mridangam, Manjira, Harmonium) for authentic rhythmic immersion.",
    },
    {
      title: "Full-Length Alignment Mirrors",
      desc: "Wall-to-wall mirrors allowing dancers to observe Aramandi posture, mudra placement, and eye lines with absolute precision.",
    },
    {
      title: "Costume & Changing Chambers",
      desc: "Private, hygienic changing and green rooms equipped for pre-recital rehearsals, jewelry fitting, and ghungroo tying.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <PageHeader
        title="Our Story, Lineage & Mentors"
        subtitle="Where ancient Guru-Shishya tradition finds a welcoming, vibrant modern home in South Delhi."
        eyebrow="Our Heritage"
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Story & Vision Narrative */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase">
                <TrishulLogo className="w-4 h-4 text-gold-500" />
                <span>The Shiv Shakti Genesis</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 leading-tight">
                Dance as a Sacred Journey of the Soul
              </h2>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                Shiv Shakti Dance Academy was established with a singular vision: to treat Indian classical
                and folk dance not as a commercial commodity, but as a transformative spiritual discipline.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                In classical Indian philosophy, Lord Shiva as <em>Nataraja</em> represents the cosmic dance of
                creation, while Goddess <em>Shakti</em> represents the primordial creative energy that breathes
                life into form. Our academy honors both: the technical discipline of Shiva and the joyous,
                expressive devotion of Shakti.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 border-t border-stone-200">
                <div>
                  <span className="font-serif text-3xl font-bold text-maroon-900">2014</span>
                  <p className="text-xs text-stone-500 mt-1">Year of Foundation in New Delhi</p>
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold text-gold-600">500+</span>
                  <p className="text-xs text-stone-500 mt-1">Graduated Students Across Styles</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-400/40 aspect-[4/3] bg-maroon-950">
                <img
                  src="https://images.pexels.com/photos/7872076/pexels-photo-7872076.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Classical Dance Mudra Practice"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-maroon-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream-100">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    Sacred Ethos
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-semibold italic">
                    &ldquo;When technique becomes second nature, the dancer disappears and only the dance remains.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guru-Shishya Parampara Lineage Tree */}
      <section className="py-20 bg-cream-100/70 border-y border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <GitFork className="w-4 h-4 text-gold-500" />
              <span>Unbroken Transmission</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              Guru-Shishya Parampara Lineage
            </h2>
            <p className="mt-4 text-stone-600 text-base leading-relaxed">
              In Indian classical arts, purity of lineage ensures authenticity. Our teachings flow directly
              from revered maestros who shaped modern classical dance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {LINEAGE_BRANCHES.map((branch, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-gold-400/30 shadow-warm relative"
              >
                <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-wine-700 uppercase tracking-wider block">
                      {branch.origin}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-maroon-950 mt-0.5">
                      {branch.discipline}
                    </h3>
                  </div>
                  <TrishulLogo className="w-8 h-8 text-gold-500" />
                </div>

                <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-gold-500 before:to-maroon-900">
                  {branch.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-4 relative">
                      <div className="w-8 h-8 rounded-full bg-maroon-950 text-gold-300 flex items-center justify-center font-serif text-xs font-bold border-2 border-gold-400 shrink-0 z-10">
                        0{sIdx + 1}
                      </div>
                      <div className="pt-0.5">
                        <div className="font-serif text-base font-bold text-maroon-950">
                          {step.name}
                        </div>
                        <div className="text-xs text-stone-500 font-medium">
                          {step.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12-Year History Timeline */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <Milestone className="w-4 h-4 text-gold-500" />
              <span>Our 12-Year Legacy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              The Journey of Devotion (2014 – 2026)
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              A decade of nurturing dancers, mounting stage recitals, and honoring timeless traditions in Delhi NCR.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="space-y-8">
              {MILESTONES.map((m, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-gold-400/30 shadow-warm hover:shadow-lg transition-all"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-600 shrink-0 sm:w-28">
                    {m.year}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-maroon-950">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-20 bg-cream-100/70 border-y border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <GraduationCap className="w-4 h-4 text-gold-500" />
              <span>Our Venerable Faculty</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              Learn Under Lineage Gurus
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              Our masters are lifelong practitioners who impart knowledge with individual mentorship,
              patience, and uncompromised technical integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FACULTY_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-gold-400/30 shadow-warm hover:shadow-xl transition-all transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[3/3.5] overflow-hidden bg-maroon-950">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-maroon-900/90 text-gold-300 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-gold-400/30">
                      {member.experience}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-wine-700 block mb-1">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-maroon-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-gold-600 mb-3">
                      {member.specialty}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 mt-4">
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-1">
                    Lineage & Credentials
                  </span>
                  <p className="text-xs font-medium text-stone-800">
                    {member.lineage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Facilities Tour */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
              <Building2 className="w-4 h-4 text-gold-500" />
              <span>Studio Tour & Environment</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
              A Serene Sanctuary Built for Dance
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              Located in serene Greater Kailash-I, our studios provide the ideal peaceful acoustic sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-gold-400/50 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-maroon-950 text-gold-400 flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-lg font-bold text-maroon-900 mb-2">
                  {fac.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 text-maroon-950 font-bold px-8 py-3.5 rounded-xl shadow transition-all hover:shadow-gold-500/25 animate-shimmer"
            >
              <span>Schedule a Studio Visit & Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
