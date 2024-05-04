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
        'primary-soft-cyan': 'hsl(174, 77%, 80%)',
        'primary-strong-cyan': 'hsl(174, 86%, 45%)',
        'primary-light-grayish-red': 'hsl(14, 92%, 95%)',
        'primary-light-red': 'hsl(15, 100%, 70%)',
        'primary-pale-blue': 'hsl(226, 100%, 87%)',
        'neutral-white': 'hsl (0, 0%, 100%)',
        'neutral-very-pale-blue': 'hsl(230, 100%, 99%)',
        'neutral-light-grayish-blue-slider': 'hsl(224, 65%, 95%)',
        'neutral-light-graish-blue-toggle': 'hsl(223, 50%, 87%)',
        'neutral-grayish-blue': 'hsl(225, 20%, 60%)',
        'neutral-dark-desaturated-blue': 'hsl(227, 35%, 25%)',
      },
    },
  },
  plugins: [],
};
