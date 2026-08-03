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

    {
        text: '📋 开源项目',
        items: [
            { text: '🅱️ 博客', link: 'https://github.com/cunyu1943/blog' },
            { text: '☕️ JavaPark', link: 'https://github.com/cunyu1943/JavaPark' },
            { text: '📰 好物周刊', link: 'https://github.com/cunyu1943/weekly' },
            { text: '💾 MySQL 学习指南', link: 'https://github.com/cunyu1943/mysql-tutorial' },
            { text: '🐍 Python 学习指南', link: 'https://github.com/cunyu1943/python-tutorial' },
            { text: '🖥️ 计算机学习指南', link: 'https://github.com/cunyu1943/cs-guide' },
            { text: '🍃 Spring Boot Demos', link: 'https://github.com/cunyu1943/spring-boot-demos' },

        ]
    },
]