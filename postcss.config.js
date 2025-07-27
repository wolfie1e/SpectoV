// postcss.config.js
export default {
  plugins: {
    // CHANGE THIS LINE:
    // From: tailwindcss: {},
    // To:
    '@tailwindcss/postcss': {}, // Use the new PostCSS plugin package for Tailwind CSS v4
    autoprefixer: {},
  },
}