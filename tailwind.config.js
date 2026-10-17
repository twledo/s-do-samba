/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
    theme: {
      extend: {
        colors: { ink: '#0E100D', ink2: '#161A14', card: '#1C2119', soft: '#B9C2B0', muted: '#7E8977', lime: '#A6E22E', teal: '#2EE6B8', paper: '#F2F4EC' },
        fontFamily: { display: ['Oswald', 'Arial', 'sans-serif'], sans: ['DM Sans', 'Arial', 'sans-serif'] }
      }
    }
}

