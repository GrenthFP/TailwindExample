module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        twitter: "#15202B",
        twittergray: "#253341",
        twitterfiller: "#192734",
        dunno: "#38444D",
        tweeterblue: "#1A91DA",
        tweeterblued: "#19608E",
      },
      height: { 0.25: "1px", 14.75: "59px", 12.625: "50.5px", 7: "28px" },
      width: {
        7: "28px",
        12: "48px",
        84: "336px",
        0.25: "1px",
        60: "240px",
        87.5: "350px",
        7.5: "30px",
        14.75: "59px",
        6.5625: "26.25px",
      },

      margin: { 75: "300px", 0.5: "2px" },
    },
  },
  variants: {},
  plugins: [],
};
