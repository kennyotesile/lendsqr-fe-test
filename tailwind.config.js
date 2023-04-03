/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#39cdcc',
        'primary-color-hover': '#30abab',
        'primary-color-outline': '#39cdcd67',
        'primary-text-color': '#545f7d',
        'accent-text-color': '#213f7d'
      },
    },
  },
  plugins: [],
}

