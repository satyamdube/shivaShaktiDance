import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from "lucide-react";

export default function ContactSection() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Studio Location",
      value: "C-Block, Greater Kailash Part I, South Delhi, New Delhi - 110048",
      sub: "Near M-Block Market (Valet parking available)",
    },
    {
      icon: Phone,
      title: "Direct Admissions Line",
      value: "+91 98110 24590 / +91 98731 88204",
      sub: "Available 9:00 AM – 8:30 PM",
    },
    {
      icon: Mail,
      title: "Email Inquiries",
      value: "admissions@shivshaktidance.com",
      sub: "Responses within 12 business hours",
    },
    {
      icon: Clock,
      title: "Studio Working Hours",
      value: "Tuesday to Sunday: 9:00 AM – 8:30 PM",
      sub: "Mondays: Closed for studio maintenance",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-maroon-900 text-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>Visit Or Connect</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-100">
            Reach Out to Shiv Shakti
          </h2>
          <p className="mt-3 text-cream-100/75 text-base">
            We invite you to visit our serene dance hall, witness a live class, and speak with our Gurus.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-maroon-950/70 border border-gold-400/25 rounded-xl p-6 hover:border-gold-400/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs uppercase tracking-wider text-gold-400 font-bold mb-1">
                  {c.title}
                </h4>
                <p className="text-sm font-medium text-cream-100 leading-snug mb-1">
                  {c.value}
                </p>
                <p className="text-xs text-cream-100/60">{c.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Studio Visit CTA Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-maroon-950 via-wine-700/30 to-maroon-950 border border-gold-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cream-100 mb-1">
              Have questions or want to speak with our dance counselor?
            </h3>
            <p className="text-sm text-cream-100/70">
              Call us directly or WhatsApp us for instant batch recommendations.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919811024590?text=Namaste%20Shiv%20Shakti%20Dance%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20dance%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg text-sm shadow transition-colors flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-400 hover:bg-gold-400/15 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-400 hover:bg-gold-400/15 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-400 hover:bg-gold-400/15 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
