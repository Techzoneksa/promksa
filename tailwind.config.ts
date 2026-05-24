import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
          "primary-light": "rgb(var(--color-primary-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark-rgb) / <alpha-value>)",
          surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
          cyan: "rgb(var(--color-accent-cyan-rgb) / <alpha-value>)",
          text: "rgb(var(--color-text-primary-rgb) / <alpha-value>)",
          muted: "rgb(var(--color-text-secondary-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Tahoma", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Tahoma", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        brand: "var(--radius-brand)",
      },
      boxShadow: {
        "brand-card": "0 4px 24px rgba(116, 72, 245, 0.08)",
        "brand-card-hover": "0 8px 40px rgba(116, 72, 245, 0.15)",
        "brand-cyan": "0 0 30px rgba(65, 199, 215, 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-slow": "marquee 44s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
