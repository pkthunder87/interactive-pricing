/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Manrope',
    },
    screens: {
      sm: '501px',
      md: '751px',
      lg: '900px',
      xl: '1030px',
      xl2: '1230px',
      xl3: '1440px',
    },
    extend: {
      backgroundImage: {
        'svg-background': "url('bg-pattern.svg')",
        'svg-header': "url('pattern-circles.svg')",
        'svg-slider': "url('icon-slider.svg')",
      },
      colors: {
        'primary-soft-cyan': 'hsl(174, 77%, 80%)',
        'primary-strong-cyan': 'hsl(174, 86%, 45%)',
        'active-cyan': 'hsl(174, 86%, 35%)',
        'shadow-cyan': 'hsla(174, 86%, 55%, .7)',
        'primary-light-grayish-red': 'hsl(14, 92%, 95%)',
        'primary-light-red': 'hsl(15, 100%, 70%)',
        'primary-pale-blue': 'hsl(226, 100%, 87%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-very-pale-blue': 'hsl(230, 100%, 99%)',
        'neutral-light-grayish-blue-slider': 'hsl(224, 65%, 95%)',
        'neutral-light-grayish-blue-toggle': 'hsl(223, 50%, 87%)',
        'neutral-grayish-blue': 'hsl(225, 20%, 60%)',
        'neutral-dark-desaturated-blue': 'hsl(227, 35%, 25%)',
      },
    },
  },
  plugins: [],
};
