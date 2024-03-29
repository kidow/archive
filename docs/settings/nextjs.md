# Next.js

```tsx title="pages/_app.tsx"
import 'styles/globals.css'
import App from 'next/app'
import { ErrorInfo } from 'react'

interface Props {}
interface State {
  hasError: boolean
}

class MyApp extends App<Props, {}, State> {
  state = {
    hasError: false
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error) this.setState({ hasError: true })
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    const {} = this.state
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
```

```tsx title="pages/_document.tsx"
import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'
import { Children } from 'react'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: Children.toArray(initialProps.styles)
    }
  }
  render() {
    return (
      <Html lang="ko" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000" />
          <meta name="robots" content="index, follow" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />
          <meta name="msapplication-TileColor" content="#000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

```tsx title="pages/_error.tsx"
import type { NextPageContext } from 'next'
import type { FC } from 'react'

interface Props {
  statusCode: number
}
interface State {}

const ErrorPage: FC<Props> = ({ statusCode }) => {
  return <>Not Found</>
}

// @ts-ignore
ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
```
