import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        xs: "0.375rem", // 6px
        sm: "0.75rem", // 12px
        base: "1.5rem", // 24px
        md: "2.5rem", // 40px
        lg: "3.125rem", // 50px
        header: "var(--header-size)",
      },
      fontSize: {
        xs: "0.625rem", // 10px
        sm: "0.75rem", // 12px
        base: "1rem", // 16px
        md: "1.5rem", // 24px
        lg: "2.25rem", // 36px
        xl: "3.5rem", // 56px
        "2xl": "7.625rem", // 122px
        xxl: "10.625rem", // 170px
      },
      height: {
        svh: "100svh",
        dvh: "100dvh",
        header: "var(--header-size)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.76, 0, 0.24, 1)",
        expo: "cubic-bezier(0.87, 0, 0.13, 1)",
        scroll: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
    fontFamily: {
      neueHaasUnica: [
        "var(--font-neueHaasUnica)",
        ...defaultTheme.fontFamily.sans,
      ],
      coupeur: "var(--font-coupeur)",
    },
    colors: {
      black: "#3E3E3E",
      white: "#F3F2EB",
      purple: "#905999",
      lightBlue: "#67ABD0",
      yellow: "#E7DF70",
      green: "#47886B",
      red: "#AD4747",
    },
  },
  plugins: [],
};
export default config;
