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
  primary: '#6366F1',    // Electric Indigo / Purple
  secondary: '#8B5CF6',  // Vivid Violet
  accent: '#06B6D4',     // Glowing Cyan
  
  // Backgrounds with subtle hue instead of flat gray
  darkbg: '#0B0F19',     // Rich Deep Obsidian Blue
  darkcard: '#161F33',   // Glowing Elevated Card Background
  lightbg: '#F3F4F6',    // Soft Off-White
  lightcard: '#FFFFFF',  // Clean White Card
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