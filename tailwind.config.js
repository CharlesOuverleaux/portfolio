module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      square: "square",
    },
    extend: {
      colors: {
        "blue-co": "#183DF2",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
      boxShadow: {
        "co-blue": "4px 4px 0 #183DF2",
        "co-light": "4px 4px 0 #F4F6FC",
      },
      animation: {
        introX1: "introX 0.5s ease-in-out",
        introX2: "introXleft 0.5s ease-in-out",
        introY1: "introY 0.5s ease-in-out",
        introY2: "introY 0.75s ease-in-out",
        introY3: "introY 1s ease-in-out",
      },
      keyframes: {
        introXleft: {
          "0%": { transform: "translate(-150px)" },
          "100%": { transform: "translate(0px)" },
        },
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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
