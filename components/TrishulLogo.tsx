import React from "react";

interface TrishulLogoProps {
  className?: string;
  size?: number | string;
}

export default function TrishulLogo({ className = "w-12 h-14", size }: TrishulLogoProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        {/* Rich Warm Metallic Gold Gradient */}
        <linearGradient id="trishulGoldGrad" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#fffae0" />
          <stop offset="20%" stopColor="#f7dc79" />
          <stop offset="45%" stopColor="#e5ba45" />
          <stop offset="75%" stopColor="#c59220" />
          <stop offset="100%" stopColor="#986b0a" />
        </linearGradient>

        {/* Lighter Highlight Gradient for inner flame and bevels */}
        <linearGradient id="trishulHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#ffec99" />
          <stop offset="100%" stopColor="#dca42b" />
        </linearGradient>

        {/* Subtle Shadow for Depth */}
        <filter id="trishulShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter="url(#trishulShadow)">
        {/* ================= CENTRAL FLAMING SPEAR BLADE ================= */}
        {/* Outer blade contour */}
        <path
          d="M 50,5
             C 52,14 55.5,23 57.5,31
             C 59,37 56.5,43 54,47
             L 46,47
             C 43.5,43 41,37 42.5,31
             C 44.5,23 48,14 50,5 Z"
          fill="url(#trishulGoldGrad)"
          stroke="#ffe699"
          strokeWidth="0.6"
        />

        {/* Inner flame hollow cutout */}
        <path
          d="M 50,15
             C 52.5,21 53.5,27 52,33
             C 51,37 49,37 48,33
             C 46.5,27 47.5,21 50,15 Z"
          fill="#380a1c"
          stroke="url(#trishulGoldGrad)"
          strokeWidth="1.2"
        />

        {/* Inner flame tongue inside cutout */}
        <path
          d="M 50,20
             C 51.2,23.5 51.5,26.5 50.8,29
             C 50.3,31 49.7,31 49.2,29
             C 48.5,26.5 48.8,23.5 50,20 Z"
          fill="url(#trishulHighlight)"
        />

        {/* ================= LEFT PRONG ================= */}
        <path
          d="M 23,12
             C 25,18 25,24 23.5,31
             C 21.5,39 16,45 20,53
             C 23.5,58 31,56 39,50
             L 43,47
             C 36,44 29,42 27,37
             C 24.5,31 25.5,23 27,17
             C 27.8,14 28,11.5 28.5,8
             C 26,9 24,10.5 23,12 Z"
          fill="url(#trishulGoldGrad)"
          stroke="#ffe699"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />

        {/* Left prong outer flourish curve */}
        <path
          d="M 23,12
             C 17,20 12,32 15,44
             C 17,52 23,57 32,57
             C 38,57 43,51 45,47
             C 41,51 35,53 29,51
             C 22,48 18,41 18,33
             C 18,24 21,17 23,12 Z"
          fill="url(#trishulHighlight)"
          opacity="0.85"
        />

        {/* ================= RIGHT PRONG ================= */}
        <path
          d="M 77,12
             C 75,18 75,24 76.5,31
             C 78.5,39 84,45 80,53
             C 76.5,58 69,56 61,50
             L 57,47
             C 64,44 71,42 73,37
             C 75.5,31 74.5,23 73,17
             C 72.2,14 72,11.5 71.5,8
             C 74,9 76,10.5 77,12 Z"
          fill="url(#trishulGoldGrad)"
          stroke="#ffe699"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />

        {/* Right prong outer flourish curve */}
        <path
          d="M 77,12
             C 83,20 88,32 85,44
             C 83,52 77,57 68,57
             C 62,57 57,51 55,47
             C 59,51 65,53 71,51
             C 78,48 82,41 82,33
             C 82,24 79,17 77,12 Z"
          fill="url(#trishulHighlight)"
          opacity="0.85"
        />

        {/* ================= HORIZONTAL CROSSBAR / COLLAR ================= */}
        <path
          d="M 37,47
             C 41,45 59,45 63,47
             C 64,49 63,52 61,53
             C 57,54 43,54 39,53
             C 37,52 36,49 37,47 Z"
          fill="url(#trishulHighlight)"
          stroke="#a37411"
          strokeWidth="0.8"
        />
        <line x1="40" y1="50" x2="60" y2="50" stroke="#fffae0" strokeWidth="1" strokeLinecap="round" />

        {/* ================= CENTER VERTICAL SHAFT ================= */}
        <rect
          x="47"
          y="52"
          width="6"
          height="24"
          rx="1"
          fill="url(#trishulGoldGrad)"
          stroke="#a37411"
          strokeWidth="0.6"
        />
        {/* Shaft vertical luster line */}
        <line x1="49.5" y1="53" x2="49.5" y2="75" stroke="#fffae0" strokeWidth="1" />

        {/* ================= TWIN GHUNGROO BELL LOOPS (DAMRU / SCROLLS) ================= */}
        {/* Left circular loop */}
        <g>
          <circle cx="34" cy="63" r="8" fill="url(#trishulGoldGrad)" stroke="#ffe699" strokeWidth="0.8" />
          <circle cx="34" cy="63" r="4.2" fill="#380a1c" stroke="url(#trishulGoldGrad)" strokeWidth="1.2" />
          {/* Connector to shaft */}
          <path d="M 40,60 L 47,60 L 47,66 L 40,66 Z" fill="url(#trishulGoldGrad)" />
          {/* Ghungroo slit / notch */}
          <path d="M 32,69 C 34,71 36,70 37,68" stroke="#ffe699" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Right circular loop */}
        <g>
          <circle cx="66" cy="63" r="8" fill="url(#trishulGoldGrad)" stroke="#ffe699" strokeWidth="0.8" />
          <circle cx="66" cy="63" r="4.2" fill="#380a1c" stroke="url(#trishulGoldGrad)" strokeWidth="1.2" />
          {/* Connector to shaft */}
          <path d="M 60,60 L 53,60 L 53,66 L 60,66 Z" fill="url(#trishulGoldGrad)" />
          {/* Ghungroo slit / notch */}
          <path d="M 64,69 C 66,71 68,70 69,68" stroke="#ffe699" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Shaft lower ring / collar */}
        <rect
          x="44"
          y="74"
          width="12"
          height="4"
          rx="1.5"
          fill="url(#trishulHighlight)"
          stroke="#986b0a"
          strokeWidth="0.6"
        />

        {/* ================= LOWER ORNATE GHUNGROO BELLS / CLUSTER ================= */}
        {/* Row 1 of Ghungroos (3 bells) */}
        {/* Center bell */}
        <circle cx="50" cy="84" r="4.5" fill="url(#trishulGoldGrad)" stroke="#ffe699" strokeWidth="0.6" />
        <path d="M 48,84.5 L 52,84.5 M 50,83 L 50,86.5" stroke="#380a1c" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="50" cy="85.5" r="0.8" fill="#ffe699" />

        {/* Left bell */}
        <circle cx="41" cy="84" r="4" fill="url(#trishulGoldGrad)" stroke="#ffe699" strokeWidth="0.6" />
        <path d="M 39.5,84.5 L 42.5,84.5 M 41,83 L 41,86" stroke="#380a1c" strokeWidth="0.8" strokeLinecap="round" />

        {/* Right bell */}
        <circle cx="59" cy="84" r="4" fill="url(#trishulGoldGrad)" stroke="#ffe699" strokeWidth="0.6" />
        <path d="M 57.5,84.5 L 60.5,84.5 M 59,83 L 59,86" stroke="#380a1c" strokeWidth="0.8" strokeLinecap="round" />

        {/* Row 2 of Ghungroos (2 bells) */}
        <circle cx="45.5" cy="93" r="4.2" fill="url(#trishulGoldGrad)" stroke="#ffe699" strokeWidth="0.6" />
        <path d="M 44,93.5 L 47,93.5 M 45.5,92 L 45.5,95" stroke="#380a1c" strokeWidth="0.8" strokeLinecap="round" />

        <circle cx="54.5" cy="93" r="4.2" fill="url(#trishulGoldGrad)" stroke="#ffe699" strokeWidth="0.6" />
        <path d="M 53,93.5 L 56,93.5 M 54.5,92 L 54.5,95" stroke="#380a1c" strokeWidth="0.8" strokeLinecap="round" />

        {/* Row 3 - Hanging Bottom Drop Bell & Tassel Finial */}
        <circle cx="50" cy="102" r="4.5" fill="url(#trishulHighlight)" stroke="#ffe699" strokeWidth="0.7" />
        <path d="M 48,102.5 L 52,102.5 M 50,101 L 50,104.5" stroke="#380a1c" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="50" cy="103" r="0.9" fill="#fff" />

        {/* Small bottom ornamental finial drops */}
        <polygon points="50,108 52,112 48,112" fill="url(#trishulGoldGrad)" />
        <circle cx="50" cy="114" r="1.5" fill="url(#trishulHighlight)" />
      </g>
    </svg>
  );
}
