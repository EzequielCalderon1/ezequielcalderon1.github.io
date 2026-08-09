/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ps-red': '#e31837',
        'ps-blue': '#2e5ea6',
        'ps-navy': '#1d3461',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Impact', 'Arial Narrow', 'system-ui'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(30px, -40px)' },
          '66%': { transform: 'translate(-20px, 25px)' },
        },
      },
      animation: {
        drift: 'drift 28s ease-in-out infinite',
        'drift-slow': 'drift 38s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-ps-navy', 'bg-ps-red', 'bg-ps-blue',
    'text-ps-navy', 'text-ps-red', 'text-ps-blue',
    'border-ps-navy', 'border-ps-blue', 'border-ps-red',
    'outline-ps-navy',
    'hover:bg-ps-red', 'hover:text-ps-navy', 'hover:border-ps-navy',
  ],
}

export default config
