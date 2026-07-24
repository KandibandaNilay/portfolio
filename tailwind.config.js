/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Core Brand Green
        primary: {
          DEFAULT: '#4cb151',
          light: '#65c46a',
          dark: '#388e3c',
        },
        // Secondary complement for vibrant gradients & badges
        secondary: {
          DEFAULT: '#2e7d32',
          light: '#419645',
        },
        // Highlight accent (Electric Teal/Cyan for visual pop)
        accent: '#00b4d8',
        
        // Background Colors
        darkbg: '#9ad316',      // Rich Slate Dark Mode (contrast for white text)
        darkcard: '#9cb917',    // Card background in dark mode
        lightbg: '#065f24',     // Clean Light Mode background
        lightcard: '#7ea514',   // Card background in light mode
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #4cb151 0%, #2e7d32 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}