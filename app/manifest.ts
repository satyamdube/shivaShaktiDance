import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shiv Shakti Dance Academy',
    short_name: 'Shiv Shakti',
    description:
      'Where Devotion Meets Expression - Classical Bharatanatyam, Bollywood, Kathak & Kids Dance Academy in New Delhi.',
    start_url: '/',
    id: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#26050f',
    theme_color: '#26050f',
    orientation: 'portrait-primary',
    categories: ['education', 'entertainment', 'lifestyle'],
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Explore Classes',
        short_name: 'Classes',
        description: 'Discover our Classical, Bollywood, and Kathak courses',
        url: '/classes',
        icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Weekly Schedule',
        short_name: 'Schedule',
        description: 'View class timings and batch schedules',
        url: '/schedule',
        icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Performance Gallery',
        short_name: 'Gallery',
        description: 'Watch recitals and stage performances',
        url: '/gallery',
        icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Contact & Admissions',
        short_name: 'Contact',
        description: 'Call or visit our academy in New Delhi',
        url: '/contact',
        icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }],
      },
    ],
  };
}
