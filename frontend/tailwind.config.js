/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "Topbar-red": "#ea2e0e",
        ink: "#1a1613",
        cream: "#f6f1e9",
        sand: "#e9dfd0",
        accent: "#b4412b"
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "none" },
        },
      },
      animation: { fadeUp: "fadeUp .8s ease-out both" },
    },
  },
  plugins: [],
};
