<template>
  <div class="giscus-wrapper mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
    <div ref="giscusContainer"></div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref, computed } from 'vue'
import { useBlogStore } from '../stores/blog'

const blogStore = useBlogStore()
const giscusContainer = ref(null)

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
  script.setAttribute('data-mapping', config.mapping || 'pathname')
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

onMounted(() => {
  loadGiscus()
})

// Watch for theme changes to reload Giscus with correct theme
watch(() => document.documentElement.classList.contains('dark'), () => {
  // We need to send a message to the iframe to update the theme instead of reloading
  const iframe = document.querySelector('iframe.giscus-frame')
  if (!iframe) return
  iframe.contentWindow.postMessage({
    giscus: {
      setConfig: {
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      }
    }
  }, 'https://giscus.app')
})
</script>

<style scoped>
.giscus-wrapper {
  min-height: 200px;
}
</style>
