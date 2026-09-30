/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#050816',
        bgCard: '#0B1120',
        flutterBlue: '#42A5F5',
        flutterCyan: '#00D4FF',
        accentPurple: '#8B5CF6',
        textLight: '#F8FAFC',
        textMuted: '#94A3B8',
      },
    },
  },
  plugins: [],
}
