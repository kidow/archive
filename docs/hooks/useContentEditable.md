# useContentEditable

[`contentEditable`](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/contenteditable) 를 사용할 때 React에서 상태 관리를 위해 사용합니다.

## Code

```typescript title="services/hooks/index.tsx"
import { useRef, useState, useEffect } from 'react'

export const useContentEditable = (initialValue: string = '') => {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState<string>(initialValue)

  const onInput = (e: ChangeEvent<HTMLDivElement>) =>
    setValue(e.target.innerText)

  const setContent = (content: string) => {
    if (!ref.current) return
    ref.current.innerText = content
    setValue(content)
  }

  useEffect(() => {
    if (initialValue) setContent(initialValue)
  }, [])

  return { content: value, setContent, onInput, ref }
}
```

## Usage

```typescript
const Page = () => {
  const { content, setContent, onInput, ref } =
    useContentEditable('[initial Value]')

  return <div contentEditable onInput={onInput} ref={ref}></div>
}
```

## References

[React에서 contentEditable 사용하기](https://yung-developer.tistory.com/109)
