지정한 영역의 바깥 영역을 클릭할 시 함수를 실행할 수 있도록 하는 hooks입니다.

```typescript title="services/hooks/index.tsx"
import type { RefObject } from 'react'

export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  id?: string
): void {
  const listener = (event: MouseEvent | TouchEvent) => {
    const el = ref?.current
    if (
      !el ||
      el.contains(event.target as Node) ||
      id === (event.target as HTMLElement).id
    )
      return
    handler(event)
  }
  useEffect(() => {
    document.addEventListener('mouseup', listener)
    return () => {
      document.removeEventListener('mouseup', listener)
    }
  }, [ref, handler])
}
```

## Usage

### Dropdown

```tsx
import { useRef, useMemo, useId } from 'react'
import type { FC } from 'react'
import { useObjectState, useOnClickOutside } from 'services'
import { createPortal } from 'react-dom'

interface Props {
  list: string[]
  onClick: (index: number) => void
  label?: string
}
interface State {
  isOpen: boolean
}

const Dropdown: FC<Props> = ({ label = 'Dropdown', list, onClick }) => {
  const [{ isOpen }, setState] = useObjectState<State>({
    isOpen: false
  })
  const ref = useRef<HTMLButtonElement>(null)
  const targetRef = useRef<HTMLUListElement>(null)
  const id = useId()

  // highlight-start
  useOnClickOutside(targetRef, () => setState({ isOpen: false }), id)
  // highlight-end
  return (
    <>
      <button
        onClick={() => setState({ isOpen: !isOpen })}
        id={id}
        ref={ref}
        className="inline-flex items-center rounded-md px-4 py-2 text-sm text-gray-700 after:ml-2 after:block after:h-1.5 after:w-1.5 after:rotate-45 after:border-b after:border-r after:border-gray-700 after:bg-transparent after:content-[''] hover:bg-gray-50"
      >
        {label}
      </button>
      {isOpen &&
        createPortal(
          <div
            style={{
              left: `${ref.current?.getBoundingClientRect().left || 0}px`,
              top: `${
                window.scrollY +
                (ref.current?.getBoundingClientRect().top || 0) +
                40
              }px`,
              position: 'absolute',
              zIndex: '9999',
              minWidth: `${ref.current?.getBoundingClientRect().width || 0}px`
            }}
          >
            <ul
              className="z-10 rounded-md bg-gray-50 p-1 text-gray-700 shadow-xl"
              role="menu"
              tabIndex={0}
              ref={targetRef}
            >
              {list.map((item, key) => (
                <li
                  className="cursor-pointer rounded-md p-2 hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  key={key}
                  onClick={() => {
                    onClick(key)
                    setState({ isOpen: false })
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </>
  )
}

export default Dropdown
```

## References

[https://usehooks-ts.com/react-hook/use-on-click-outside](https://usehooks-ts.com/react-hook/use-on-click-outside)
