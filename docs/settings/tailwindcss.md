---
id: TailwindCSS
---

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html,
  body {
    @apply min-h-screen;
  }
  input,
  select,
  textarea {
    @apply border border-gray-500;
  }
  button {
    @apply outline-none hover:brightness-105 focus:outline-none active:brightness-95;
  }
}

@layer components {
  .break-keep {
    word-break: keep-all;
  }
  .required {
    @apply after:text-red-500 after:content-['*'];
  }
}
```

```bash npm2yarn
npm install @types/tailwindcss prettier-plugin-tailwindcss --dev
```

```javascript title="tailwind.config.js"
const plugin = require('tailwindcss/plugin')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  ...{},
  plugins: [
    require('prettier-plugin-tailwindcss'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.break-keep': {
          wordBreak: 'keep-all'
        }
      })
    })
  ]
}
```
