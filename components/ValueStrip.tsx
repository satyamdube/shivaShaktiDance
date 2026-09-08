import React from "react";
import { Award, Users, Sparkles, HeartHandshake } from "lucide-react";

export default function ValueStrip() {
  const items = [
    {
      icon: Award,
      title: "Expert Lineage Trainers",
      description: "Qualified & experienced masters",
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "Strict small-batch classes",
    },
    {
      icon: Sparkles,
      title: "Stage Opportunities",
      description: "Annual auditorium showcases",
    },
    {
      icon: HeartHandshake,
      title: "Holistic Development",
      description: "Culture, rhythm & confidence",
    },
  ];

  return (
    <div className="relative z-20 bg-maroon-900 border-y border-gold-400/20 text-cream-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gold-400/15">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 px-3 py-2 hover:bg-gold-400/5 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-maroon-950 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base text-cream-100 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-cream-100/70">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
