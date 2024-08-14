import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     "colors": {
          "lms-green1": "#5aac38",
          "lms-green2": "#23a204",
          "lms-green":  "#039600",
},
    },
  },
  plugins: [],
};
export default config;
