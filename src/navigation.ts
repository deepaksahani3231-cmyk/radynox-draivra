import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Join our mission',
          href: getPermalink('/join-mission'),
        },
        {
          text: 'Draivra Discovery Program',
          href: getPermalink('/draivra-discovery'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: getPermalink('/#features'),
    },
  ],
  actions: [{ text: 'Get support', href: getPermalink('/contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Security', href: getPermalink('/privacy') },
        { text: 'Team', href: getPermalink('/about') },
        { text: 'Enterprise', href: getPermalink('/services') },
        { text: 'Customer stories', href: getPermalink('/social-impact') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Resources', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: getPermalink('/services') },
        { text: 'Partners', href: getPermalink('/join-mission') },
        { text: 'Atom', href: getPermalink('/about') },
        { text: 'Electron', href: getPermalink('/careers') },
        { text: 'Radynox-Draivra Dashboard', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: getPermalink('/services') },
        { text: 'Community Forum', href: getBlogPermalink() },
        { text: 'Professional Services', href: getPermalink('/services') },
        { text: 'Skills', href: getPermalink('/about') },
        { text: 'Status', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Press', href: getPermalink('/about') },
        { text: 'Inclusion', href: getPermalink('/inclusion') },
        { text: 'Social Impact', href: getPermalink('/social-impact') },
        { text: 'Shop', href: getPermalink('/shop') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/radynoxdraivra' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/deepak-sahani-2911b9380/',
    },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/radynoxdraivra' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/radynoxdraivra' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made by <span class="font-semibold">Radynox-Draivra</span> · All rights reserved.
  `,
};
