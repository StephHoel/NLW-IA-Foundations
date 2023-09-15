/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        bgColor: 'background-color',
      },
      transitionDuration: {
        bgColor: '.2s',
      },
    },
  },
  plugins: [],
}
