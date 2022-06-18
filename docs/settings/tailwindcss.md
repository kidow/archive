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
    @apply border border-neutral-500;
  }
  button {
    @apply outline-none hover:brightness-105 focus:outline-none active:brightness-95;
  }
}

@layer components {
  .required {
    @apply after:text-red-500 after:content-['*'];
  }
}
```

```bash npm2yarn
npm install prettier-plugin-tailwindcss --dev
```

```javascript title="tailwind.config.js"
const plugin = require('tailwindcss/plugin')

/** @type {import("tailwindcss").Config } */
module.exports = {
  ...,
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
