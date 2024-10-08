const { nextui } = require('@nextui-org/react');
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: '',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primaryBlack: 'rgb(0, 47, 52)',
        primaryBlue: 'rgb(59 130 246)',
      },
    },
  },
  plugins: [nextui(), flowbite.plugin()],
};
