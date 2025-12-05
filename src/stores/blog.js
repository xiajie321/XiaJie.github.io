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
        .slice(0, 3)
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
          
          // 解析路径结构以支持多级目录
          // 路径格式示例: ../Root/Articles/nihao/aaa.md
          const parts = path.split('/')
          const rootIndex = parts.indexOf('Root')
          
          // 确保路径包含 Root 且有足够的深度
          if (rootIndex === -1 || parts.length <= rootIndex + 2) continue
          
          // 一级目录 (Category)
          const category = parts[rootIndex + 1]
          
          // 提取子模块路径 (从 Category 之后到文件名之前)
          // 例如: ["nihao"] 或 ["nihao", "bbb"]
          const subModules = parts.slice(rootIndex + 2, parts.length - 1)
          const modulePath = subModules.join('/')
          
          if (!this.articles[category]) {
            this.articles[category] = []
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
            this.articles[category].push({
              ...frontmatter,
              content: body,
              path,
              category: category,
              module: modulePath // 添加模块信息
            })
          } else {
            // 如果没有匹配到 frontmatter
            // 对于 Articles 目录，我们忽略没有 frontmatter 的文件（修复之前的 bug）
            // 对于其他目录（如 Home, About），允许没有 frontmatter 的文件
            if (category !== 'Articles') {
              this.articles[category].push({
                content,
                path,
                category: category,
                module: modulePath
              })
            }
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
