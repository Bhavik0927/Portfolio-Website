/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Add an extra small breakpoint
        '3xl': '1600px', // Add an extra-large breakpoint
      },
    },
  },
  plugins: [],
}
