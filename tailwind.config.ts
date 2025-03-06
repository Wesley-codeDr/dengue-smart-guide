
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Apple-inspired color palette
        primary: {
          DEFAULT: "#0071e3", // Apple blue
          light: "#e8f4fc",
          dark: "#0060bf",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#f5f5f7", // Apple light gray
          light: "#ffffff",
          dark: "#d2d2d7",
        },
        accent: {
          DEFAULT: "#34c759", // Apple green
          light: "#e8f7ed",
          dark: "#2eb04d",
        },
        destructive: {
          DEFAULT: "#ef4444",
          light: "#EDE9F8",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF5757",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F7FAFC",
          foreground: "#4A5568",
        },
        accent: {
          DEFAULT: "#EDF2F7",
          foreground: "#2D3748",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A202C",
        },
        success: "#34c759", // Apple green success color
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
