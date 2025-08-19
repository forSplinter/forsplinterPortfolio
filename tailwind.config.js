/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)'],
        'ibm-plex-sans': ['var(--font-ibm-plex-sans)'],
        'playfair-display': ['var(--font-playfair-display)'],
      },
      colors: {
        primary: '#56adcb',
        background: '#ecf6ff',
        text: '#1e1e1e',
      },
      spacing: {
        '120': '120px',
        '16': '16px',
      },
      borderRadius: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '42': '42px',
      },
    },
  },
  plugins: [],
}

module.exports = config
