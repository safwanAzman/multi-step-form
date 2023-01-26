/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          marineBlue: "#EEF4FB",
          purplishBlue: "#473DFF",
          pastelBlue: "#ADBEFF",
          lightBlue: "#BFE2FD",
          strawberry: "#ED3548",
        },
        neutral: {
          coolGray: "#9699AB",
          lightGray: "#D6D9E6",
          magnolia: "#F0F6FF",
          alabaster: "#FAFBFF",
        },
      },
    },
  },
  plugins: [],
}
