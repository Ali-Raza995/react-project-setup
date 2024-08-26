/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0A0A0A",
        "secondary": "#333333",
        "tertiary": "#DDDDDD",
        "dark-gray": "#1D1D1D",
        "gray": "#7E7E7E",
        "medium-gray": "#949494",
        "light-gray": "#A1A1A1",
        "pale-gray": "#AAAAAA",
        "white": "#ffffff",
        "black": "#000000",
        "soft-cyan": "#98CACE",
        "mid-night": "#121212",
        "steel-gray": "#808080",
        "charcoal-gray":"#2F2F2F"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        lLap: { max: "1440px" },
        lap: { max: "1024px" },
        tab: { max: "800px" },
        lMob: { max: "500px" },
        mMob: { max: "390px" },
        sMob: { max: "350px" },
      },
    },
  },
  plugins: [],
};
