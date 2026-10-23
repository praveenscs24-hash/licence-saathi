/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saathi: {
          navy: '#0f2b5c',
          navyLight: '#1b3f7d',
          navyDark: '#081a38',
          teal: '#0d9488',
          tealLight: '#14b8a6',
          tealDark: '#0f766e',
          amber: '#f59e0b',
          amberLight: '#fef3c7',
          success: '#16a34a',
          danger: '#dc2626',
          surface: '#f8fafc',
          card: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Devanagari', 'Noto Sans Tamil', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
