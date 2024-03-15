/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gradientColorStopPositions: {
        33: "33%",
      },
    },
    plugins: [],
  },
};
