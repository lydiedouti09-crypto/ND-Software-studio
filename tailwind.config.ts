import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        paper: "#F6F7F9",
        surface: "#FFFFFF",
        ink: "#161B22",
        slate: {
          soft: "#5B6472",
        },
        line: "#E4E7EC",
        dark: {
          bg: "#1A212B",
          panel: "#212938",
          line: "#333D4D",
        },
        signal: {
          DEFAULT: "#2FD9CB",
          soft: "#9FF1E8",
          dim: "#0F5B57",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
