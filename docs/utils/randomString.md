# randomString

10~11자리의 랜덤 난수를 생성하는 함수입니다.

```typescript title="services/utils/index.ts"
export const randomString = () => Math.random().toString(36).slice(2)
```
