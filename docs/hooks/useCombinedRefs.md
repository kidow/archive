# useCombinedRefs

`forwardRef` 를 이용해 컴포넌트를 생성했을 때, 부모의 ref와 자식의 ref를 묶어주는 기능입니다.

```typescript title="services/hook/index.tsx"
import { useRef, useEffect } from 'react'
import type { RefObject, ForwardedRef } from 'react'

export function useCombinedRefs<T>(
  ...refs: (RefObject<T> | ForwardedRef<T>)[]
): RefObject<T> {
  const targetRef = useRef<T>(null)

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') ref(targetRef.current)
      // @ts-ignore
      else ref.current = targetRef.current
    })
  }, [refs])

  return targetRef
}
```

## References

[https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd](https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd)
