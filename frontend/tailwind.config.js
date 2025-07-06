/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  animation: {
    'float-slow': 'float 6s ease-in-out infinite',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-6px)' },
    },
  },
  typography: {
    DEFAULT: {
      css: {
        color: 'inherit',
        a: { color: 'inherit' },
      },
    },
  },
},

  },
  plugins: [],
};
