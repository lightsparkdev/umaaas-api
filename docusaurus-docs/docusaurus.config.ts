import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UMA as a Service (UMAaaS)',
  tagline: 'Docs and Guides for the UMAaaS API',
  favicon: 'img/favicon.ico',

  url: 'https://lightsparkdev.github.io/',
  organizationName: 'lightsparkdev', // Usually your GitHub org/user name.
  projectName: 'umaaas-api', // Usually your repo name.
  baseUrl: '/umaaas-api/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lightsparkdev/umaaas-api/tree/main/docusaurus-docs/',
        },
        blog: false, // Disable the blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'umaaas-api',
            spec: 'static/api/openapi.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#000000',
        },
      } satisfies Redocusaurus.PresetOptions,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'UMAaaS API',
      logo: {
        alt: 'UMAaaS Logo',
        src: 'img/uma.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          to: '/api',
          label: 'API Reference',
          position: 'left',
        },
        // {
        //   type: 'html',
        //   position: 'right',
        //   value: '<span class="badge badge--danger">Work in progress alpha! Not for production use.</span>',
        // },
        {
          href: 'https://github.com/lightsparkdev/umaaas-api',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Lightspark Group`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
