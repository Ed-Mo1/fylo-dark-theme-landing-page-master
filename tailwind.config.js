/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
       
      },
    },
    fontFamily: {
      open_snas: ["Open Sans", "sans-serif"],
      raleway: ["Raleway", "serif"],
    },
    colors: {
      primaryDarkBlueIntro: "hsl(217, 28%, 15%)",
      primaryDarkBlueMain: "hsl(218, 28%, 13%)",
      primaryDarkBlueFooter: "hsl(216, 53%, 9%)",
      primaryDarkBlueTestimonials: "hsl(219, 30%, 18%)",
      accentCyan: "hsl(176, 68%, 64%)",
      accentBlue: "hsl(198, 60%, 50%)",
      accentLightRed: "hsl(0, 100%, 63%)",
      neutralWhite: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
