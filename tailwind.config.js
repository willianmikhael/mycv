/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal': '#FCFCFC',
        'fball': '#F6F6F6',
      },
      fontFamily: {
        Merriweather : ['Merriweather', 'serif'],
        Roboto : ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

