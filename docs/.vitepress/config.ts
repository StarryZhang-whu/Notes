import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Starry Zhang Notes",
  description: "A Website for storing Starry Zhang notes, powered by VitePress.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/first' }
    ],

    sidebar: [
      {
        text: 'Notes',
        items: [
          { text: 'First Note', link: '/first' },
          { text: 'Pytorch工程的一般结构', link: '/pytorch' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarryZhang-whu' }
    ]
  }
})
