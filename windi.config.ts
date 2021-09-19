import colors from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';
import lineClamp from 'windicss/plugin/line-clamp';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  plugins: [typography(), lineClamp],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '12rem',
      },
    },
    extend: {
      transitionTimingFunction: {
        'oop-shi': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
      transitionDuration: {
        800: '0.8s',
      },
      transitionDelay: {
        0: '0s',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
});
