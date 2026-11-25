import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
          dark: "#020617",
        },
        ruby: {
          DEFAULT: "#800406",
          hover: "#660305",
          light: "#FDF2F2",
          border: "#991B1B",
        },
        surface: {
          subtle: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
