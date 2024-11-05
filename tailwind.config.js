/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#fc3c44',
        textMuted: '#9ca3af',
        maximumTrackTintColor: 'rgba(255,255,255,0.4)',
        minimumTrackTintColor: 'rgba(255,255,255,0.6)',
      },
    },
  },

  plugins: [],
};
