/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(340, 75%, 55%)",
          light: "hsl(340, 75%, 65%)",
          dark: "hsl(340, 75%, 45%)",
        },
        secondary: {
          DEFAULT: "hsl(45, 90%, 60%)",
          light: "hsl(45, 90%, 70%)",
          dark: "hsl(45, 90%, 50%)",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.2" }],
        "display-mobile": ["2.5rem", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [],
};
