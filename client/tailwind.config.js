/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b3c5fb',
          400: '#8aa4f8',
          500: '#667eea',
          600: '#5568d3',
          700: '#4451b0',
          800: '#36408d',
          900: '#2d3574',
        },
        secondary: {
          500: '#764ba2',
          600: '#653d8c',
          700: '#552f76',
        },
      },
    },
  },
  plugins: [],
}