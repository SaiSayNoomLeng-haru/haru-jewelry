/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-accent' : '#bfdbfe',
        'custom-white': '#f8f2f2',
        'custom-gray': '#f2f2f2',
        'custom-dark-green' : '#15575a',
        'custom-dark-blue': '#0f8fe5',
        'custom-dark-orange': '#eb8f09',
        'custom-pale-red': '#802626',
        'custom-pale-green': '#15ad99'
      },
      fontFamily: {
        'main' : [ "Lato", 'sans-serif'],
        'accent' : ["Italiana", 'sans-serif']
      },
      fontSize: {
        'fs-900': '6rem',
        'fs-800': '4.5rem',
        'fs-700' : '2.75rem',
        'fs-600' : '2.125rem',
        'fs-500' : '1.5rem',
        'fs-400': '1.2rem',
        'fs-300': '1rem',
        'fs-200': '0.575rem'
      },
      screens: {
        'md' : '35em',
        'lg' : '45em'
      },
      animation: {
        'rotate' : 'rotate 300ms ease-in-out 1',
        'rotateReverse' : 'rotateReverse 300ms ease-in-out 1',
        'inputError' : 'shake 100ms linear 5'
      },
      keyframes: {
        rotate : {
          '0%' : { transform: 'rotate(0deg)'},
          '100%' : { transform: 'rotate(180deg)'}
        },
        rotateReverse : {
          '0%' : { transform: 'rotate(180deg)'},
          '100%' : { transform: 'rotate(0)'}
        },
        shake: {
          '0%, 100%' : { transform: 'translateX(0)'},
          '20%, 60%' : { transform: 'translateX(-3px)'},
          '40%, 80%' : { transform: 'translateX(3px)'}
        }
        
      }
    },
  },
  plugins: [],
}

