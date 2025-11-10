
 * Tailwind CSS configuration for the SLB portfolio project.
 * Adjust the `content` paths if you add new folders where Tailwind classes will appear.
 */
module.exports = {
  content: [
    "./*.html",
    "./css/**/*.css",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0b76ef'
      }
    },
  },
  plugins: [],
}
