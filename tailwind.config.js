/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#111111', // rgb(17, 17, 17)
        accent: '#F2C94C', // rgb(242, 201, 76) - yellow/gold
        surface: '#F5F5F5', // rgb(245, 245, 245)
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        display: ['Work Sans', 'sans-serif'],
      },
      spacing: {
        'section': '5rem',
      },
    },
  },
  plugins: [],
}

