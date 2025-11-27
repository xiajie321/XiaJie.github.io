<template>
  <div v-if="!blogStore.loading">
    <transition name="article-switch" mode="out-in">
      <!-- 列表视图 -->
      <div v-if="currentConfig?.type === 'list' && !selectedArticle" class="space-y-6" key="list">
        <div class="mb-8 border-b-4 border-pixel-dark pb-4">
          <h2 class="text-3xl font-pixel text-pixel-primary mb-2">{{ currentConfig.title }}</h2>
          <p class="text-gray-600 mb-4">{{ currentConfig.description }}</p>
          
          <!-- 标签筛选器 -->
          <div v-if="availableTags.length > 0" class="flex flex-wrap gap-2 mt-4">
            <button
              v-for="tag in availableTags"
              :key="tag"
              @click="selectedTag = selectedTag === tag ? null : tag"
              class="px-3 py-1 text-xs rounded-full transition-all duration-200 pixel-border-sm"
              :class="[
                selectedTag === tag 
                  ? 'bg-pixel-primary text-white scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              ]"
            >
              #{{ tag }}
            </button>
          </div>
        </div>

        <div class="grid gap-6">
          <article 
            v-for="(article, index) in currentArticles" 
            :key="article.path"
            class="bg-gray-50/80 dark:bg-gray-800/80 pixel-border-sm p-4 hover:bg-white dark:hover:bg-gray-700 transition-all cursor-pointer group flex gap-4 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] dark:hover:shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]"
            @click="selectArticle(article)"
          >
            <!-- 随机像素图标装饰 -->
            <div class="hidden sm:flex w-16 h-16 bg-gray-200 dark:bg-gray-700 items-center justify-center pixel-border-sm shrink-0 group-hover:bg-pixel-accent transition-colors group-hover:animate-bounce-fast">
               <span class="text-2xl">{{ getRandomIcon(index) }}</span>
            </div>

            <div class="flex-grow">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold group-hover:text-pixel-primary dark:text-gray-200 transition-colors">
                  {{ article.title || '无标题' }}
                </h3>
                <span class="text-xs font-pixel bg-pixel-secondary text-white px-2 py-1 rounded">
                  {{ formatDate(article.date) }}
                </span>
              </div>
              
              <div class="flex gap-2 mb-3">
                <span 
                  v-for="tag in article.tags" 
                  :key="tag"
                  class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300"
                >
                  #{{ tag }}
                </span>
              </div>
              
              <p class="text-gray-600 dark:text-gray-400 line-clamp-2">
                {{ getPreview(article.content) }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- 文章详情/单页视图 -->
      <div v-else class="max-w-3xl mx-auto relative" key="detail">
        <!-- 首页 Hero 区域 -->
        <div v-if="currentConfig?.type === 'home' && !selectedArticle" class="mb-12 text-center">
          <div class="inline-block w-24 h-24 bg-pixel-primary pixel-border mb-4 animate-squash-bounce relative overflow-hidden">
             <!-- 动态图片或默认像素脸 -->
             <img 
               v-if="blogStore.siteConfig.images?.homeHero"
               :src="resolvePath(blogStore.siteConfig.images.homeHero)" 
               alt="Hero" 
               class="w-full h-full object-cover" 
             />
             <svg v-else viewBox="0 0 32 32" class="w-full h-full">
               <rect x="8" y="8" width="16" height="16" fill="#4ade80" />
               <rect x="8" y="8" width="16" height="4" fill="#166534" />
               <rect x="12" y="16" width="2" height="2" fill="#000" />
               <rect x="20" y="16" width="2" height="2" fill="#000" />
               <rect x="14" y="22" width="6" height="2" fill="#000" />
            </svg>
          </div>
          <h1 class="text-4xl font-pixel mb-4 text-pixel-dark text-stroke dark:text-white">欢迎玩家 1</h1>
        </div>

        <button 
          v-if="selectedArticle && currentConfig?.type === 'list'"
          @click="goBack"
          class="mb-6 text-sm text-gray-500 hover:text-pixel-primary flex items-center gap-2"
        >
          ← 返回列表
        </button>

        <div class="markdown-body bg-white/50 dark:bg-gray-900/50 p-4 rounded-lg" v-html="renderedContent"></div>

        <!-- 评论组件 -->
        <Comment v-if="isArticlePage && blogStore.siteConfig.features?.comments" />
      </div>

    </transition>

    <!-- 悬浮工具栏 (仅回到顶部按钮，移动端可见) -->
    <div 
      v-if="isArticlePage"
      class="fixed right-4 bottom-24 z-40 lg:hidden"
    >
      <button 
        @click="scrollToTop"
        class="w-10 h-10 bg-white dark:bg-gray-800 text-pixel-dark dark:text-white rounded-full border-2 border-pixel-dark shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 opacity-80"
        title="回到顶部"
      >
        <span class="text-lg">⬆️</span>
      </button>
    </div>
  </div>
  
  <div v-else class="flex justify-center items-center h-64">
    <div class="animate-spin w-12 h-12 border-4 border-pixel-primary border-t-transparent rounded-full"></div>
  </div>
  
</template>

<script setup>
import { computed, ref, watch, watchEffect, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '../stores/blog'
import { marked } from 'marked'
import { format } from 'date-fns'
import Comment from '../components/Comment.vue'
import { playSound } from '../utils/sound'
import { resolvePath } from '../utils/image'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()
const selectedArticle = ref(null)
const toc = ref([])
const isTocOpen = ref(false)
const selectedTag = ref(null)

// 获取当前栏目配置
const currentConfig = computed(() => {
  const category = route.params.category
  
  if (!category) {
    return blogStore.menus.find(m => m.type === 'home')
  }
  
  return blogStore.menus.find(m => m.id === category)
})

// 获取当前栏目的文章(原始数据)
const rawArticles = computed(() => {
  if (!currentConfig.value) return []
  const id = currentConfig.value.id
  return blogStore.articles[id] || []
})

// 获取当前栏目所有可用的标签
const availableTags = computed(() => {
  const tags = new Set()
  rawArticles.value.forEach(article => {
    if (Array.isArray(article.tags)) {
      article.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
})

// 根据标签筛选后的文章列表
const currentArticles = computed(() => {
  if (!selectedTag.value) {
    return rawArticles.value
  }
  return rawArticles.value.filter(article => 
    Array.isArray(article.tags) && article.tags.includes(selectedTag.value)
  )
})

// 监听路由变化，切换栏目时重置筛选
watch(() => route.params.category, () => {
  selectedTag.value = null
})

// 判断是否为文章详情页或单页
const isArticlePage = computed(() => {
  // 如果选择了文章，或者是单页类型（如首页、关于页）且有内容
  return !!selectedArticle.value || (currentConfig.value?.type !== 'list' && currentArticles.value.length > 0)
})

// 简单的 Slugger 实现
class Slugger {
  constructor() {
    this.seen = {}
  }
  slug(value) {
    let slug = value
      .toLowerCase()
      .trim()
      // 移除 HTML 标签
      .replace(/<[^>]+>/g, '')
      // 移除特殊字符，保留中文、字母、数字、下划线、连字符
      .replace(/[^\w\u4e00-\u9fa5\-_ ]/g, '')
      .replace(/\s+/g, '-')

    if (this.seen.hasOwnProperty(slug)) {
      const originalSlug = slug
      do {
        this.seen[originalSlug] = (this.seen[originalSlug] || 0) + 1
        slug = originalSlug + '-' + this.seen[originalSlug]
      } while (this.seen.hasOwnProperty(slug))
    }
    this.seen[slug] = 0
    return slug
  }
}

// 自定义 Renderer 以支持视频和 TOC
const renderer = new marked.Renderer()
const originalLink = renderer.link.bind(renderer)

// 临时 TOC 存储
let tempToc = []

renderer.link = (href, title, text) => {
  if (!href) return originalLink(href, title, text)

  // 1. 本地/直接视频文件 (.mp4, .webm)
  if (href.match(/\.(mp4|webm)$/i)) {
    return `
      <div class="video-container my-4">
        <video controls class="w-full rounded-lg shadow-lg pixel-border-sm" preload="metadata">
          <source src="${href}" type="video/${href.split('.').pop()}">
          您的浏览器不支持视频标签。
        </video>
      </div>
    `
  }

  // 2. Bilibili 视频
  // 格式: https://www.bilibili.com/video/BV1xx411c7mD
  if (href.includes('bilibili.com/video/')) {
    const bvidMatch = href.match(/video\/(BV\w+)/)
    if (bvidMatch) {
      const bvid = bvidMatch[1]
      return `
        <div class="video-container my-4 aspect-video">
          <iframe 
            src="//player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&danmaku=0" 
            scrolling="no" 
            border="0" 
            frameborder="no" 
            framespacing="0" 
            allowfullscreen="true"
            class="w-full h-full rounded-lg shadow-lg pixel-border-sm"
          ></iframe>
        </div>
      `
    }
  }

  // 3. YouTube 视频
  if (href.includes('youtube.com/watch') || href.includes('youtu.be/')) {
    let videoId = ''
    if (href.includes('youtu.be/')) {
      videoId = href.split('youtu.be/')[1].split('?')[0]
    } else {
      try {
        const urlObj = new URL(href)
        videoId = urlObj.searchParams.get('v')
      } catch (e) {
        // ignore invalid URL
      }
    }
    
    if (videoId) {
      return `
        <div class="video-container my-4 aspect-video">
          <iframe 
            src="https://www.youtube.com/embed/${videoId}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="w-full h-full rounded-lg shadow-lg pixel-border-sm"
          ></iframe>
        </div>
      `
    }
  }

  return originalLink(href, title, text)
}

const renderedContent = ref('')

// 监听内容变化并渲染
watchEffect(() => {
  const content = selectedArticle.value 
    ? selectedArticle.value.content 
    : (currentConfig.value?.type !== 'list' && currentArticles.value.length > 0)
      ? currentArticles.value[0].content
      : ''
      
  if (!content) {
    renderedContent.value = ''
    toc.value = []
    return
  }
  
  // 重置临时 TOC
  tempToc = []
  
  // 创建新的 slugger 实例
  const slugger = new Slugger()

  // 重新定义 heading renderer 以使用新的 slugger
  renderer.heading = (text, level) => {
    const id = slugger.slug(text)
    // 收集 TOC (仅 h2, h3)
    if (level >= 1 && level <= 3) {
      tempToc.push({
        id,
        text: text.replace(/<[^>]*>/g, ''), // 移除 HTML 标签
        level
      })
    }
    return `<h${level} id="${id}">${text}</h${level}>`
  }
  
  // 渲染 Markdown (同步过程，会填充 tempToc)
  renderedContent.value = marked(content, { renderer })
  
  // 更新响应式 TOC 和 Store
  toc.value = [...tempToc]
  blogStore.currentToc = [...tempToc]
  
  // 设置 IntersectionObserver
  nextTick(() => {
    setupIntersectionObserver()
  })
})

let observer = null

const setupIntersectionObserver = () => {
  if (observer) {
    observer.disconnect()
  }

  const options = {
    root: null,
    rootMargin: '-100px 0px -60% 0px', // 顶部偏移，避免导航栏遮挡；底部偏移，确保高亮在屏幕上方区域
    threshold: [0, 1]
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        blogStore.activeHeadingId = entry.target.id
      }
    })
  }, options)

  toc.value.forEach(item => {
    const element = document.getElementById(item.id)
    if (element) {
      observer.observe(element)
    }
  })
}

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  blogStore.currentToc = []
  blogStore.activeHeadingId = ''
})

// 监听路由变化重置状态
watch(() => route.path, () => {
  // 如果没有查询参数，才重置
  if (!route.query.path) {
    selectedArticle.value = null
  }
})

// 监听查询参数以支持直接链接到文章
watch(() => route.query.path, (newPath) => {
  if (newPath) {
    // 需要等待 articles 加载完成，这里简单处理，假设 store 已加载或会在加载后触发 computed
    const article = blogStore.allArticles.find(a => a.path === newPath)
    if (article) {
      selectedArticle.value = article
    }
  } else {
    selectedArticle.value = null
  }
}, { immediate: true })

const selectArticle = (article) => {
  playSound('click')
  selectedArticle.value = article
  isTocOpen.value = false // 默认关闭 TOC
  // 更新 URL 但不刷新页面，方便分享
  router.push({ query: { ...route.query, path: article.path } })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goBack = () => {
  playSound('back')
  selectedArticle.value = null
  isTocOpen.value = false
}

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  // 移动端点击后自动收起
  if (window.innerWidth < 768) {
    isTocOpen.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const formatDate = (date) => {
  if (!date) return ''
  return format(new Date(date), 'yyyy-MM-dd')
}

const getPreview = (content) => {
  if (!content) return ''
  // 移除 markdown 符号
  return content.replace(/[#*`]/g, '').slice(0, 100) + '...'
}

const getRandomIcon = (index) => {
  const icons = ['⚔️', '🛡️', '💎', '🧪', '📜', '🗝️', '🍄', '⭐']
  return icons[index % icons.length]
}
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

/* 弹出动画 */
.pop-up-enter-active,
.pop-up-leave-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.pop-up-enter-from,
.pop-up-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}
</style>
