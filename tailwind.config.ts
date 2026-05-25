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
          "ai-blue": "rgb(var(--color-ai-blue-rgb) / <alpha-value>)",
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
        brand: "12px",
      },
      boxShadow: {
        "apple": "0 2px 40px rgba(0,0,0,0.04)",
        "apple-hover": "0 8px 60px rgba(116, 72, 245, 0.10)",
        "apple-ai": "0 8px 60px rgba(59, 130, 246, 0.10)",
        "soft-glow": "0 0 60px rgba(116, 72, 245, 0.12)",
        "soft-glow-ai": "0 0 60px rgba(59, 130, 246, 0.12)",
        "luxe": "0 24px 80px rgba(0,0,0,0.06)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-slow": "marquee 44s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
