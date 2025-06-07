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
      colors: {
        'primary-main': '#2196F3',
        'primary-80': '#4DA8F5',
        'primary-50': '#90C8F9',
        'primary-20': '#D1E7FB',
        'secondary-main': '#4CAF50',
        'secondary-80': '#6FBF73',
        'secondary-50': '#A5D6A7',
        'secondary-20': '#D8EBD9',
        'tertiary-main': '#607D8B',
        'tertiary-80': '#7F97A2',
        'tertiary-50': '#B0BEC5',
        'tertiary-20': '#E0E7EB',
        'error-main': '#F30000',
        'error-80': '#F34C4C',
        'error-50': '#F38585',
        'error-20': '#F3BEBE',
        'gray-main': '#9A9FAE',
        'gray-80': '#A8ACB9',
        'gray-50': '#C4C7D0',
        'gray-20': '#EBEBEB',
        title: '#2196F3',
        subtitle: '#cdd7f8',
      },
    },
  },
  plugins: [],
};
