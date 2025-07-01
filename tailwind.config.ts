import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      "font-lato": ["var(--font-lato)"],
      "be-vietnam-pro": ["var(--font-be-vietnam-pro)"],
      noto: ["var(--font-noto-sans)"],
    },
    extend: {
      colors: {
        primary: "#8167A7",
        "lavender-light": "#E8E1F1",
        "rose-accent": "#E6696E",
        "rose-light": "#FFE2E3",
        "deep-black": "#222222",
        "gray-light": "#E8E8E8",
        "gray-muted": "#676767",
        "gray-dark-muted": "#8B8B8B",
        "gray-medium": "#A5A5A5",
        "gray-amethyst": "#FBF8FF",
        danger: "#F50030",
        "blue-accent": "#002FFF",
        "gray-default": "#DDDDDD",
        amethystGray: "#8167A7",
        "pink-accent": "#B4688B",
        "pink-soft": "#FFC7C9",
        "pink-soft-primary": "#FFE3E4",
        "gray-lightest": "#F8F8FB",
        "gradient-red": "#FF555C",
        "gradient-purple": "#844FB8",
      },
      boxShadow: {
        custom: "0px 8px 24px 0px rgba(0, 0, 0, 0.1)",
        custom_2: "0px 8px 16px 0px #00000040",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "integrated-technology-gradient":
          "linear-gradient(104.17deg, #AC3F29 1.14%, #A11E05 92.85%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blur: {
          "0%, 100%": { filter: "blur(0px)" },
          "50%": { filter: "blur(6px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease forwards",
        slideInDown: "slideInDown 0.7s ease forwards",
        scaleIn: "scaleIn 0.7s ease forwards",
        blur_image: "blur 1s ease-in-out ease forwards",
      },
      transitionDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
      },
    },
  },
  plugins: [],
};
export default config;
