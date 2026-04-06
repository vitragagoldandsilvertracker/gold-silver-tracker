/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#C0C0C0",       // Silver
        accent: "#C9A84C",          // Gold - rich warm gold
        "accent-light": "#E2C97E",  // Light gold
        "accent-bright": "#A67C2E", // Deep gold
        silver: "#C0C0C0",          // Pure silver
        "silver-light": "#E8E8E8",  // Light silver
        "silver-dark": "#A8A8A8",   // Dark silver
      },
    },
  },
  plugins: [],
};
