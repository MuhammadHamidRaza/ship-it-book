import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  book: [
    {
      type: 'category',
      label: '📖 Introduction: The Builder Reality Check',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'introduction/index'},
      items: [
        'introduction/chapter-i-1-why-most-developers-never-build',
        'introduction/chapter-i-2-coding-is-not-product-building',
        'introduction/chapter-i-3-the-product-gap',
        'introduction/chapter-i-4-the-startup-myth',
        'introduction/chapter-i-5-how-this-book-changes-everything',
      ],
    },
    {
      type: 'category',
      label: '🧠 Part 1 — The Builder Mindset',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'part-1-builder-mindset/index'},
      items: [
        'part-1-builder-mindset/chapter-1-1-why-developers-dont-ship',
        'part-1-builder-mindset/chapter-1-2-builder-vs-executor-trap',
      ],
    },
    {
      type: 'category',
      label: '🔍 Part 2 — Find and Validate the Problem',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'part-2-find-the-problem/index'},
      items: [
        'part-2-find-the-problem/chapter-2-1-finding-your-identity',
        'part-2-find-the-problem/chapter-2-2-reading-markets',
        'part-2-find-the-problem/chapter-2-3-problem-first-thinking',
      ],
    },
    {
      type: 'category',
      label: '🏗️ Part 3 — Design the Solution',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'part-3-design-the-solution/index'},
      items: [
        'part-3-design-the-solution/chapter-3-1-system-thinking',
        'part-3-design-the-solution/chapter-3-2-designing-before-you-code',
      ],
    },
    {
      type: 'category',
      label: '⚒️ Part 4 — Build It',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'part-4-build-it/index'},
      items: [
        'part-4-build-it/chapter-4-1-mvp-mindset',
        'part-4-build-it/chapter-4-2-stack-decisions',
        'part-4-build-it/chapter-4-3-debugging-as-thinking',
      ],
    },
    {
      type: 'category',
      label: '🚀 Part 5 — Deploy and Show',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'part-5-deploy-and-show/index'},
      items: [
        'part-5-deploy-and-show/chapter-5-1-shipping-first-version',
        'part-5-deploy-and-show/chapter-5-2-getting-first-user',
        'part-5-deploy-and-show/chapter-5-3-launch-channels',
      ],
    },
    {
      type: 'category',
      label: '🔄 Part 6 — Listen and Iterate',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'part-6-listen-and-iterate/index'},
      items: [
        'part-6-listen-and-iterate/chapter-6-1-collecting-feedback',
        'part-6-listen-and-iterate/chapter-6-2-pivot-vs-stay',
        'part-6-listen-and-iterate/chapter-6-3-iterating-without-breaking',
      ],
    },
    {
      type: 'category',
      label: '🌍 Part 7 — Build in Public',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'part-7-build-in-public/index'},
      items: [
        'part-7-build-in-public/chapter-7-1-building-in-public',
        'part-7-build-in-public/chapter-7-2-twitter-linkedin-strategy',
        'part-7-build-in-public/chapter-7-3-finding-your-community',
        'part-7-build-in-public/chapter-7-4-the-long-game',
      ],
    },
  ],
};

export default sidebars;
