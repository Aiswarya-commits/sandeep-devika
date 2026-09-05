/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFEFA',
          100: '#FAF6EF',
          200: '#F5EEDD',
          300: '#EADFC8',
          400: '#DFCDB0',
        },
        gold: {
          light: '#F5E2A8',
          DEFAULT: '#C9A84C',
          metallic: '#DFC06A',
          dark: '#9C7A3C',
          deep: '#7A5C28',
          border: 'rgba(201, 168, 76, 0.45)',
        },
        wedding: {
          text: '#3D2817',
          subtext: '#7A624E',
          maroon: '#6B1D28',
          rose: '#D9777F',
          blush: '#FDE8DA',
          cardbg: 'rgba(255, 253, 249, 0.88)',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
