module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        introX1: "introX 0.5s ease-in-out",
        introY1: "introY 0.5s ease-in-out",
        introY2: "introY 0.75s ease-in-out",
        introY3: "introY 1s ease-in-out",
      },
      keyframes: {
        introX: {
          "0%": { transform: "translate(150px)" },
          "100%": { transform: "translate(0px)" },
        },
        introY: {
          "0%": { transform: "translate(0px, -50px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
    },
  },
  plugins: [],
};
