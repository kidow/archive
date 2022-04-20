/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#25C19F'
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')],
  corePlugins: {
    preflight: false
  }
}
