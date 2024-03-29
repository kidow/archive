# Code Snippets

```json title="typescriptreact"
{
  "console.log": {
    "prefix": "clg",
    "body": ["console.log('$1', $1)$2"],
    "description": "console.log"
  },
  "react component": {
    "prefix": "component",
    "body": [
      "import type { FC } from 'react'",
      "",
      "export interface Props {",
      "",
      "}",
      "interface State {}",
      "",
      "const $1: FC<Props> = () => {",
      "  return <>$1</>",
      "} ",
      "",
      "export default $1"
    ],
    "description": "react tsx"
  },
  "page generator": {
    "prefix": "page",
    "body": [
      "interface State {}",
      "",
      "const $1Page = () => {",
      "  return <>$1Page</>",
      "}",
      "",
      "export default $1Page"
    ],
    "description": "page generator"
  },
  "useObjectState hooks": {
    "prefix": "state",
    "body": ["const [{}, setState] = useObjectState<State>({ $1 })"],
    "description": "useObjectState hooks"
  },
  "export default": {
    "prefix": "exp",
    "body": ["export { default as $1 } from './$1'"],
    "description": "export default as from"
  },
  "next page generator": {
    "prefix": "nextpage",
    "body": [
      "import type { NextPage } from 'next'",
      "",
      "interface State {}",
      "",
      "const $1Page: NextPage = () => {",
      " return <>$1Page</>",
      "}",
      "",
      "export default $1Page"
    ],
    "description": "next page generator"
  }
}
```

```json title="nextjs api"
"nextjs api": {
  "prefix": "nextapi",
  "body": [
    "import type { NextApiRequest, NextApiResponse } from 'next'",
    "",
    "export default function (req: NextApiRequest, res: NextApiResponse) {}"
  ],
  "description": "nextjs api"
}
```
