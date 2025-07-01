/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'instagram-yellow': '#FEDA77',
        'instagram-pink': '#DD2A7B',
        'instagram-purple': '#8134AF',
        'instagram-blue': '#515BD4',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.theme-base': {
          'background-color': 'white',
          'color': '#1F2937',
          '@media (prefers-color-scheme: dark)': {
            '&.dark, .dark &': {
              'background-color': '#111827',
              'color': 'white',
            },
          },
        },
      });
    },
  ],
};