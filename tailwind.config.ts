/** @type {import('tailwindcss').Config} */
import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003f5c',
        secondary: '#2f4b7c',
        accent: '#ffa600',
        light: '#f8f9fa',
        dark: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
export default config
