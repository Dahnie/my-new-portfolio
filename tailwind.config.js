module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#121212",
        secondaryBg: "#1b1b1d",
      },
      spacing: {
        "1px": "1px",
        "72px": "72px",
        "400px": "400px",
        "480px": "480px",
        "734": "734px",
        "40per": "40%",
        "55per": "55%",
      },
      screens: {
        //  => @media(min-wwidth: 1840px) {...}
        "3xl": "1840px",
        //  => @media(min-wwidth: 2160px) {...}
        "4xl": "2160px",
        //  => @media(min-wwidth: 2560px) {...}
        "5xl": "2560px"
      }
    },
  },
  plugins: [],
}