import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E0E",
        surface: "#171717",
        brand: "#F0004F",
        "brand-soft": "#FF4D7D",
        muted: "#A1A1AA",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
