# fileToBase64

`File` 타입의 변수를 base64 형식의 `string` 타입으로 변환하는 함수입니다.

```typescript title="services/utiles/index.ts"
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (err) => reject(err)
  })
}
```
