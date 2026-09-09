"use client";

import React, { useState } from "react";
import { RefreshCw } from "lucide-react";

export default function RetryButton() {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <button
      onClick={handleRetry}
      disabled={isRetrying}
      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-maroon-900 to-wine-700 hover:from-maroon-950 hover:to-wine-600 text-gold-300 px-7 py-3 rounded-full text-sm font-semibold shadow-warm transition-all duration-200 transform hover:-translate-y-0.5 border border-gold-400/40 cursor-pointer disabled:opacity-75"
    >
      <RefreshCw
        className={`w-4 h-4 text-gold-400 ${isRetrying ? "animate-spin" : ""}`}
      />
      <span>{isRetrying ? "Checking Network..." : "Check Connection & Retry"}</span>
    </button>
  );
}
