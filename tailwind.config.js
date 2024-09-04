/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px',

    },
    extend: {
      colors: {
        customTeal: '#02C9AF',
        customBlue: '#049CE4',
        customPink: '#FE00EC',
        customNavy: '#2B4F8D',
        customDarkBlue: '#011034',
      },
    },
  },
  plugins: [],
}