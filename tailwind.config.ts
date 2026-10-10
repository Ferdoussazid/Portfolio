import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1d4ed8",
          glow: "rgba(37, 99, 235, 0.4)",
        },
        cyber: {
          bg: "#05070e",
          card: "#0d1322",
          cardHover: "#131c33",
          border: "rgba(255, 255, 255, 0.08)",
          neonCyan: "#00f5d4",
          neonBlue: "#2563eb",
          electricBlue: "#3b82f6",
          emerald: "#10b981",
          slate: "#64748b",
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-reverse': 'spinRev 30s linear infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'border-beam': 'borderBeam 5s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        spinRev: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        borderBeam: {
          '100%': { 'offset-distance': '100%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
      boxShadow: {
        'blue-glow': '0 0 30px rgba(37, 99, 235, 0.4)',
        'cyan-glow': '0 0 30px rgba(0, 245, 212, 0.4)',
        'emerald-glow': '0 0 30px rgba(16, 185, 129, 0.4)',
        'bkash-glow': '0 0 30px rgba(37, 99, 235, 0.4)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'cyber-grid': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
export default config;
