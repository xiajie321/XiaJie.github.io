/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pixel-bg': '#f0f4f8',
        'pixel-primary': '#ff6b6b',
        'pixel-secondary': '#4ecdc4',
        'pixel-accent': '#ffe66d',
        'pixel-dark': '#2d3436',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive', 'sans-serif'], // 需要引入字体
      },
      animation: {
        'pixel-bounce': 'pixel-bounce 0.5s infinite alternate',
      },
      keyframes: {
        'pixel-bounce': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
}
