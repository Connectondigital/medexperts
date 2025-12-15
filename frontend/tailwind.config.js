/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            DEFAULT: '#3b82f6', // blue-500
            10: '#eff6ff', // 50 approx
            50: '#eff6ff',
            100: '#dbeafe',
            500: '#3b82f6',
            600: '#2563eb',
        },
        secondary: {
            DEFAULT: '#1e293b', // slate-800
        },
        'purple-light': '#f3e8ff',
      }
    },
  },
  plugins: [],
}
