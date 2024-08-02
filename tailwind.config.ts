import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0271da", // light mode primary color
          dark: "#0271da", // dark mode primary color
        },
        background: {
          light: "#EEF7FF", // light mode background color
          dark: "#060e11", // dark mode background color
        },
        foreground: {
          light: "#FFFFFF", // light mode foreground color
          dark: "#000000", // dark mode foreground color
        },
        foregroundSecondary: {
          light: "#FFFFFF", // light mode foreground color
          dark: "#202d35", // dark mode foreground color
        },
        textPrimary: {
          light: "#000000", // light mode text color
          dark: "#ffffff", // dark mode text color
        },
        textSecondary: {
          light: "grey", // light mode text color
          dark: "lightgrey", // dark mode text color
        },
        border: {
          light: "lightgrey", // light mode border color
          dark: "grey", // dark mode border color
        },
        // Add more custom colors if needed
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      borderColor: ["dark"],
      // Add more variants if needed
    },
  },
  darkMode: "selector",
  plugins: [],
};
export default config;
