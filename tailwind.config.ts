import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tactiqo: {
          navy: "#030712",
          cyan: "#2ce8f4",
          blue: "#4b6fff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
