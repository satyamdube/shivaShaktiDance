import React from "react";
import { Camera } from "lucide-react";

export default function Gallery() {
  const images = [
    {
      src: "https://images.pexels.com/photos/30424952/pexels-photo-30424952.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Temple Bharatanatyam Margam",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Annual Auditorium Recital",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/30481580/pexels-photo-30481580.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Young Prodigy Training",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/33638418/pexels-photo-33638418.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Kathak Ghungroo & Chakar",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
            <Camera className="w-4 h-4 text-gold-500" />
            <span>Moments of Grace</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Academy Showcase & Stages
          </h2>
          <p className="mt-3 text-stone-600 text-base">
            Glimpses into our training halls, costume rehearsals, and memorable stage triumphs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl overflow-hidden shadow-warm border border-gold-400/20 bg-maroon-950 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-bold block mb-1">
                  Performance Capture
                </span>
                <h4 className="font-serif text-lg text-cream-100 font-semibold">
                  {img.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
