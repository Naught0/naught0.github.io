/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: [
        "IBM Plex Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica",
        "Segoe UI",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      animation: {
        flipIn: "flipIn 0.5s ease-in",
        fadeIn: "fadeIn 0.3s ease-in-out"
      },
      keyframes: {
        flipIn: {
          "0%": {
            transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
            animationTimingFunction: "ease-in",
            opacity: 0,
          },
          "40%": {
            transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
            animationTimingFunction: "ease-in",
          },
          "60%": {
            transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
            opacity: 1,
          },

          "80%": {
            transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)",
          },
          "100%": {
            transform: "perspective(400px)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
