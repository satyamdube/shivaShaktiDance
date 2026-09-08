"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, Award, Clock, HeartHandshake, User, Music, Calendar } from "lucide-react";
import TrishulLogo from "@/components/TrishulLogo";

interface QuizOption {
  label: string;
  sublabel: string;
  icon: string;
  score: {
    bharatanatyam: number;
    kathak: number;
    bollywood: number;
    kids: number;
  };
}

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Who is stepping onto the dance floor?",
    subtitle: "Select the age group or stage of the dancer to find age-appropriate batches.",
    options: [
      {
        label: "Young Prodigy (Ages 5–10)",
        sublabel: "Foundational rhythm, posture & storytelling games",
        icon: "child",
        score: { bharatanatyam: 2, kathak: 1, bollywood: 1, kids: 5 },
      },
      {
        label: "Aspiring Teen (Ages 11–17)",
        sublabel: "Structured discipline, stage confidence & certification",
        icon: "teen",
        score: { bharatanatyam: 4, kathak: 4, bollywood: 3, kids: 0 },
      },
      {
        label: "Adult Beginner (Ages 18+)",
        sublabel: "First-time explorer seeking mindfulness & grace",
        icon: "adult",
        score: { bharatanatyam: 3, kathak: 4, bollywood: 4, kids: 0 },
      },
      {
        label: "Returning Dancer",
        sublabel: "Rekindling childhood practice or seeking Arangetram",
        icon: "sparkle",
        score: { bharatanatyam: 5, kathak: 4, bollywood: 2, kids: 0 },
      },
    ],
  },
  {
    id: 2,
    title: "What is your primary inspiration or dream?",
    subtitle: "Choose what resonates most deeply with your heart.",
    options: [
      {
        label: "Sacred Classical Mastery & Exams",
        sublabel: "Pure adavus, mudras, certified Gandharva exams & Arangetram",
        icon: "temple",
        score: { bharatanatyam: 5, kathak: 4, bollywood: 0, kids: 1 },
      },
      {
        label: "Grace, Speed & Rhythmic Footwork",
        sublabel: "Chakkars (spins), Tatkar footwork & Lucknow gharana poetry",
        icon: "spins",
        score: { bharatanatyam: 2, kathak: 5, bollywood: 1, kids: 1 },
      },
      {
        label: "High Energy, Expression & Joy",
        sublabel: "Cinematic Bollywood, semi-classical grace & fitness stamina",
        icon: "dance",
        score: { bharatanatyam: 0, kathak: 1, bollywood: 5, kids: 2 },
      },
      {
        label: "Holistic Posture & Spiritual Calm",
        sublabel: "Gentle stretch, meditative mudras & stress relief",
        icon: "lotus",
        score: { bharatanatyam: 3, kathak: 3, bollywood: 3, kids: 1 },
      },
    ],
  },
  {
    id: 3,
    title: "What schedule fits your lifestyle best?",
    subtitle: "Classes run twice weekly with small intimate batches.",
    options: [
      {
        label: "Weekend Mornings (Sat & Sun)",
        sublabel: "9:00 AM – 12:30 PM • Ideal for working professionals & school kids",
        icon: "sun",
        score: { bharatanatyam: 3, kathak: 3, bollywood: 3, kids: 3 },
      },
      {
        label: "Weekday Evenings (Tue & Thu)",
        sublabel: "5:00 PM – 7:30 PM • Perfect after-work and post-school routine",
        icon: "moon",
        score: { bharatanatyam: 3, kathak: 3, bollywood: 3, kids: 3 },
      },
      {
        label: "Intensive 1-on-1 Mentorship",
        sublabel: "Flexible bespoke slots with Senior Guru ji",
        icon: "star",
        score: { bharatanatyam: 4, kathak: 4, bollywood: 1, kids: 0 },
      },
    ],
  },
];

interface QuizResult {
  discipline: string;
  batchName: string;
  badge: string;
  tagline: string;
  description: string;
  ghungroo: string;
  commitment: string;
  color: string;
}

const RESULTS: Record<string, QuizResult> = {
  bharatanatyam: {
    discipline: "Bharatanatyam (Kalakshetra Bani)",
    batchName: "Aarambh & Arpana Classical Batch",
    badge: "Most Revered Tradition",
    tagline: "Geometric precision, devotional Abhinaya, and sacred rhythm",
    description:
      "Your aspirations align deeply with Bharatanatyam! You will learn foundational Adavus (Tatta, Natta, Kuditta Mettu), 28 Asamyutta & 24 Samyutta Hastha Mudras, and start building towards Gandharva Mahavidyalaya certified exams.",
    ghungroo: "50 bells / leg (cotton braided)",
    commitment: "2 days/week • 75 mins per session",
    color: "from-maroon-900 to-amber-950",
  },
  kathak: {
    discipline: "Kathak (Lucknow Gharana)",
    batchName: "Ghungroo & Chakkars Expressive Batch",
    badge: "Poetic Grace & Speed",
    tagline: "Lightning Tatkar, swift pirouettes, and subtle Nazakat eyes",
    description:
      "Your energy thrives in Kathak! You will master rapid footwork, rhythmic padhant (solkattu recitation in Teentaal), breathtaking spins, and emotional storytelling rooted in the traditions of Lucknow.",
    ghungroo: "100 brass bells / leg (woven rope)",
    commitment: "2 days/week • 60 mins per session",
    color: "from-amber-950 to-maroon-900",
  },
  bollywood: {
    discipline: "Bollywood & Semi-Classical Fusion",
    batchName: "Nritya Tarang Cinematic Batch",
    badge: "Dynamic Energy & Expression",
    tagline: "Vibrant screen choreography infused with classical mudras and joy",
    description:
      "You are made for Bollywood & Semi-Classical! Perfect for boosting stamina, stage confidence, and joyful self-expression while retaining the authentic elegance of classical mudras and spins.",
    ghungroo: "Optional for stage recitals",
    commitment: "2 days/week • 60 mins per session",
    color: "from-rose-950 to-maroon-950",
  },
  kids: {
    discipline: "Bal Nritya (Kids Dance Foundations)",
    batchName: "Little Ghungroos Junior Academy",
    badge: "Ages 5–10 Special",
    tagline: "Playful rhythm, animal mudras, and posture building",
    description:
      "The perfect start for your child! A loving, joyful introduction to Indian rhythm, Hastas (peacock, deer, lotus), and coordinated stage movement that builds lifetime poise and focus.",
    ghungroo: "Small 25 bells junior set",
    commitment: "Weekends • 60 mins per session",
    color: "from-yellow-950 to-maroon-950",
  },
};

export default function DanceQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ bharatanatyam: 0, kathak: 0, bollywood: 0, kids: 0 });
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (optIdx: number) => {
    const q = QUESTIONS[currentStep];
    const opt = q.options[optIdx];

    const newScores = {
      bharatanatyam: scores.bharatanatyam + opt.score.bharatanatyam,
      kathak: scores.kathak + opt.score.kathak,
      bollywood: scores.bollywood + opt.score.bollywood,
      kids: scores.kids + opt.score.kids,
    };
    setScores(newScores);

    const newSelected = [...selectedOptions];
    newSelected[currentStep] = optIdx;
    setSelectedOptions(newSelected);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ bharatanatyam: 0, kathak: 0, bollywood: 0, kids: 0 });
    setSelectedOptions([]);
    setIsCompleted(false);
  };

  // Determine winning category
  const getWinningDiscipline = (): QuizResult => {
    let topKey = "bharatanatyam";
    let topVal = -1;
    (Object.keys(scores) as (keyof typeof scores)[]).forEach((key) => {
      if (scores[key] > topVal) {
        topVal = scores[key];
        topKey = key;
      }
    });
    return RESULTS[topKey] || RESULTS.bharatanatyam;
  };

  const result = getWinningDiscipline();

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-100 overflow-hidden">
      {/* Subtle Background Sacred Geometry */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a227_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Interactive Batch Matcher &bull; 30 Seconds</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream-100">
            Discover Your <span className="italic text-gold-400 font-serif">Dance Calling</span>
          </h2>

          <p className="text-cream-100/75 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Not sure whether Bharatanatyam, Kathak, or Bollywood suits you or your child? Answer 3 quick questions
            and get matched with the exact batch, schedule, and guru.
          </p>
        </div>

        {/* Quiz Container Box */}
        <div className="relative rounded-2xl border border-gold-400/30 bg-maroon-950/80 backdrop-blur-md shadow-2xl p-4 sm:p-8 md:p-10 gold-border-glow">
          {!isCompleted ? (
            <div>
              {/* Progress indicator */}
              <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-wider">
                  <span>Step {currentStep + 1} of {QUESTIONS.length}</span>
                </div>
                <div className="flex-1 max-w-xs h-2 bg-maroon-900 rounded-full overflow-hidden border border-gold-400/20">
                  <div
                    className="h-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500 rounded-full"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="space-y-2 mb-6 sm:mb-8 text-center sm:text-left">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-cream-100">
                  {QUESTIONS[currentStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-cream-100/70">
                  {QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="text-left p-4 sm:p-5 rounded-xl border border-gold-400/20 bg-white/5 hover:bg-gold-400/10 hover:border-gold-400/60 transition-all duration-200 group flex items-start gap-3 sm:gap-4 transform hover:-translate-y-0.5"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400 group-hover:bg-gold-400 group-hover:text-maroon-950 transition-colors">
                      {currentStep === 0 && <User className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {currentStep === 1 && <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {currentStep === 2 && <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="font-semibold text-cream-100 text-sm sm:text-base group-hover:text-gold-300 transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-[11px] sm:text-xs text-cream-100/60 leading-relaxed">
                        {opt.sublabel}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6 sm:space-y-8 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-gold-400/20 pb-4 sm:pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Your Ideal Match Found</span>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-gold-400/80 hover:text-gold-300 underline underline-offset-4 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Visual Emblem Badge */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-gold-500/15 to-maroon-900/60 border border-gold-400/30 text-center space-y-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-maroon-950 border-2 border-gold-400 flex items-center justify-center shadow-lg animate-pulse">
                    <TrishulLogo className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gold-400">
                      {result.badge}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-cream-100 mt-0.5">
                      {result.discipline}
                    </h4>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                      Recommended Batch
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100">
                      {result.batchName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gold-300/90 italic font-serif">
                      &ldquo;{result.tagline}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-cream-100/80 leading-relaxed">
                    {result.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3 rounded-lg bg-white/5 border border-gold-400/20 space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>Commitment</span>
                      </div>
                      <div className="text-xs text-cream-100 font-medium">
                        {result.commitment}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-gold-400/20 space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-1.5">
                        <Music className="w-3 h-3" />
                        <span>Starting Ghungroo</span>
                      </div>
                      <div className="text-xs text-cream-100 font-medium">
                        {result.ghungroo}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                    <Link
                      href={`/contact?interest=${encodeURIComponent(result.discipline)}#enroll`}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-maroon-950 font-bold px-6 py-3 rounded-lg text-sm shadow-lg hover:shadow-gold-500/25 transition-all text-center"
                    >
                      <span>Claim Free Trial for This Batch</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/schedule"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gold-400/40 hover:border-gold-300 bg-white/5 hover:bg-white/10 text-cream-100 text-sm font-medium transition-all text-center"
                    >
                      <span>View Batch Timings</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
