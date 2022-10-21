module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-50': '#F5F6FF',
        'primary-100': '#ECEFFF',
        'primary-200': '#C3CAFF',
        'primary-300': '#9AA6FF',
        'primary-400': '#7081FF',
        'primary-500': '#455AF7',
        'primary-600': '#3144D5',
        'primary-700': '#2132B3',
        'primary-800': '#132291',
        'primary-900': '#09156F',
        light: '#F7FAFC',
        dark: '#1A202C',
      },
    },
  },
  plugins: [],
};
