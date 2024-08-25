/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: "#1f2a3b",
        darkCardBg:'#2f3f4f',
        darkYesBg:'#335554',
        darkNoBg:'#524350',
        darkBtn:'#2d9cdb',
      }
    },
  },
  plugins: [],
};
