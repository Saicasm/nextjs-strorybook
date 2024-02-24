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
            primary: "#C2DFE3",
            secondary: "#120D31",
          },
        },
        light: {
          bg: {
            primary: "#EEF0F3",
            secondary: "#F3F5F3",
          },
          text: {
            primary: "white",
            secondary: "black",
          },
          accent: {
            primary: "#C2DFE3",
            secondary: "#120D31",
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
