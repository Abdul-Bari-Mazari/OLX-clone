const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    container: {
      center: true,
      padding: '',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      
      }
    },
    extend: {},
  },
  plugins: [nextui()],
}