`lodash`의 `debounce`를 직접 구현한 함수입니다.

```typescript title="services/utils/index.ts"
export function debounce(func: Function, wait: number) {
  let timeout: string | number | NodeJS.Timeout | undefined
  return function (...args: any) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
```
