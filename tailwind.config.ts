import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          800: "#4d1027",
          850: "#450e23",
          900: "#380a1c",
          950: "#26050f",
        },
        wine: {
          600: "#7e1c40",
          700: "#6b1636",
        },
        gold: {
          300: "#f0d789",
          400: "#e2bd53",
          500: "#c9a227",
          600: "#a9821f",
        },
        cream: {
          50: "#fdf9f0",
          100: "#fbf3e4",
        },
        ink: "#2a0a14",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        warm: "0 14px 34px rgba(42, 7, 19, 0.12)",
        "warm-lg": "0 26px 50px rgba(42, 7, 19, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
