## Prerequisite

- [`EventListener`](/docs/utils/EventListener) util

```typescript title="services/hooks/index.tsx"
export const useBackdrop = () => (open: boolean) =>
  EventListener.emit('backdrop', { detail: { open } })
```
