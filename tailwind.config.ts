import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'deep-purple-900': '#3F0071',
        'deep-purple-800': '#610094',
        'deep-purple-700': '#7F00BD',
        'dark-purple': '#150050',
        'light-purple': '#7C5FBF',
      }
    },
  },
  plugins: [],
};
export default config;
