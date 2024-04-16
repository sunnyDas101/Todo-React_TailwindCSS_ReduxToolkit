/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'containerBg': '#212832',
        'secondary': '#455A64',
        'primary': '#FED36A',
        'textShade': '#8CAAB9',
        'footerBg': '#263238',
      }
    },
  },
  plugins: [],
}

