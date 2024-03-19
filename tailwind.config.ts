import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        themeText:{
          100:"rgb(3, 45, 96)",
          200:"rgb(1, 118, 211)",
          300:"rgb(11, 92, 171)",
          400:"#181818"
        },
        primary:{
          100:"#0284c7",
          200:"#e0f2fe",
          300:"rgb(234, 245, 254)"
        },
        secondary:{
          100:"#047857",
          200:"#065f46",
        }
      }
    },
  },
  plugins: [],
};
export default config;
