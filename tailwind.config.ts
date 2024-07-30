import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            primary: "#121212",
            secondary: "#282828",
          },
          text: {
            primary: "#212529",
            secondary: "#495057",
          },
          accent: {
            primary: "#81b29a",
            secondary: "#8fbaa5",
          },
          border: {
            primary: "#dee2e6",
            secondary: "##dee2e6",
          },
        },
        light: {
          bg: {
            primary: "#FFFFFF",
            secondary: "#F3F5F3",
          },
          text: {
            primary: "#212529",
            secondary: "black",
          },
          accent: {
            primary: "#81b29a",
            secondary: "#8fbaa5",
          },
          border: {
            primary: "#dee2e6",
            secondary: "##dee2e6",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
