import { defineStore } from 'pinia'
import jsYaml from 'js-yaml'
import configRaw from '@/config.yaml?raw'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    menus: [],
    articles: {},
    siteConfig: {},
    loading: true,
    currentToc: [],
    activeHeadingId: ''
  }),
  getters: {
    allArticles: (state) => {
      return Object.values(state.articles).flat()
    },
    recentArticles: (state) => {
      const all = Object.values(state.articles).flat()
      return all
        .filter(article => article.date) 
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5)
    }
  },
  actions: {
    async init() {
      this.loading = true
      
      try {
        // 加载全局配置
        this.siteConfig = jsYaml.load(configRaw)

        // 读取所有 config.yaml
        const configs = import.meta.glob('../Root/**/config.yaml', { as: 'raw', eager: true })
        
        const menuItems = []

        for (const path in configs) {
          // 忽略 Image 文件夹
          if (path.includes('/Image/')) continue

          const content = configs[path]
          const config = jsYaml.load(content)
          // 提取目录名作为 id
          const dirName = path.split('/').slice(-2, -1)[0]
          
          // 忽略 Image 目录作为栏目
          if (dirName === 'Image') continue

          menuItems.push({
            id: dirName,
            path: path,
            ...config
          })
        }

        // 排序菜单
        this.menus = menuItems.sort((a, b) => a.order - b.order)

        // 读取所有 md 文件
        const mds = import.meta.glob('../Root/**/*.md', { as: 'raw', eager: true })
        
        for (const path in mds) {
          // 忽略 Image 文件夹中的内容
          if (path.includes('/Image/')) continue

          const content = mds[path]
          const dirName = path.split('/').slice(-2, -1)[0]
          
          // 如果该目录没有对应的 config，可能是一个子目录或 Image 目录，这里我们只把文章归类到已知的栏目
          // 但目前的逻辑是基于文件夹结构，所以我们暂时保留创建数组的逻辑，但在展示时只会展示有 config 的栏目
          if (!this.articles[dirName]) {
            this.articles[dirName] = []
          }

          // 简单的 frontmatter 解析
          // 兼容 Windows (\r\n) 和 Unix (\n) 换行符
          const match = content.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]+([\s\S]*)$/)
          if (match) {
            const frontmatter = jsYaml.load(match[1])
            // 确保日期是 Date 对象或字符串，处理可能的解析问题
            if (frontmatter.date && !(frontmatter.date instanceof Date)) {
              frontmatter.date = new Date(frontmatter.date)
            }
            
            const body = match[2]
            this.articles[dirName].push({
              ...frontmatter,
              content: body,
              path,
              category: dirName
            })
          } else {
             this.articles[dirName].push({
              content,
              path,
              category: dirName
            })
          }
        }
      
      } catch (e) {
        console.error('Blog Store Init Error:', e)
      } finally {
        this.loading = false
      }
    }
  }
})
