/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "whitespace-color": "#fbfbfb",

        "primary-color": "#39cdcc",
        "primary-color-hover": "#30abab",
        "primary-color-lighter": "rgba(57, 205, 204, 0.06)",

        "primary-text-color": "#545f7d",

        "accent-text-color": "#213f7d",
        "accent-text-color-lighter": "rgba(33, 63, 125, 0.6)",

        "primary-border-color": "rgba(84, 95, 125, 0.15)",

        "primary-color-outline": "rgba(57, 205, 204, 0.4)",

        'success-color': '#39CD62',
        'warning-color': '#E9B200',
        'danger-color': '#E4033B',
      },
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

