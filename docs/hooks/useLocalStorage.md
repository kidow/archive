# useLocalStorage

```typescript
type LocalStorageItems = 'item1' | 'item2'

const useLocalStorage = (key:
) => {
  const item = window.localStorage.getItem(key)
  const setItem = (value: string) => window.localStorage.setItem(value)
}
```
