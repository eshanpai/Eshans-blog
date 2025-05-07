import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eshan Pai',
  tagline: 'Building the Future of Payments',
  favicon: 'img/eshan.jpg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/eshan.jpg',
      navbar: {
        title: 'Eshan Pai',
        logo: {
          alt: 'Logo',
          src: 'img/eshan.jpg',
        },
        items: [
          {
            position: 'left',
            label: 'Book Reviews',
            href: '/docs/category/book-reviews'
          },
          {
            position: 'left',
            label: 'Company Analysis',
            href: '/docs/category/company-analysis'
          },
          {
            position: 'left',
            label: "Founder's Diaries",
            href: '/docs/category/founders-diaries'
          },
          {
            position: 'left',
            label: 'Startup Snapshots',
            href: '/docs/category/startup-snapshots'
          },
          {
            position: 'left',
            label: 'The Daily Yarn',
            href: '/docs/category/the-daily-yarn'
          },
          {
            position: 'left',
            label: 'The Money Yarn',
            href: '/docs/category/the-money-yarn'
          },
          {
            position: 'left',
            label: 'About',
            href: '/about'
          },
          {
            href: 'https://www.linkedin.com/in/eshan-pai/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Eshan Pai, built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
