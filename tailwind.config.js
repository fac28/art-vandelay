/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inder: ['var(--font-inder)'],
      },
      colors: {
        secondary: '#F0ECEC',
        purple: '#6F1D71', // Define your custom purple color
      },
      backgroundColor: {
        purple: 'purple', // Assign the purple color to a class name
      },
      maxWidth: {
        '28rem': '28rem', // Add a custom maximum width class
      },
    },
  },
  plugins: [],
}
