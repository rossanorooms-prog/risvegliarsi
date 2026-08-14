import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crema: "#F2ECDF",
        cremascura: "#E6DBC4",
        inchiostro: "#2A231C",
        rosso: "#8C3324",
        rossoscuro: "#6E2A1F",
        petrolio: "#3F5F58",
        petrolioscuro: "#2E4741",
        senape: "#B98A2E",
        senapescura: "#93701F",
        legno: "#8A6A4C",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
