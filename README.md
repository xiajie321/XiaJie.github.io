# Pixel Blog - 像素风格静态博客

这是一个基于 Vue 3 + Vite 的像素风格静态博客系统。它专为 GitHub Pages 部署设计，支持高度自定义和自动化内容生成。

## ✨ 特性

*   **像素艺术风格**：复古游戏风格的 UI 设计，包含像素字体、边框和动画。
*   **深色模式支持**：内置日间/夜间模式切换，自动记忆用户偏好，精心调试的深色配色方案。
*   **独特的交互体验**：
    *   **挤压弹跳动画**：生动的标题交互动画。
    *   **点击粒子特效**：全局点击触发多彩像素粒子爆炸效果。
    *   **Link 光标**：自定义塞尔达传说 Link 像素光标，点击时有交互反馈。
    *   **游戏化加载**：独特的马里奥风格加载动画，以及“点击开始”互动覆盖层，解决浏览器自动播放限制。
    *   **智能目录 (TOC)**：文章详情页右侧自动生成目录，支持随页面滚动高亮当前章节，提供平滑跳转体验。
*   **全中文界面**：默认界面文本已完全汉化，贴合中文用户习惯。
*   **自动化栏目生成**：无需修改代码，只需在 `src/Root` 下创建文件夹即可生成新栏目。
*   **全局配置管理**：通过 `src/config.yaml` 轻松管理网站信息、功能开关和外观。
*   **Markdown 支持**：完全支持 Markdown 语法，包括 Frontmatter 元数据。
*   **主题切换**：不同栏目拥有不同的背景主题（Home: 蓝天, Articles: 星空, About: 砖墙）。
*   **沉浸式体验**：
    *   **音乐播放器**：支持拖拽、音量调节，自动读取 `src/Root/Music` 下的音乐。
    *   **任天堂元素**：包含马里奥、塞尔达、宝可梦等经典游戏装饰。
*   **实用功能**：
    *   **评论系统**：集成 Giscus (GitHub Discussions) 评论系统。
    *   **全局搜索**：支持搜索文章标题和内容。
    *   **最近更新**：侧边栏自动显示最新发布的文章（移动端自动隐藏）。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

## 📦 部署指南 (GitHub Pages)

本项目可以直接部署到 GitHub Pages。

### 重要配置：Base URL

如果你的博客部署在非根目录下（例如 `https://username.github.io/repo-name/`），你需要修改 `vite.config.js` 中的 `base` 配置：

```javascript
// vite.config.js
export default defineConfig({
  base: '/repo-name/', // 修改为你的仓库名，前后都要加斜杠
  // ...
})
```
本项目已默认配置为 `/XiaJie.github.io/`，请根据实际情况修改。

### 方法一：手动部署 (推荐初学者)

1.  **构建项目**：
    在终端运行以下命令，这将生成 `dist` 文件夹：
    ```bash
    npm run build
    ```

2.  **推送到 GitHub**：
    确保你已经将代码推送到你的 GitHub 仓库（通常是 `username.github.io`）。

3.  **使用 gh-pages 分支**：
    你可以使用 `git subtree` 将 `dist` 文件夹的内容推送到 `gh-pages` 分支：
    ```bash
    git add dist -f
    git commit -m "deploy: build pages"
    git subtree push --prefix dist origin gh-pages
    ```
    或者，如果你的仓库就是 `username.github.io`，通常你需要将 `dist` 内容推送到 `main` 或 `master` 分支（取决于你的 GitHub Pages 设置）。如果这是你的个人主页仓库，你需要将构建后的内容放在根目录。
    
    **更简单的做法 (使用 gh-pages 包)**:
    1. 安装 `gh-pages`: `npm install gh-pages --save-dev`
    2. 在 `package.json` 的 `scripts` 中添加: `"deploy": "gh-pages -d dist"`
    3. 运行 `npm run build` 然后 `npm run deploy`。

### 方法二：使用 GitHub Actions 自动部署 (推荐)

在你的仓库中创建文件 `.github/workflows/deploy.yml`，内容如下：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

提交此文件后，每次 push 到 main 分支，GitHub Actions 就会自动构建并部署你的博客。

## ⚙️ 网站配置

网站的核心配置（如标题、作者、功能开关、评论设置等）都集中在 `src/config.yaml` 文件中。

```yaml
# 示例配置
site:
  title: Pixel Blog
  description: A retro pixel art style blog
  author: Pixel Gamer
  # logo: P # 默认文字 Logo

# 自定义图片配置
images:
  # 首页欢迎区域的动态方块图片 (可选)，默认显示文字
  # 建议将图片放在 public/assets 目录下，引用路径如 /assets/hero.png
  # 系统会自动根据部署路径处理 Base URL，无需手动添加仓库名前缀
  homeHero: /assets/other5.png 
  # 左上角浮动 Logo 图片 (可选)，默认显示文字 Logo
  logo: /assets/other5.png

features:
  musicPlayer: true # 开启音乐播放器
  toc: true         # 开启文章目录
  darkMode: true    # 开启深色模式
  search: true      # 开启搜索
  comments: true    # 开启评论

# 社交链接 (显示在页脚)
social:
  github: https://github.com/yourusername
  bilibili: https://bilibili.com
  # twitter: https://twitter.com 

giscus:
  repo: your-user/your-repo
  # ...其他 Giscus 配置
```

## 📝 内容管理指南

所有博客内容都存储在 `src/Root` 目录下。

### 1. 新增/修改栏目

每个栏目对应 `src/Root` 下的一个文件夹。

*   **创建栏目**：在 `src/Root` 下新建文件夹（例如 `src/Root/Tech`）。
*   **配置栏目**：在文件夹内创建 `config.yaml` 文件：
    ```yaml
    title: 技术笔记      # 栏目显示名称
    icon: 💻           # 栏目图标 (Emoji)
    type: list         # 类型：'list' (文章列表) 或 'page' (单页)
    description: 学习记录 # 栏目描述
    order: 2           # 排序权重 (越小越靠前)
    ```

> **注意**：名为 `Image` 的文件夹会被系统自动忽略，不会被识别为栏目。您可以将图片存放在 `src/Root/Image` 或各栏目下的 `Image` 子目录中。

### 2. 发布文章

在任意栏目文件夹下创建 `.md` 文件即可发布文章。

文章头部必须包含 Frontmatter 信息：

```markdown
---
title: 我的第一篇文章
date: 2023-11-27
tags: [Vue, Pixel, Game]
---

这里是文章正文...
```

*   **date**: 必须包含日期，否则文章不会出现在“最近更新”侧边栏中。
*   **tags**: 标签数组。

### 3. 添加背景音乐

将 `.mp3`, `.wav`, 或 `.ogg` 格式的音乐文件直接放入 `src/Root/Music` 文件夹中。
刷新页面后，音乐播放器会自动加载这些文件。

### 4. 图片管理

*   **文章内图片**：建议在 `src/Root` 下创建一个 `Image` 文件夹用于存放图片，然后在 Markdown 中引用：
    ```markdown
    ![Alt text](/src/Root/Image/my-image.png)
    ```
    系统已配置为忽略 `Image` 文件夹，所以它不会出现在导航栏中。

*   **静态资源 (Logo/Hero)**：对于 `config.yaml` 中配置的全局图片（如 Logo、首页大图），建议将图片文件放入项目根目录下的 `public/assets` 文件夹中，并使用绝对路径引用（例如 `/assets/logo.png`）。系统会自动根据部署环境处理路径前缀。

## 🎨 自定义与修改

### 修改主题颜色

编辑 `src/style.css` 中的 `:root` 变量：

```css
:root {
  --nintendo-red: #e70012;
  /* ...其他颜色 */
}
```

### 修改背景装饰

*   **背景颜色**：在 `src/style.css` 中修改 `.theme-home`, `.theme-articles` 等类的 `background-color`。
*   **装饰元素**：编辑 `src/components/Layout.vue`，在 `<template>` 中找到 `themeClass` 相关的条件渲染块，修改 SVG 或添加新元素。

### 修改布局

主要布局文件位于 `src/components/Layout.vue`。
*   **导航栏**：`<header>` 部分。
*   **侧边栏**：`<aside>` 部分。
*   **内容区**：`<main>` 部分。

## 🛠️ 技术栈

*   Vue 3 (Composition API)
*   Vite
*   Tailwind CSS
*   Pinia (状态管理)
*   Vue Router
*   Marked (Markdown 渲染)
*   js-yaml (YAML 解析)
*   Giscus (评论系统)

---

Enjoy your pixel journey! 🎮
