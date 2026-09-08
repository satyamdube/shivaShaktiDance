import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import CallFab from "@/components/CallFab";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#26050f",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiv Shakti Dance Academy — Where Devotion Meets Expression",
  description:
    "Shiv Shakti Dance Academy, New Delhi — Classical Bharatanatyam, Bollywood & Semi-Classical, Kathak, and Kids Dance training. Where devotion meets expression.",
  keywords: [
    "Dance Academy",
    "Bharatanatyam",
    "Bollywood Dance",
    "Kathak",
    "Delhi Dance Classes",
    "South Delhi Dance Studio",
    "Next.js React Demo",
  ],
  openGraph: {
    title: "Shiv Shakti Dance Academy — Where Devotion Meets Expression",
    description: "Classical Indian & Contemporary Dance Training in Greater Kailash, New Delhi",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-ink bg-cream-50 selection:bg-gold-400 selection:text-maroon-950 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFab />
        <CallFab />
      </body>
    </html>
  );
}
