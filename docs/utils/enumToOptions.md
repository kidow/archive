# enumToOptions

`enum` 타입으로 선언한 변수를 `Select`나 `Radio` 컴포넌트에서 목록으로 뿌릴 수 있도록 배열로 변경하는 함수입니다.

```typescript title="services/utils/index.ts"
export const enumToOptions = (enumObj: any) =>
  Object.entries<string>(enumObj).map(([value, name]) => ({ value, name }))
```

## 예시

```tsx title="pages/index.tsx"
import { Fragment } from 'react'
import { enumToOptions } from 'services'

enum ProgrammingLanguage {
  'Javascript' = '자바스크립트',
  'Typescript' = '타입스크립트',
  'Python' = '파이썬',
  'Node.js' = '노드js'
}

const Page = () => {
  return (
    <div>
      {/* Select */}
      <select>
        <option value="">전체</option>
        {enumToOptions(ProgrammingLanguage).map((option, key) => (
          <option key={key} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>

      {/* Radio */}
      {enumToOptions(ProgrammingLanguage).map((option, key) => (
        <label key={key}>
          <input type="radio" name={option.name} value={option.value} />
        </label>
      ))}
    </div>
  )
}
```
