"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Download, X, Share2, PlusSquare, Sparkles } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if app is already running in standalone mode (installed)
    const isInStandaloneMode =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone ===
        true;

    if (isInStandaloneMode) {
      setIsStandalone(true);
      return;
    }

    // Check if dismissed recently (within 7 days)
    const dismissedAt = localStorage.getItem("pwa_prompt_dismissed_time");
    if (dismissedAt) {
      const daysSinceDismissed =
        (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) {
        return;
      }
    }

    // Detect iOS
    const ua = window.navigator.userAgent.toLowerCase();
    const isIosDevice =
      /iphone|ipad|ipod/.test(ua) &&
      !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIos(isIosDevice);

    // Browser install event for Chromium/Edge/Android
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    );

    // For iOS devices, show prompt after a short delay if not installed
    let iosTimer: NodeJS.Timeout | null = null;
    if (isIosDevice) {
      iosTimer = setTimeout(() => {
        setShowPrompt(true);
      }, 3500);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      if (iosTimer) clearTimeout(iosTimer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosGuide(true);
      return;
    }

    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    } catch (err) {
      console.error("[PWA] Install prompt error:", err);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setShowIosGuide(false);
    try {
      localStorage.setItem(
        "pwa_prompt_dismissed_time",
        Date.now().toString()
      );
    } catch {
      // ignore
    }
  };

  if (isStandalone || !showPrompt) return null;

  return (
    <>
      {/* Floating Install Prompt Pill / Card */}
      <div
        className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-24 z-40 max-w-sm mx-auto sm:mx-0 bg-maroon-950/95 text-cream-50 rounded-2xl p-4 border border-gold-400/50 shadow-warm-lg backdrop-blur-md transition-all duration-300 animate-slide-up"
        role="region"
        aria-label="Install Shiva Shakti App"
      >
        <div className="flex items-start gap-3">
          {/* Academy Emblem */}
          <div className="relative w-11 h-11 rounded-xl bg-maroon-900 border border-gold-400/40 p-1 flex-shrink-0 flex items-center justify-center shadow-inner">
            <Image
              src="/icon.svg"
              alt="Shiv Shakti Dance Emblem"
              width={36}
              height={36}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="text-xs sm:text-sm font-serif font-bold text-gold-300 truncate">
                Install Shiv Shakti App
              </h3>
              <Sparkles className="w-3 h-3 text-gold-400 flex-shrink-0" />
            </div>
            <p className="text-[11px] sm:text-xs text-cream-100/75 leading-tight mt-0.5 line-clamp-2">
              Fast access, instant class schedules & offline curriculum.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-2.5">
              <button
                onClick={handleInstallClick}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-gold-300 text-maroon-950 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Install App</span>
              </button>

              <button
                onClick={handleDismiss}
                className="text-[11px] text-cream-100/60 hover:text-cream-100 px-2 py-1 transition-colors"
              >
                Not now
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Dismiss install banner"
            className="text-cream-100/50 hover:text-cream-50 p-1 -mr-1 -mt-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* iOS Installation Instruction Modal */}
      {showIosGuide && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          onClick={() => setShowIosGuide(false)}
        >
          <div
            className="bg-maroon-950 border border-gold-400/50 rounded-2xl max-w-sm w-full p-6 text-cream-50 shadow-2xl text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowIosGuide(false)}
              className="absolute top-4 right-4 text-cream-100/60 hover:text-cream-50 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-maroon-900 border border-gold-400/40 p-2 mx-auto mb-4 flex items-center justify-center shadow-warm">
              <Image
                src="/icon.svg"
                alt="Emblem"
                width={44}
                height={44}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="font-serif text-lg font-bold text-gold-300 mb-1">
              Install on iPhone / iPad
            </h3>
            <p className="text-xs text-cream-100/75 mb-5">
              Add Shiv Shakti Dance Academy to your Home Screen in 2 simple steps:
            </p>

            <div className="space-y-3 text-left text-xs bg-maroon-900/60 border border-gold-400/20 rounded-xl p-3.5 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-gold-400/20 text-gold-400 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span>Tap the</span>
                  <span className="inline-flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded font-medium text-gold-300">
                    <Share2 className="w-3 h-3" /> Share
                  </span>
                  <span>icon in Safari</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-gold-400/20 text-gold-400 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span>Scroll down & select</span>
                  <span className="inline-flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded font-medium text-gold-300">
                    <PlusSquare className="w-3 h-3" /> Add to Home Screen
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full bg-gold-400 hover:bg-gold-500 text-maroon-950 font-bold py-2.5 rounded-full text-xs transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
