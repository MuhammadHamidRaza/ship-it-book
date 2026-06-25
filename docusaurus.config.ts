import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ship It',
  tagline: 'By Muhammad Hamid Raza — From First Idea to First User, No MBA Required.',
  favicon: 'img/logo.svg',

  url: 'https://MuhammadHamidRaza.github.io',
  baseUrl: '/ship-it-book/',

  organizationName: 'MuhammadHamidRaza',
  projectName: 'ship-it-book',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/premium-theme.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/og-image.png',
    navbar: {
      title: 'Ship It',
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'book',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/MuhammadHamidRaza/ship-it-book',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    metadata: [
      {name: 'author', content: 'Muhammad Hamid Raza'},
      {name: 'description', content: 'From first idea to first user — no MBA required. A free, open-source book for self-taught developers building products and startups.'},
    ],
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Parts',
          items: [
            {label: 'Introduction', to: '/introduction/'},
            {label: 'Part 1: The Builder Mindset', to: '/part-1-builder-mindset/'},
            {label: 'Part 2: Find & Validate the Problem', to: '/part-2-find-the-problem/'},
            {label: 'Part 3: Design the Solution', to: '/part-3-design-the-solution/'},
          ],
        },
        {
          title: 'More Parts',
          items: [
            {label: 'Part 4: Build It', to: '/part-4-build-it/'},
            {label: 'Part 5: Deploy & Show', to: '/part-5-deploy-and-show/'},
            {label: 'Part 6: Listen & Iterate', to: '/part-6-listen-and-iterate/'},
            {label: 'Part 7: Build in Public', to: '/part-7-build-in-public/'},
          ],
        },
        {
          title: 'About',
          items: [
            {label: 'Author', to: '/#author'},
            {label: 'GitHub', href: 'https://github.com/MuhammadHamidRaza'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Muhammad Hamid Raza. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'javascript', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
