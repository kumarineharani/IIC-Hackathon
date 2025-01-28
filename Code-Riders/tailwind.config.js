/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "playwrite-extralight": ["Playwrite-ExtraLight", "sans-serif"],
        "playwrite-light": ["Playwrite-Light", "sans-serif"],
        "playwrite-regular": ["Playwrite-Regular", "sans-serif"],
        "playwrite-thin": ["Playwrite-Thin", "sans-serif"],

       },      colors: {
        primary: {
          100: "#FCE7C8",
          200: "#B1C29E",
          300: "#FADA7A",
          400: "#F0A04B",
          500: "#4dabf7",
          600: "#339af0",
          700: "#228be6",
          800: "#1c7ed6",
          900: "#1b6ec2",
        },
      },
    },
  },
  plugins: [],
}