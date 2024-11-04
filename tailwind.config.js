/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-light-grayish": "#effafa",
        "cyan-dark-grayish": "hsl(180, 8%, 52%)",
        "cyan-very-dark-grayish": "hsl(180, 14%, 20%)",
        "cyan-desaturated-dark": " hsl(180, 29%, 50%)",
      },
    },

    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
