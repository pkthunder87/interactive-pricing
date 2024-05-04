/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Manrope',
    },
    screens: {
      sm: '501px',
      md: '750px',
      lg: '900px',
      xl: '1030px',
      xl2: '1230px',
      xl3: '1440px',
    },
    extend: {
      colors: {
        'primary-blue': 'hsl(246, 80%, 60%)',
      },
    },
  },
  plugins: [],
};
