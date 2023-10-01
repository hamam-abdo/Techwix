/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        border: "#e1e1e1",
      },
      gridTemplateColumns: {
        4: "repeat(auto-fill, minmax(300px, 1fr));",
        "4-2xl": "repeat(auto-fill, minmax(350px, 1fr));",
        bar: "repeat(auto-fill, minmax(270px, 1fr));",
        "bar-s": "repeat(auto-fill, minmax(215px, 1fr));",
      },
      backgroundImage: {
        "service-bar": "url('../img/counter-bg.jpg')",
        testlmon: "url('../img/testi-bg4.jpg')",
        cta: "url('../img/cta-bg2.jpg')",
        footer: "url('../img/footer-bg.jpg')",
        service: "url(../img/main/service-bg3.jpg)",
      },
      zIndex: {
        1000: "1000",
        1100: "1100",
      },
      translate: {
        center: "-50% ",
      },
      spacing: {
        "10%": "10%",
        "55%": "55%",
        "20%": "20%",
        "5%": "5%",
      },
    },
  },
  plugins: [],
};
