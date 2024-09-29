// tailwind.config.js
module.exports = {
  content: [
    "./*.html",            // Include all HTML files in the root directory
    "./form/**/*.html",     // Include HTML files in a `form` directory (if any)
    "./form/**/*.js",       // Include JS files where you might use Tailwind classes (if any)
    "./components/**/*.vue", // Include Vue component files (if using Vue)
    // Add paths to any other files where Tailwind classes are used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
