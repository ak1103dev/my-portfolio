/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-text-light': '#1A1A1A',
        'background-light': '#FFFFFF',
        'accent-light': '#1F3A8A',
        
        'primary-text-dark': '#F7F7F7',
        'background-dark': '#121212',
        'charcoal': '#121212',
        'accent-dark': '#4A85E7',

        // Accent color for selection, etc.
        'accent': 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
