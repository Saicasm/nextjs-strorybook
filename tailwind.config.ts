import { text } from "stream/consumers";
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
            primary: "#272727",
            secondary: "bg-gray-100",
          },
          text: {
            primary: "white",
            secondary: "black",
          },
          accent: {
            primary: "black",
            secondary: "bg-gray-500",
          },
        },
        light: {
          bg: {
            primary: "#7E808D",
            secondary: "#F3F5F3",
          },
          text: {
            primary: "white",
            secondary: "black",
          },
          accent: {
            primary: "black",
            secondary: "bg-gray-500",
          },
          border: {
            primary: "#7F878C",
            secondary: "bg-gray-500",
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
