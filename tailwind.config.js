/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    "w-full",
    { pattern: /row/ },
    { pattern: /col/ },
    { pattern: /gap/ },
    { pattern: /flex/ },
    { pattern: /grid/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

