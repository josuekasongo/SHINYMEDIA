/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#000000',
          card: '#0a0a0a',
          primary: '#d4af37',
          primaryHover: '#b5952f',
          text: '#f8fafc',
          muted: '#a1a1aa',
          border: '#27272a',
          accent: '#facc15'
        },
        light: {
          bg: '#ffffff',
          card: '#f8fafc',
          text: '#0f172a',
          muted: '#475569',
          border: '#e2e8f0'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
