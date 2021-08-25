const theme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    '../**/*.html',
     '..//**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      nord0: "#2E3440",
      nord1: "#3B4252",
      nord2: "#434C5E",
      nord3: "#4C566A",
      nord4: "#D8DEE9",
      nord5: "#E5E9F0",
      nord6: "#ECEFF4",
      nord7: "#8FBCBB",
      nord8: "#88C0D0",
      nord9: "#81A1C1",
      nord10: "#5E81AC",
      nord11: "#BF616A",
      nord12: "#D08770",
      nord13: "#EBCB8B",
      nord14: "#A3BE8C",
      nord15: "#B48EAD",
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "sans-serif",
      ],
      serif: ["ui-serif", "Roboto Slab", "serif"],
      mono: ["ui-monospace", "Roboto Mono", "monospace"],
    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            h1: {
              fontFamily: `${theme('fontFamily.serif')}`,
            },
            h2: {
              fontFamily: `${theme('fontFamily.serif')}`,
            },
            h3: {
              fontFamily: `${theme('fontFamily.serif')}`,
            },
            h4: {
              fontFamily: `${theme('fontFamily.serif')}`,
            },
            h5: {
              fontFamily: `${theme('fontFamily.serif')}`,
            },
            h6: {
              fontFamily: `${theme('fontFamily.serif')}`,
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
