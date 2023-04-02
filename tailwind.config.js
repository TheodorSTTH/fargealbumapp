/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "lemonade",
    ],
    themes: [
      {
        darklemonade: {
          "primary": "#3f6212",
          "secondary": "#E9E92E",
          "accent": "#F7F9CA",
          "neutral": "#191A3F",
          "base-100": "#FFFFFF",
          "info": "#C8E1E7",
          "success": "#DEF29F",
          "warning": "#F7E589",
          "error": "#F2B6B5",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

