/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    boxShadow: {
      sm: 'box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05)'
    },

    fontSize: {
      lg: ['25px', {lineHeight: '20px'}],
      md: ['16px', {lineHeight: '24px'}],
      sm: ['14px', {lineHeight: '20px'}]
    },

    extend: {
      colors: {
        'off-white': '#F6F6F6',
        primary: '#7F56D9',
        secondary: '#F9F5FF',
        'primary-ring': '#D6BBFB',
        lightgray: '#D0D5DD',
        'dark-black': '#344054',
        'light-black': '#667085',
      },
    },
  },
  plugins: [],
}

