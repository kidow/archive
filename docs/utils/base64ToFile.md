# base64ToFile

base64 형식의 `string` 타입 변수를 `File`로 변환하는 함수입니다.

```typescript title="services/utils/index.ts"
export const base64ToFile = (base64: string) => {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)

  while (n--) u8arr[n] = bstr.charCodeAt(n)
  return new File([u8arr], new Date().getTime().toString(), { type: mime })
}
```
