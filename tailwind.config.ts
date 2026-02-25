import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "nautical": {
          "950": "#001a33",
          "900": "#00234b",
          "800": "#003366",
          "700": "#004080",
          "600": "#004d99",
          "500": "#0066cc",
          "400": "#3399ff",
          "300": "#66b3ff",
          "200": "#99ccff",
          "100": "#ccebff",
          "50": "#e6f5ff",
        },
        "ocean": {
          "950": "#0a2348",
          "900": "#0e2d5a",
          "800": "#1a4d7a",
          "700": "#2d6fa0",
          "600": "#4491c6",
          "500": "#6db3e8",
          "400": "#8ec5ef",
          "300": "#b0d9f8",
          "200": "#d0eafe",
          "100": "#e8f4ff",
        },
        "dock": {
          "wood": "#8b5a3c",
          "metal": "#6b7280",
          "rope": "#92400e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "wave": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "wave": "wave 2s infinite",
        "fade-in": "fade-in 0.5s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
