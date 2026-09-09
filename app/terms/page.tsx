import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TrishulLogo from "@/components/TrishulLogo";
import {
  FileText,
  ShieldCheck,
  Coins,
  Clock,
  HeartPulse,
  Award,
  Camera,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Shiv Shakti Dance Academy",
  description:
    "Official terms and conditions, fee policies, attendance rules, and studio guidelines for disciples of Shiv Shakti Dance Academy, Greater Kailash, New Delhi.",
};

const SECTIONS = [
  {
    id: "admissions",
    icon: FileText,
    title: "1. Admissions & Enrollment",
    badge: "Registration",
    content: [
      {
        subtitle: "Admission Criteria & Age Requirements",
        text: "Admissions to foundational batches (Bharatanatyam, Kathak, and Bollywood/Semi-Classical) are open to students aged 5 and above. Placement into intermediate or advanced batches is determined through Guru consultation and skill assessment.",
      },
      {
        subtitle: "Trial Classes",
        text: "Prospective disciples are entitled to one complimentary trial class. Pre-booking via our website or studio desk is mandatory. Free trials cannot be rescheduled more than once without prior notice.",
      },
      {
        subtitle: "Seat Reservation & Batch Caps",
        text: "To preserve the sacred Guru-Shishya dynamic and provide personal correction, studio batches are strictly capped at 12 dancers. A seat is confirmed only upon payment of the registration and initial tuition fee.",
      },
    ],
  },
  {
    id: "fees",
    icon: Coins,
    title: "2. Tuition, Fees & Refund Policy",
    badge: "Finance",
    content: [
      {
        subtitle: "Fee Schedules & Due Dates",
        text: "Tuition is payable monthly or quarterly, strictly in advance by the 7th of each calendar month. Payments can be processed via UPI, net banking, debit/credit cards, or studio POS.",
      },
      {
        subtitle: "Late Fee Charges",
        text: "Payments received after the 10th of the month will attract a nominal late fee of ₹200 per week to encourage timely administrative reconciliation.",
      },
      {
        subtitle: "Non-Refundable Policy",
        text: "All registration fees, monthly tuitions, and recital workshop fees are non-refundable and non-transferable under any circumstances once a batch cycle begins.",
      },
      {
        subtitle: "Leave of Absence & Batch Freeze",
        text: "Disciples requiring temporary leave for school board exams or medical reasons may request a batch freeze up to 60 days with written notice 15 days prior. Unnotified absences exceeding 30 consecutive days will result in forfeiture of batch seat.",
      },
    ],
  },
  {
    id: "discipline",
    icon: Clock,
    title: "3. Attendance, Punctuality & Studio Etiquette",
    badge: "Discipline",
    content: [
      {
        subtitle: "Punctuality & Warm-Up",
        text: "Classical dance demands thorough physical conditioning. Students must report 10 minutes before batch commencement. Late arrivals exceeding 15 minutes may be excused from vigorous Adavu/Tatkar work to prevent muscle injury.",
      },
      {
        subtitle: "Traditional Dress Code",
        text: "Dancers are expected to maintain strict attire: Cotton Salwar Kameez/Kurta with Dupatta neatly pinned for regular practice. Senior classical disciples must wear practice dance sarees. Hair must be neatly tied into a bun. Ghungroos (ankle bells) must be cleaned and treated with sacred reverence.",
      },
      {
        subtitle: "Sacred Studio Respect (Guru Vandana)",
        text: "Footwear is strictly prohibited inside dance chambers. Every disciple must perform traditional Bhumi Pranam (reverence to the earth) and Guru Pranam upon entering and leaving the rehearsal space.",
      },
      {
        subtitle: "Mobile Device Restrictions",
        text: "Mobile phones must be switched to silent or stored in changing lockers during class hours to maintain complete meditative focus.",
      },
    ],
  },
  {
    id: "health",
    icon: HeartPulse,
    title: "4. Physical Health, Safety & Liability Waiver",
    badge: "Health & Safety",
    content: [
      {
        subtitle: "Pre-existing Medical Disclosures",
        text: "Parents and adult students must notify the academy in writing of any pre-existing musculoskeletal conditions, asthma, cardiac conditions, or past surgeries prior to class commencement.",
      },
      {
        subtitle: "Physical Contact for Posture Correction",
        text: "Classical Indian dance pedagogy involves hands-on pedagogical alignment (e.g., correcting Aramandi stance, spine posture, Hasta Mudra angle). All adjustments are conducted with utmost professionalism and pedagogical care.",
      },
      {
        subtitle: "Assumption of Risk & Liability",
        text: "While our studios are fitted with shock-absorbing sprung teakwood floors and certified safety standards, dance is an athletic discipline. Shiv Shakti Dance Academy and its faculty assume no liability for accidental strains, sprains, or injuries arising from natural dance practice or disregard of safety instructions.",
      },
    ],
  },
  {
    id: "certification",
    icon: Award,
    title: "5. Board Examinations & Stage Recitals",
    badge: "Examination",
    content: [
      {
        subtitle: "Gandharva Mahavidyalaya Board Examinations",
        text: "Students seeking certification under Akhil Bharatiya Gandharva Mahavidyalaya Mandal (Prarambhik to Visharad) must achieve at least 80% annual attendance and receive faculty endorsement before exam filing.",
      },
      {
        subtitle: "Solo Debuts (Arangetram / Manch Pravesh)",
        text: "Preparation for graduation solo recitals (Arangetram / Rangapravesham) is at the sole artistic discretion of the Artistic Director based on the shishya's dedication, technical mastery, and Margam readiness.",
      },
      {
        subtitle: "Annual Showcase Costumes & Logistics",
        text: "Costumes, stage jewelry, live orchestra musicians, and auditorium production costs for annual showcases are billed separately and communicated well in advance of the event.",
      },
    ],
  },
  {
    id: "ip-media",
    icon: Camera,
    title: "6. Intellectual Property & Photography Consent",
    badge: "Media Rights",
    content: [
      {
        subtitle: "Artistic Choreography Ownership",
        text: "All custom choreographies, compositions, varnams, and tillanas composed or taught by academy Gurus remain the intellectual property of Shiv Shakti Dance Academy. Commercial reproduction, unaccredited public performance, or teaching without authorization is strictly prohibited.",
      },
      {
        subtitle: "Media & Promotional Use",
        text: "The academy reserves the right to capture photographs, audio, and video recordings during class sessions, workshops, and annual showcases for educational archives, social media showcases, website galleries, and academy publications.",
      },
      {
        subtitle: "Opt-Out Provision",
        text: "Parents or adult students who wish to withhold media publication permissions may do so by submitting a signed 'Media Opt-Out Request' to the studio office during admission.",
      },
    ],
  },
  {
    id: "conduct",
    icon: ShieldCheck,
    title: "7. Studio Conduct, Anti-Harassment & Termination",
    badge: "Code of Conduct",
    content: [
      {
        subtitle: "Inclusive & Respectful Environment",
        text: "Shiv Shakti Dance Academy upholds zero tolerance for bullying, discrimination, harassment, or defamatory conduct towards teachers, staff, fellow students, or parents.",
      },
      {
        subtitle: "Right to Terminate Enrollment",
        text: "The management reserves the right to immediately terminate the membership of any student or request withdrawal of a parent whose actions disrupt studio harmony, violate ethical norms, or tarnish academy reputation. In such cases, unutilized tuition is forfeited.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream-50 text-ink">
      <PageHeader
        title="Terms & Conditions"
        subtitle="Official policies, enrollment guidelines, and studio agreements governing all disciples and parents at Shiv Shakti Dance Academy."
        eyebrow="Academy Policies & Code"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Summary Banner */}
          <div className="bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 rounded-3xl p-6 sm:p-10 border border-gold-400/30 shadow-2xl mb-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Effective Date: September 2026</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-cream-100 leading-tight">
                  Guidelines for a Harmonious & Devoted Dance Journey
                </h2>
                <p className="text-sm sm:text-base text-cream-100/75 leading-relaxed">
                  By enrolling at Shiv Shakti Dance Academy, disciples and their guardians mutually agree
                  to uphold these sacred traditions, institutional standards, and administrative procedures.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-4 bg-white/5 border border-gold-400/20 p-4 rounded-2xl backdrop-blur-sm">
                <TrishulLogo className="w-12 h-12 text-gold-400 shrink-0" />
                <div className="text-xs text-cream-100/80">
                  <div className="font-serif font-bold text-sm text-gold-300">
                    Shiv Shakti
                  </div>
                  <div>Greater Kailash-I</div>
                  <div className="text-gold-400/70 text-[10px]">South Delhi, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Sticky Section Navigation Index */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 bg-white rounded-2xl p-6 border border-gold-400/30 shadow-warm">
                <div className="text-xs uppercase font-bold text-gold-600 tracking-widest mb-4 flex items-center gap-2">
                  <TrishulLogo className="w-4 h-4 text-gold-500" />
                  <span>Document Index</span>
                </div>

                <nav className="space-y-1.5 text-sm font-medium">
                  {SECTIONS.map((sec) => {
                    const Icon = sec.icon;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-700 hover:text-maroon-950 hover:bg-gold-400/10 transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-gold-600 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="truncate">{sec.title}</span>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <div className="text-xs font-semibold text-stone-500 mb-2 uppercase tracking-wider">
                    Questions on Policies?
                  </div>
                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    Our studio administrative coordinator is available to clarify any terms.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between text-xs font-bold text-maroon-900 bg-gold-400/20 hover:bg-gold-400/30 px-3.5 py-2.5 rounded-xl border border-gold-400/30 transition-colors"
                  >
                    <span>Contact Administration</span>
                    <ArrowRight className="w-3.5 h-3.5 text-maroon-900" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Column: Detailed Clauses */}
            <main className="lg:col-span-8 space-y-10">
              {SECTIONS.map((section) => {
                const Icon = section.icon;
                return (
                  <article
                    key={section.id}
                    id={section.id}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-gold-400/30 shadow-warm hover:shadow-lg transition-all scroll-mt-28"
                  >
                    <div className="flex items-start sm:items-center justify-between gap-4 border-b border-stone-200 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-maroon-950 text-gold-400 flex items-center justify-center font-bold shrink-0 border border-gold-400/30 shadow-sm">
                          <Icon className="w-5 h-5 text-gold-400" />
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-maroon-950">
                          {section.title}
                        </h3>
                      </div>
                      <span className="shrink-0 text-[10px] sm:text-xs font-bold text-wine-700 uppercase tracking-wider bg-wine-700/10 px-2.5 py-1 rounded-full border border-wine-700/20">
                        {section.badge}
                      </span>
                    </div>

                    <div className="space-y-6">
                      {section.content.map((item, itemIdx) => (
                        <div key={itemIdx} className="space-y-1.5">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-maroon-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                            <span>{item.subtitle}</span>
                          </h4>
                          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed pl-3.5 border-l border-gold-400/30">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}

              {/* Administrative Contact Box */}
              <div className="bg-maroon-950 rounded-2xl p-6 sm:p-8 border border-gold-400/40 text-cream-100 shadow-xl space-y-5">
                <div className="flex items-center gap-3 text-gold-300 font-serif text-xl font-bold">
                  <HelpCircle className="w-5 h-5 text-gold-400" />
                  <span>Queries & Grievance Redressal</span>
                </div>
                <p className="text-xs sm:text-sm text-cream-100/75 leading-relaxed">
                  If you have questions regarding enrollment contracts, attendance exceptions, fee receipts,
                  or special accommodation requests, please reach out to our office:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                  <a
                    href="tel:+919811024590"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-gold-400/20 hover:border-gold-400/50 hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-cream-100/60 uppercase">Studio Phone</div>
                      <div className="font-semibold text-cream-100">+91 98110 24590</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@shivshaktidance.com"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-gold-400/20 hover:border-gold-400/50 hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-cream-100/60 uppercase">Email</div>
                      <div className="font-semibold text-cream-100 truncate">contact@shivshaktidance.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-gold-400/20">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-cream-100/60 uppercase">Location</div>
                      <div className="font-semibold text-cream-100">Greater Kailash-I, New Delhi</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold-400/20 text-xs text-cream-100/60">
                  <span>Last revised: September 2026 &bull; Governing Jurisdiction: New Delhi, India</span>
                  <Link
                    href="/contact#enroll"
                    className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-maroon-950 font-bold px-4 py-2 rounded-lg transition-colors text-xs shrink-0"
                  >
                    <span>Book Complimentary Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
