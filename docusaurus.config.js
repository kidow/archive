// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const title = 'Archive - Kidow'
const description = '웹 개발자 Kidow의 코드 보관소입니다.'
const image = 'https://opengraph.kidow.me/api?id=tcxxhfzaa19'
const url = 'https://archive.kidow.me'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  url,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kidow', // Usually your GitHub org/user name.
  projectName: 'archive', // Usually your repo name.
  plugins: [
    'docusaurus-tailwindcss',
    [require.resolve('docusaurus-gtm-plugin'), { id: 'GTM-TFHQLMX' }]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]
          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Archive'
          },
          {
            href: 'https://github.com/kidow/archive',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Archive',
            items: [
              {
                label: 'Components',
                to: '/docs/components/Alert'
              },
              {
                label: 'Hooks',
                to: '/docs/hooks/useComponentDidUpdate'
              },
              {
                label: 'Utils',
                to: '/docs/utils/base64ToFile'
              },
              {
                label: 'Settings',
                to: '/docs/settings/Chrome Extensions'
              }
            ]
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Analytics',
                href: 'https://kidow.me'
              },
              {
                label: 'Admin',
                href: 'https://admin.kidow.me'
              },
              {
                label: 'Archive',
                href: 'https://archive.kidow.me'
              },
              {
                label: 'Blog',
                href: 'https://blog.kidow.me'
              },
              {
                label: 'Components',
                href: 'https://components.kidow.me'
              },
              {
                label: 'Log',
                href: 'https://log.kidow.me'
              },
              {
                label: 'Memo',
                href: 'https://memo.kidow.me'
              },
              {
                label: 'Menu',
                href: 'https://menu.kidow.me'
              },
              {
                label: 'Opengraph',
                href: 'https://opengraph.kidow.me'
              },
              {
                label: 'Portal',
                href: 'https://portal.kidow.me'
              },
              {
                label: 'Resume',
                href: 'https://resume.kidow.me'
              },
              {
                label: 'Status',
                href: 'https://status.kidow.me'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.kidow.me'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kidow'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Archive. Built with Kidow.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark'
      },
      metadata: [
        { name: 'robots', content: 'index, follow' },
        {
          name: 'keywords',
          content:
            'docusaurus, code-archive, javascript, react, tailwindcss, typescript, vercel'
        },
        { name: 'author', content: '김동욱' },
        { name: 'theme-color', content: '#25C19F' },

        {
          name: 'google-site-verification',
          content: 'U7XAUSLj4fvIltyYzYb9tzcOis4tnpM570JZSvSyrFg'
        },
        {
          name: 'naver-site-verification',
          content: 'a1d88c86801e2d91cdbdbcd4f784d39897cd2c2b'
        },

        { name: 'og:title', content: title },
        {
          name: 'og:description',
          content: description
        },
        { name: 'og:url', content: 'https://archive.kidow.me' },
        {
          name: 'og:image',
          content: image
        },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '600' },
        { name: 'og:locale', content: 'ko_KR' },
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: "Web developer Kidow's Code Archive" },

        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { name: 'twitter:domain', content: url },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    })
}

module.exports = config
