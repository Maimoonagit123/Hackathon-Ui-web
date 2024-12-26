import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif','Roboto'],
        sans: ['Helvetica', 'Arial'],
        poppins: ['poppins'],
        roboto: ['Roboto']
      },
      screens: {
        xsm: '360px', // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
};
export default config;
