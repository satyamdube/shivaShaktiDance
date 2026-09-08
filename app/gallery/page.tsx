"use client";

import React, { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/data/danceData";
import { Camera, X, ChevronLeft, ChevronRight, Play, Sparkles, ArrowRight, Music, Volume2, Maximize2 } from "lucide-react";
import Link from "next/link";
import TrishulLogo from "@/components/TrishulLogo";

interface VideoRecital {
  id: string;
  title: string;
  event: string;
  venue: string;
  duration: string;
  raga: string;
  tala: string;
  image: string;
  description: string;
  choreographer: string;
}

const VIDEO_RECITALS: VideoRecital[] = [
  {
    id: "tandava-2025",
    title: "Shiva Tandava & Tillana Grand Finale",
    event: "Annual Margam Showcase 2025",
    venue: "Kamani Auditorium, Mandi House",
    duration: "14 mins 20 secs",
    raga: "Ragamalika (Natabhairavi, Hamsadhwani, Revati)",
    tala: "Adi Talam (Misra Gathi)",
    image: "https://images.pexels.com/photos/31880387/pexels-photo-31880387.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "An ensemble of 32 disciples performing alongside a live 5-piece Carnatic ensemble featuring Mridangam, Flute, and Nattuvangam.",
    choreographer: "Vidushi Meenakshi Sharma",
  },
  {
    id: "kathak-fusion-2025",
    title: "Bollywood Classical Fusion & Ghungroo Beats",
    event: "Nritya Samvedana Festival",
    venue: "Siri Fort Auditorium, New Delhi",
    duration: "9 mins 45 secs",
    raga: "Yaman & Desh Fusion",
    tala: "Teentaal (16 beats) with fast 5-chakkar pirouettes",
    image: "https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "High-octane fusion featuring rapid-fire Tatkar footwork combined with emotive lyrical choreography and 150 brass bells per leg.",
    choreographer: "Rajesh Rawat & Smt. Ananya Sen",
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"all" | "stage" | "rehearsal" | "arangetram" | "mudras">("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoRecital | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeTab === "all") return true;
    return photo.category === activeTab;
  });

  const getCount = (cat: string) => {
    if (cat === "all") return GALLERY_PHOTOS.length;
    return GALLERY_PHOTOS.filter((p) => p.category === cat).length;
  };

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex !== null) {
        if (e.key === "ArrowLeft") prevPhoto();
        if (e.key === "ArrowRight") nextPhoto();
        if (e.key === "Escape") closeLightbox();
      }
      if (activeVideo && e.key === "Escape") {
        setActiveVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, activeVideo]);

  const currentPhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <div className="min-h-screen bg-cream-50">
      <PageHeader
        title="Moments of Devotion & Grace"
        subtitle="Step into our visual gallery of annual recitals, intensive studio rehearsals, and milestone Arangetram debuts."
        eyebrow="Visual Archive"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      {/* Main Gallery Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs with Counts */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap mb-12">
            {[
              { label: "All Moments", value: "all" },
              { label: "Stage Recitals", value: "stage" },
              { label: "Studio Rehearsals", value: "rehearsal" },
              { label: "Arangetram Debuts", value: "arangetram" },
              { label: "Mudras & Costumes", value: "mudras" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveTab(tab.value as any);
                  setActivePhotoIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === tab.value
                    ? "bg-maroon-900 text-gold-300 shadow-md border border-gold-400/40 transform scale-105"
                    : "bg-white text-stone-700 hover:bg-gold-50 border border-stone-200"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    activeTab === tab.value ? "bg-gold-400 text-maroon-950" : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {getCount(tab.value)}
                </span>
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-warm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer bg-maroon-950 border border-gold-400/20 hover:border-gold-400"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-maroon-950/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 bg-maroon-950/80 px-2.5 py-1 rounded inline-block mb-1 border border-gold-400/20">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-cream-100 group-hover:text-gold-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-cream-100/70 line-clamp-1 mt-0.5">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Performances Showcase */}
      <section className="py-20 bg-maroon-950 text-cream-100 border-y border-gold-400/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
              <Play className="w-4 h-4 text-gold-500 fill-current" />
              <span>Cinematic Recitals</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100">
              Live Stage Performances
            </h2>
            <p className="mt-3 text-cream-100/75 text-base">
              Recorded live at Siri Fort Auditorium & Kamani Auditorium in New Delhi. Click to launch performance player.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEO_RECITALS.map((recital) => (
              <div
                key={recital.id}
                onClick={() => {
                  setActiveVideo(recital);
                  setIsPlayingVideo(true);
                }}
                className="bg-maroon-900/80 rounded-2xl overflow-hidden border border-gold-400/30 p-4 hover:border-gold-400 transition-all cursor-pointer group shadow-2xl"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
                  <img
                    src={recital.image}
                    alt={recital.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-maroon-950/40" />
                  <div className="w-16 h-16 rounded-full bg-gold-400 text-maroon-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 px-2.5 py-1 rounded text-[11px] font-bold text-gold-300">
                    {recital.duration}
                  </div>
                </div>
                <div className="pt-4 px-2">
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">{recital.event}</span>
                  <h4 className="font-serif text-xl font-bold text-cream-100 mt-1 group-hover:text-gold-300 transition-colors">
                    {recital.title}
                  </h4>
                  <p className="text-xs text-cream-100/70 mt-1">{recital.venue} &bull; {recital.raga}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="bg-maroon-950 border border-gold-400/50 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative text-cream-100">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gold-400/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrishulLogo className="w-6 h-6 text-gold-400" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block">
                    {activeVideo.event}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-cream-100">
                    {activeVideo.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeVideo.image}
                alt={activeVideo.title}
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-black/40" />

              {/* Live Playing State Indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gold-400/90 text-maroon-950 flex items-center justify-center shadow-2xl animate-pulse">
                  <Play className="w-9 h-9 fill-current ml-1" />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-950/80 border border-gold-400/40 text-gold-300 text-xs font-semibold backdrop-blur-md">
                  <Volume2 className="w-4 h-4 text-gold-400 animate-bounce" />
                  <span>High-Fidelity Audio Stream Active &bull; Carnatic Orchestra</span>
                </div>
              </div>

              {/* Progress bar simulation */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-maroon-900">
                <div className="h-full w-2/5 bg-gold-400 animate-[pulse_2s_infinite]" />
              </div>
            </div>

            {/* Video Meta Info */}
            <div className="p-6 space-y-4 bg-maroon-950">
              <p className="text-xs sm:text-sm text-cream-100/80 leading-relaxed">
                {activeVideo.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2 border-t border-gold-400/20">
                <div>
                  <span className="text-gold-400 font-bold block">Venue</span>
                  <span className="text-cream-100/80">{activeVideo.venue}</span>
                </div>
                <div>
                  <span className="text-gold-400 font-bold block">Raga / Melakarta</span>
                  <span className="text-cream-100/80">{activeVideo.raga}</span>
                </div>
                <div>
                  <span className="text-gold-400 font-bold block">Tala / Rhythm</span>
                  <span className="text-cream-100/80">{activeVideo.tala}</span>
                </div>
                <div>
                  <span className="text-gold-400 font-bold block">Direction</span>
                  <span className="text-cream-100/80">{activeVideo.choreographer}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream-100 hover:text-gold-400 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close photo"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-cream-100 hover:text-gold-400 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-cream-100 hover:text-gold-400 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="max-w-4xl w-full text-center">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center mb-4">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="max-h-[75vh] max-w-full rounded-xl shadow-2xl object-contain border border-gold-400/30"
              />
            </div>
            <div className="text-cream-100">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                {currentPhoto.category} &bull; Image {(activePhotoIndex || 0) + 1} of {filteredPhotos.length}
              </span>
              <h3 className="font-serif text-2xl font-bold text-cream-100 mt-1">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-cream-100/70 max-w-xl mx-auto mt-1">
                {currentPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-cream-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="font-serif text-3xl font-bold text-maroon-900 mb-3">
            Want to see your dancer on stage next season?
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            Admissions are open now. Enroll in upcoming batches to participate in our annual auditorium production.
          </p>
          <Link
            href="/contact#enroll"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 text-maroon-950 font-bold px-8 py-3.5 rounded-xl shadow transition-all hover:shadow-gold-500/25 animate-shimmer"
          >
            <span>Book a Free Trial Class</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
