import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '🏠 首页', link: '/' },
    { text: ' 我的主页', link: 'https://cunyu1943.github.io' },

    {
        text: '🗺️ 学习路线',
        items: [
            { text: '1️⃣ 数据结构与算法', link: '/algo' },
            { text: '2️⃣ 组成原理', link: '/architecture' },
            { text: '3️⃣ 计算机网络', link: '/network' },
            { text: '4️⃣ 操作系统', link: '/system' },
        ]
    },
]