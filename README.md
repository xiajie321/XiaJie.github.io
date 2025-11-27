# Pixel Blog - 像素风格静态博客系统

这是一个基于 Vue 3 + Vite 构建的，具有独特像素游戏风格的个人博客系统。它专为 GitHub Pages 设计，让你可以轻松拥有一个复古、有趣且功能强大的个人网站。

## ✨ 特色功能

*   **🎮 像素艺术风格**：复古游戏 UI，包含像素字体、边框、马里奥/塞尔达/宝可梦等经典游戏元素装饰。
*   **🌗 深色模式**：支持日间/夜间模式切换，自动跟随系统或手动切换，配色经过精心调试。
*   **🎵 沉浸式体验**：内置像素风格音乐播放器（支持拖拽、播放列表、单曲循环），全局点击粒子特效，Link 像素光标。
*   **📱 响应式设计**：完美适配电脑、平板和手机屏幕。
*   **📝 简易内容管理**：
    *   **所见即所得的栏目生成**：只需在文件夹中新建目录即可自动生成导航栏目。
    *   **Markdown 支持**：直接编写 Markdown 文件发布文章。
    *   **自动化配置**：通过一个 `config.yaml` 文件管理全站设置。
*   **🔍 实用功能**：
    *   **全文搜索**：快速查找文章。
    *   **智能目录**：文章右侧自动生成目录，随滚动高亮。
    *   **评论系统**：集成 Giscus (GitHub Discussions) 评论。
    *   **最近更新**：侧边栏自动展示最新文章。

---

## 🚀 手把手安装教程 (Windows)

本教程假设你是一名初学者，我们将一步步引导你完成安装。

### 第一步：准备环境

在开始之前，请确保你的电脑上安装了以下两个必备软件：

1.  **Node.js** (版本 16 或更高): 用于运行项目。
    *   下载地址: [https://nodejs.org/](https://nodejs.org/) (推荐下载 LTS 版本)
2.  **Git**: 用于下载代码和上传部署。
    *   下载地址: [https://git-scm.com/](https://git-scm.com/)

安装完成后，打开终端（Win+R 输入 `cmd`），输入以下命令检查是否安装成功：
```bash
node -v
git --version
```
如果能看到版本号，说明环境准备就绪。

### 第二步：下载项目

1.  打开你想要存放项目的文件夹。
2.  右键选择 "Open Git Bash here" 或在地址栏输入 `cmd` 打开终端。
3.  输入以下命令克隆项目：
    ```bash
    git clone https://github.com/xiajie321/XiaJie.github.io.git
    ```
4.  进入项目目录：
    ```bash
    cd XiaJie.github.io
    ```

### 第三步：安装依赖

在项目目录下，运行以下命令安装项目所需的“零件”（依赖包）：

```bash
npm install
```
*这可能需要几分钟时间，请耐心等待。*

### 第四步：本地运行

安装完成后，启动本地预览服务器：

```bash
npm run dev
```
终端会显示一个地址（通常是 `http://localhost:5173/`）。按住 `Ctrl` 键点击该链接，或者在浏览器中输入该地址，即可看到你的博客已经在本地跑起来了！

---

## ⚙️ 配置文件详解 (`src/config.yaml`)

博客的所有核心设置都在 `src/config.yaml` 文件中。你可以使用记事本或 VS Code 打开它进行修改。

```yaml
# 网站基本信息
site:
  title: 丑兔子的个人博客          # 网站标题，显示在浏览器标签页和导航栏
  description: 基于 Vue 3...      # 网站描述，用于 SEO
  author: 欢迎来到丑兔子的个人博客  # 作者名称/欢迎语
  # logo: P                      # (可选) 文字Logo，如果不配置图片Logo则显示此文字

# 图片配置
images:
  # 首页正中间的动态方块图片
  # 将图片放入 public/assets 文件夹，然后在这里引用 assets/文件名
  homeHero: assets/other5.png 
  
  # 导航栏左上角的图片 Logo
  logo: assets/other5.png

# 功能开关 (true开启, false关闭)
features:
  musicPlayer: true # 音乐播放器
  toc: true         # 文章目录 (右侧侧边栏)
  darkMode: true    # 深色模式切换按钮
  search: true      # 搜索功能
  comments: true    # 评论区

# 社交链接 (显示在页脚)
social:
  github: https://github.com/xiajie321
  bilibili: https://space.bilibili.com/1289464475

# 评论系统配置 (基于 Giscus)
# 需要先在 GitHub 上安装 Giscus App 并获取以下信息
giscus:
  repo: xiajie321/XiaJie.github.io  # 你的 GitHub 仓库 (用户名/仓库名)
  repoId: R_kgDOQdDIYw              # 仓库 ID
  category: General                 # Discussion 分类
  categoryId: DIC_kwDOQdDIY84CzHvt  # 分类 ID
  # ...其他配置通常保持默认即可
```

---

## 📝 如何发布内容

所有内容都存放在 `src/Root` 文件夹下。

### 1. 添加新栏目 (菜单)

想在导航栏添加一个新菜单（比如“技术笔记”）？

1.  在 `src/Root` 下新建一个文件夹，例如 `Tech`。
2.  在文件夹内新建一个 `config.yaml` 文件，写入以下内容：
    ```yaml
    title: 技术笔记      # 菜单显示的名称
    icon: 💻           # 菜单图标 (可以使用 Emoji)
    type: list         # 类型：'list' (文章列表) 或 'page' (单页/关于页)
    description: 学习记录 # 栏目描述
    order: 2           # 排序 (数字越小越靠左)
    ```
3.  保存后，刷新页面，导航栏就会出现“技术笔记”！

### 2. 写文章

在刚才创建的栏目文件夹（如 `src/Root/Tech`）中，新建一个 `.md` 文件（例如 `vue-tutorial.md`）。

文件开头必须包含以下信息（这叫 Frontmatter）：

```markdown
---
title: 我的第一篇博客文章    # 文章标题
date: 2023-11-28          # 发布日期 (必须填写，否则不会出现在“最近更新”)
tags: [Vue, 教程]          # 文章标签
---

这里开始写正文...
可以使用 **Markdown** 语法。
```

### 3. 添加背景音乐

1.  找到你喜欢的音乐文件（`.mp3` 格式）。
2.  将文件复制到 `src/Root/Music` 文件夹中。
3.  刷新网页，播放器会自动加载新歌。

### 4. 插入图片

1.  建议在 `src/Root` 下新建一个 `Image` 文件夹存放文章图片。
2.  在文章中引用：`![图片描述](/src/Root/Image/我的图片.jpg)`

---

## 📦 如何部署到 GitHub Pages

当你修改完内容，想让全世界都能访问你的博客时，需要进行部署。

### 准备工作

1.  在 GitHub 上新建一个仓库（Repository）。
2.  如果你的仓库名是 `你的用户名.github.io`，那么你的博客地址就是 `https://你的用户名.github.io`。

### 自动部署 (推荐 Windows 用户)

本项目内置了一个自动化脚本 `deploy.ps1`。

1.  在项目根目录下打开终端（PowerShell）。
2.  运行命令：
    ```powershell
    ./deploy.ps1
    ```
3.  脚本会自动帮你打包代码，并推送到 GitHub。
4.  稍等几分钟，访问你的 GitHub Pages 地址即可看到更新。

> **注意**：首次部署可能需要在脚本运行过程中输入 GitHub 账号密码或 Token。

### 手动部署 (如果不使用脚本)

1.  运行构建命令：`npm run build`
2.  进入生成的目录：`cd dist`
3.  初始化 Git：`git init`
4.  添加文件：`git add -A`
5.  提交：`git commit -m "deploy"`
6.  推送到远程 gh-pages 分支：`git push -f https://github.com/你的用户名/你的仓库名.git master:gh-pages`

---

## ❓ 常见问题

**Q: 为什么图片显示不出来？**
A: 检查图片路径是否正确。如果是 `src/config.yaml` 里的图片，建议放在 `public/assets` 下并使用 `assets/xxx.png`。如果是文章图片，确保路径以 `/src/Root/...` 开头。

**Q: 部署后样式乱了或白屏？**
A: 如果你的博客不是部署在根路径（例如 `https://xxx.github.io/my-blog/`），你需要修改 `vite.config.js` 中的 `base` 配置，将其改为 `/my-blog/`。

**Q: 评论区无法加载？**
A: 请确保你在 `src/config.yaml` 中正确配置了 Giscus 的 `repo` 和 `repoId` 等信息，并且你的 GitHub 仓库已开启 Discussions 功能。

---

祝你玩得开心！ 🎮
