## Code

```typescript title="services/hooks/index.tsx"
import { useRef, useState, useEffect } from 'react'
import type { RefObject } from 'react'

export function useIntersectionObserver<T extends HTMLElement>(): [
  RefObject<T>,
  boolean
] {
  const ref = useRef<T>(null)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setEntry(entry))
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref.current])

  return [ref, entry?.isIntersecting || false]
}
```
