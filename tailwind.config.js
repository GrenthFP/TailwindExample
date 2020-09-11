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
      },
      height: { 0.25: "1px" },
      width: { 0.25: "1px", 60: "240px" },

      margin: { 75: "300px" },
    },
  },
  variants: {},
  plugins: [],
};
