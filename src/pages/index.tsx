import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className="hero hero--primary">
        <div className="container mx-auto">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle text-2xl">{siteConfig.tagline}</p>
          <div className="">
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              둘러보기
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  )
}
