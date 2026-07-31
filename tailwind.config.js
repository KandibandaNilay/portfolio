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
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
  colors: {
    primary: '#fbbf24',    // Warm Amber/Gold: Premium, high-end consulting vibe
    secondary: '#facc15',  // Yellow: Sharp, energetic secondary highlights
    accent: '#e0de48',     // Sky Blue: A sharp, cold contrast to balance the gold
    darkbg: '#61616b',     // Zinc 950: The standard for sleek, modern web apps
    darkcard: '#4a4a53',   // Zinc 900: Perfect contrast for border highlighting
  },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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