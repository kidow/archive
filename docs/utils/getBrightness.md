# getBrightness

rgb color의 밝기 값을 구할 수 있습니다.

```typescript title="services/utils/index.ts"
export const getBrightness = (red: number, green: number, blue: number) => {
  return (red * 299 + green * 587 + blue * 114) / 1000
}

// + 추가
export const isDark = (red: number, green: number, blue: number) => {
  return getBrightness(red, green, blue) < 128
}

export const isLight = (red: number, green: number, blue: number) => {
  return getBrightness(red, green, blue) >= 128
}
```

## References

- [http://www.w3.org/TR/AERT#color-contrast](http://www.w3.org/TR/AERT#color-contrast)
- [tinycolor2](https://www.npmjs.com/package/tinycolor2)
