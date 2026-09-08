# Shiv Shakti Dance Academy — React Next.js Demo Project

A production-grade, responsive **React + Next.js (App Router)** web application built for **Shiv Shakti Dance Academy** (New Delhi). Demonstrating modern Next.js 15, React 19, TypeScript, Tailwind CSS, Server & Client Components, and Next.js API route integration.

---

## 🌟 Key Features

- **Next.js 15 & React 19**: Powered by the modern App Router architecture.
- **TypeScript**: Complete type safety across all components, data models, and API endpoints.
- **Tailwind CSS Design System**: Custom Indian classical theme featuring warm gold accents, deep maroon tones, and Google Web Fonts (*Cormorant Garamond* & *Poppins*).
- **Interactive Component Suite**:
  - **Navbar**: Sticky blurred header with mobile navigation drawer.
  - **Hero Section**: Dynamic layout with live metrics, decorative motifs, and quick CTA links.
  - **Pillars & Values Banner**: 4 academy pillars with iconography.
  - **Class & Curriculum Catalog**: Real-time category filtering (Classical, Bollywood, Kids) and curriculum details modal.
  - **Timetable & Batch Schedule**: Filterable schedule table with vacancy indicators.
  - **Why Choose Us**: 5-pillar classical heritage & training philosophy.
  - **Heritage & Guru Profile**: Highlighting lineage and artistic leadership.
  - **Mosaic Gallery**: Responsive showcase of live stage moments.
  - **Testimonials**: Authentic parent & graduate dancer feedback.
  - **Interactive Trial Booking**: Form with instant validation and async submission to `/api/enroll`.
  - **API Route (`/api/enroll`)**: Next.js server route handling lead generation with validation and structured response.
  - **Contact & WhatsApp FAB**: Studio address, timings, and one-click WhatsApp chat.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── enroll/
│   │       └── route.ts        # Next.js API endpoint for trial enrollment
│   ├── globals.css             # Tailwind directives and custom animation styles
│   ├── layout.tsx              # Root HTML layout with Google Fonts and SEO tags
│   └── page.tsx                # Main Landing Page assembling all components
├── components/
│   ├── AboutSection.tsx        # Academy heritage and Guru profile card
│   ├── ClassCatalog.tsx        # Interactive dance courses with filtering & modal
│   ├── ContactSection.tsx      # Studio address, contact cards, and map links
│   ├── EnrollmentSection.tsx   # Interactive booking form with API integration
│   ├── Footer.tsx              # Footer navigation and legal copyright
│   ├── Gallery.tsx             # Responsive image mosaic
│   ├── Hero.tsx                # Grand hero banner with dancer card & stats
│   ├── Navbar.tsx              # Responsive navbar with mobile drawer
│   ├── ScheduleTable.tsx       # Filterable batch timetable with status badges
│   ├── Testimonials.tsx        # Student and parent review cards
│   ├── ValueStrip.tsx          # 4-column value proposition strip
│   ├── WhatsAppFab.tsx         # Floating WhatsApp connect button
│   └── WhyUs.tsx               # 5-column academy philosophy highlights
├── data/
│   └── danceData.ts            # Typed datasets for classes, schedule, & reviews
├── next.config.mjs             # Next.js configuration (Remote images etc.)
├── package.json                # Project scripts and dependencies
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind styling tokens & theme extensions
└── tsconfig.json               # TypeScript configuration with @/* alias
```
