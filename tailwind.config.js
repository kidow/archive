const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#25C19F',
        emerald: colors.green,
        amber: colors.yellow,
        violet: colors.purple,
        sky: {
          100: '#e0f2fe',
          600: '#0284c7'
        },
        rose: {
          600: '#e11d48'
        }
      }
    }
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.break-keep': {
          wordBreak: 'keep-all'
        },
        '.arrange': {
          width: '100%',
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: theme('spacing.2'),
          alignItems: 'flex-start'
        }
      })
    })
  ],
  corePlugins: {
    preflight: false
  }
}
