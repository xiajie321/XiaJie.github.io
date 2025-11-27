<template>
  <div class="giscus-wrapper mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
    <div ref="giscusContainer"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useBlogStore } from '../stores/blog'

const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const blogStore = useBlogStore()
const giscusContainer = ref(null)
let observer = null

const giscusConfig = computed(() => blogStore.siteConfig.giscus || {})

const loadGiscus = () => {
  const config = giscusConfig.value
  if (!config.repo) return // 如果没有配置，不加载

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', config.repo)
  script.setAttribute('data-repo-id', config.repoId)
  script.setAttribute('data-category', config.category)
  script.setAttribute('data-category-id', config.categoryId)
  
  // 智能处理映射策略
  if (props.path) {
    // 如果传入了具体路径，使用 specific 模式，确保每篇文章有独立评论区
    script.setAttribute('data-mapping', 'specific')
    script.setAttribute('data-term', props.path)
  } else {
    // 否则回退到配置
    // 注意：在 Hash 路由模式下，pathname 对于所有页面都相同
    // 如果配置是 pathname，建议回退到 url
    let mapping = config.mapping || 'pathname'
    if (mapping === 'pathname' && window.location.hash) {
      mapping = 'url'
    }
    script.setAttribute('data-mapping', mapping)
  }

  script.setAttribute('data-strict', config.strict || '0')
  script.setAttribute('data-reactions-enabled', config.reactionsEnabled || '1')
  script.setAttribute('data-emit-metadata', config.emitMetadata || '0')
  script.setAttribute('data-input-position', config.inputPosition || 'bottom')
  script.setAttribute('data-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  script.setAttribute('data-lang', config.lang || 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  if (giscusContainer.value) {
    giscusContainer.value.innerHTML = ''
    giscusContainer.value.appendChild(script)
  }
}

const updateGiscusTheme = (theme) => {
  const iframe = document.querySelector('iframe.giscus-frame')
  if (!iframe) return
  iframe.contentWindow.postMessage({
    giscus: {
      setConfig: {
        theme: theme
      }
    }
  }, 'https://giscus.app')
}

onMounted(() => {
  loadGiscus()

  // 使用 MutationObserver 监听 html class 变化
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const isDark = document.documentElement.classList.contains('dark')
        updateGiscusTheme(isDark ? 'dark' : 'light')
      }
    })
  })
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.giscus-wrapper {
  min-height: 200px;
}
</style>
