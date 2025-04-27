/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#F0F5FF',
          100: '#E1EBFF',
          200: '#C3D7FF',
          300: '#A5C3FF',
          400: '#87AFFF',
          500: '#699BFF',
          600: '#3366FF',
          700: '#2952CC',
          800: '#1F3D99',
          900: '#142966',
        },
        teal: {
          500: '#14B8A6',
        },
        success: {
          500: '#22C55E',
        },
        error: {
          500: '#EF4444',
        },
      },
      animation: {
        'pulse-gentle': 'pulse 3s infinite',
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}