/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      flex: {
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [],
};
