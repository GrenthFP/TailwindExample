module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        twitter: "#0a1930",
        twittergray: "3c3e42",
      },
      height: { 0.25: "1px" },
      width: { 0.25: "1px" },
      margin: { 75: "300px" },
    },
  },
  variants: {},
  plugins: [],
};
