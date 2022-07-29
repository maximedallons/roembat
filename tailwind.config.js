/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fab915",
          "secondary": "#facc15",
          "accent": "#dc2626",
          "neutral": "#121212",
          "grey": "#505050",
          "white": "#ffffff",
        },
      },
    ],
  }
}
