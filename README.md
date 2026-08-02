# 计算机学习指南

> 一份系统化的计算机基础学习指南，涵盖数据结构与算法、组成原理、计算机网络、操作系统四大核心模块，致力于帮助读者构建扎实的计算机知识体系。

## 一、项目简介

「计算机学习指南」是一份面向计算机初学者与进阶学习者的开源学习资料，内容涵盖计算机科学的核心基础模块。本指南通过系统化的知识梳理与通俗易懂的讲解，帮助读者从零开始掌握计算机基础知识，构建完整的知识体系。

无论是应对校招面试、考研复习，还是日常工作中的知识巩固，都可以在这里找到你需要的内容。

## 二、内容模块

### 2.1 数据结构与算法

数据结构与算法是程序设计的基石，也是面试中的高频考点。本模块从基础概念入手，逐步深入到常用数据结构与经典算法的原理和实现。

- 数据结构简介
- 数组详解
- 数组的增删改查
- 有序数组去重
- 算法简介
- 时间 & 空间复杂度
- 链表解惑
- 二叉树的遍历

### 2.2 组成原理

计算机组成原理是理解计算机底层工作原理的关键，本模块将系统讲解计算机硬件系统的组成与工作机制。

> 🚧 内容筹备中，敬请期待。

### 2.3 计算机网络

计算机网络是现代互联网的基础，本模块将从体系结构出发，深入讲解各层协议的原理与应用。

> 🚧 内容筹备中，敬请期待。

### 2.4 操作系统

操作系统是计算机系统的核心，本模块将覆盖进程管理、内存管理、文件系统、I/O 管理等核心知识。

> 🚧 内容筹备中，敬请期待。

## 三、在线阅读

本项目已通过 GitHub Actions 自动部署至 GitHub Pages，支持在线阅读：

- 在线地址：[计算机学习指南](https://cunyu1943.github.io/cs-guide)

## 四、本地运行

本项目基于 [Node.js](https://nodejs.org/) 与 [pnpm](https://pnpm.io/) 进行管理，运行前请确保本地已安装对应环境。

### 4.1 环境要求

- Node.js >= 18
- pnpm >= 8

### 4.2 快速启动

```bash
# 克隆项目
git clone https://github.com/cunyu1943/cs-guide.git

# 进入项目目录
cd cs-guide

# 安装依赖
pnpm install

# 启动本地开发服务器
pnpm docs:dev
```

启动成功后，在浏览器中访问 `http://localhost:5173` 即可阅读。

### 4.3 构建部署

```bash
# 构建生产版本
pnpm docs:build

# 本地预览构建产物
pnpm docs:preview
```

## 五、项目结构

```text
cs-guide/
├── docs/                      # 文档源码目录
│   ├── .vitepress/            # VitePress 配置目录
│   │   ├── configs/           # 导航与侧边栏配置
│   │   ├── theme/             # 主题与组件
│   │   └── config.mts         # VitePress 主配置
│   ├── src/                   # 文档内容
│   │   ├── algo/              # 数据结构与算法
│   │   ├── architecture/      # 组成原理
│   │   ├── network/           # 计算机网络
│   │   ├── system/            # 操作系统
│   │   ├── guide.md           # 学习指引
│   │   └── index.md           # 首页配置
│   └── public/                # 静态资源
├── .github/                   # GitHub 工作流配置
├── package.json               # 项目依赖与脚本
└── README.md                  # 项目说明文档
```

## 六、参与贡献

欢迎对内容进行补充和修正！你可以通过以下方式参与贡献：

1. Fork 本仓库
2. 创建新分支：`git checkout -b feature/your-feature`
3. 提交修改：`git commit -m 'feat: add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

在提交前，请确保内容准确、排版规范，并尽量遵循现有文档风格。

## 七、关注交流

如果你想获取更多计算机学习资源、技术分享与好物推荐，可以关注以下项目：

- [村雨遥の博客](https://github.com/cunyu1943/blog)：每日更新，分享每日见闻 & 免费资源。
- [JavaPark](https://github.com/cunyu1943/JavaPark)：Java 学习保姆级教程、计算机基础、数据库、实战实践。
- [好物周刊](https://github.com/cunyu1943/weekly)：每周五发布，记录每周看到的有价值的信息。
- [Python 学习指南](https://github.com/cunyu1943/python-tutorial)：从零开始掌握 Python 编程。
- [MySQL 学习指南](https://github.com/cunyu1943/mysql-tutorial)：从基础概念到 SQL 实战的系统化学习路径。

## 八、许可证

本项目基于 [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE) 协议开源，转载请注明出处。
