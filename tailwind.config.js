/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#39cdcc",
        "primary-color-hover": "#30abab",
        "primary-color-outline": "rgba(57, 205, 204, 0.4)",

        "primary-text-color": "#545f7d",
        "accent-text-color": "#213f7d",

        "whitespace-color": "#fbfbfb",

        "primary-border-color": "rgba(84, 95, 125, 0.15)"
      },
    },
  },
  plugins: [],
}

