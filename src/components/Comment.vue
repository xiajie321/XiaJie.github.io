<template>
  <div class="giscus-wrapper mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
    <div ref="giscusContainer"></div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue'

const giscusContainer = ref(null)

const loadGiscus = () => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'xiajie321/XiaJie.github.io')
  script.setAttribute('data-repo-id', 'R_kgDOMwdR_g') // Replace with your actual Repo ID
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'DIC_kwDOMwdR_s4Ciix_') // Replace with your actual Category ID
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
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
