// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kidow Archive',
  url: 'https://archive.kidow.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kidow', // Usually your GitHub org/user name.
  projectName: 'archive', // Usually your repo name.
  plugins: ['docusaurus-tailwindcss'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
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
                to: '/docs/intro'
              },
              {
                label: 'Hooks',
                to: '/docs/intro'
              },
              {
                label: 'Utils',
                to: '/docs/intro'
              },
              {
                label: 'Projects',
                to: '/docs/intro'
              },
              {
                label: 'Settings',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Statistics',
                href: 'https://kidow.me'
              },
              {
                label: 'Blog',
                href: 'https://blog.kidow.me'
              },
              {
                label: 'Resume',
                href: 'https://resume.kidow.me'
              },
              {
                label: 'Memo',
                href: 'https://memo.kidow.me'
              },
              {
                label: 'Admin',
                href: 'https://admin.kidow.me'
              },
              {
                label: 'Components',
                href: 'https://components.kidow.me'
              },
              {
                label: 'Archive',
                href: 'https://archive.kidow.me'
              },
              {
                label: 'Portal',
                href: 'https://portal.kidow.me'
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
      }
    })
}

module.exports = config
