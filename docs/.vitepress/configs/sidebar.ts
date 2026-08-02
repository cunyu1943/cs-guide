import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/': [
        { text: '学习指引', link: '/guide', },

        {
            text: '数据结构与算法',
            collapsed: true,
            items: [
                { text: '数据结构简介', link: '/algo/20220503-datastructure-intro' },
                { text: '数组详解', link: '/algo/20220516-array' },
                { text: '数组的增删改查', link: '/algo/20200510-arr-crud' },
                { text: '有序数组去重', link: '/algo/20220513-sorted-arr-duplication' },
                { text: '算法简介', link: '/algo/20220511-algo-intro' },
                { text: '时间&空间复杂度', link: '/algo/20220512-time-space' },
                { text: '链表结果', link: '/algo/20220515-linkedlist' },
                { text: '二叉树的遍历', link: '/algo/20220517-binary-tree-traverse' },
            

            ]
        },

        {
            text: '组成原理',
            collapsed: true,
            items: [
                

            ]
        },

        {
            text: '计算机网络',
            collapsed: true,
            items: [
                

            ]
        },

        {
            text: '操作系统',
            collapsed: true,
            items: [
                

            ]
        },
    ],
}