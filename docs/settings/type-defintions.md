# Type Definitions

### process.env 에 추가된 변수에 타입을 지정할 때

```typescript title="types/global.d.ts"
declare namespace NodeJS {
  interface Process {
    env: ProcessEnv
  }
  interface ProcessEnv {
    NODE_ENV: string
  }
}
```

### window, document 객체에 변수 타입을 지정할 때

```typescript title="types/global.d.ts"
export {}
declare global {
  // window 객체 변수 타입 추가
  interface Window {}
  // document 객체 변수 타입 추가
  interface Document {}
}
```
