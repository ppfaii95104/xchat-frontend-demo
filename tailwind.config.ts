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
        noto: ["Noto Sans Thai"],
      },
      colors: {
        "primary-light": "#FFECD4",
        primary: "#FF6C11",
        secondary: "#FFD400",
        grey: "#F4F5F9",
        "drak-grey": "#6D6D6D",
        "grey-box": "#E4E6EC",
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
};
export default config;
