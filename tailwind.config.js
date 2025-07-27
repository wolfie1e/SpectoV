// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind where to scan for classes
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc. here if needed
      // For example, to use your spectov-blue as a Tailwind color:
      // colors: {
      //   'spectov-blue': '#46A9B6',
      // },
    },
  },
  plugins: [],
}