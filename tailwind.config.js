module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      fontFamily: {
        poppins: ['Poppins', '"sans-serif"'],
        roboto: ['Roboto', '"sans-serif"'],
      },
      colors: {
        mainBlue: 'rgb(22, 42, 70)',
        secondaryPink: 'rgba(254, 58, 58, 0.99)',
        mainGray: 'rgb(196,196,196,0.28)',
        buttonPink: 'rgba(255, 112, 112, 0.99)',
      },
    },
  },
  plugins: [],
}
