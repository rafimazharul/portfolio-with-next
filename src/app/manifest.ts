import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rafi | Portfolio',
    short_name: 'Rafi Portfolio',
    description: 'Frontend-Focused MERN Stack Developer specializing in building modern web applications with React, Next.js, and Node.js.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#FF4C4C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
      },
    ],
  }
}
