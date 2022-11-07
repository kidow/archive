import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import Logo from '@site/src/components/Logo'

export default function Home(): JSX.Element {
  return (
    <Layout description="웹 개발자 Kidow의 코드 보관소입니다.">
      <main className="pb-20 text-center">
        <div className="flex justify-center py-10">
          <img src="/img/main.png" alt="" className="w-1/2" />
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Logo className="h-8 sm:h-10" />
          </div>
          <h1 className="mt-4 mb-7 text-lg sm:text-2xl">
            웹 프론트엔드 개발자 Kidow의 코드 보관소입니다.
          </h1>
          <div>
            <Link
              className="rounded bg-white px-6 py-3 text-lg font-semibold text-black"
              to="/docs"
            >
              둘러보기
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}
