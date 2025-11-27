<template>
  <div class="relative">
    <!-- 搜索按钮 -->
    <button 
      @click="toggleSearch"
      class="pixel-btn bg-white hover:bg-pixel-accent transition-colors p-2 flex items-center justify-center relative z-50"
      :class="{ 'bg-pixel-accent text-white': isOpen }"
      title="搜索"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>

    <!-- 搜索弹窗 -->
    <div v-if="isOpen" class="absolute top-full right-0 mt-2 w-80 bg-white pixel-border z-50 shadow-xl">
      <div class="p-4 border-b-4 border-gray-100">
        <input 
          ref="searchInput"
          v-model="searchQuery"
          type="text"
          placeholder="搜索文章..."
          class="w-full p-2 bg-gray-50 border-2 border-gray-200 focus:border-pixel-primary outline-none font-pixel text-sm"
          @keydown.esc="closeSearch"
        >
      </div>
      
      <div class="max-h-96 overflow-y-auto custom-scrollbar">
        <div v-if="filteredArticles.length === 0 && searchQuery" class="p-4 text-center text-gray-500 text-sm">
          没有找到相关文章
        </div>
        
        <div v-else-if="filteredArticles.length > 0">
          <div 
            v-for="article in filteredArticles" 
            :key="article.path"
            @click="handleSelect(article)"
            class="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors group"
          >
            <div class="font-bold text-sm mb-1 line-clamp-1 group-hover:text-pixel-primary">{{ article.title || '无标题' }}</div>
            <div class="text-xs text-gray-500 line-clamp-2">{{ getPreview(article.content) }}</div>
            <div class="mt-1 flex gap-2">
               <span class="text-[10px] bg-gray-200 px-1 rounded text-gray-500">{{ article.category }}</span>
            </div>
          </div>
        </div>
        
        <div v-else-if="!searchQuery" class="p-4 text-center text-gray-400 text-xs">
          输入关键词搜索...
        </div>
      </div>
    </div>
    
    <!-- 点击外部关闭遮罩 -->
    <div v-if="isOpen" @click="closeSearch" class="fixed inset-0 z-40 bg-black/5 cursor-default"></div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useBlogStore } from '../stores/blog'

const router = useRouter()
const blogStore = useBlogStore()

const isOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)

const toggleSearch = () => {
  isOpen.value = !isOpen.value
}

const closeSearch = () => {
  isOpen.value = false
}

// 自动聚焦
watch(isOpen, (val) => {
  if (val) {
    nextTick(() => {
      searchInput.value?.focus()
    })
  } else {
    searchQuery.value = ''
  }
})

const filteredArticles = computed(() => {
  if (!searchQuery.value.trim()) return []
  
  const query = searchQuery.value.toLowerCase()
  return blogStore.allArticles.filter(article => {
    const title = (article.title || '').toLowerCase()
    const content = (article.content || '').toLowerCase()
    return title.includes(query) || content.includes(query)
  })
})

const handleSelect = (article) => {
  // 导航到对应的分类页面，并带上 path 参数以选中文章
  // article.category 是目录名，如 'Home', 'Articles'
  // 我们的路由是 '/' (Home) 和 '/:category'
  
  // 找到该分类对应的菜单项以获取正确的路由路径
  // 假设 store 中的 menus 已经有了正确的信息
  // 但简单起见，我们知道 Home 对应 '/'，其他对应 '/:id'
  
  const menu = blogStore.menus.find(m => m.id === article.category)
  let targetPath = '/'
  
  if (menu && menu.type !== 'home') {
    targetPath = '/' + menu.id
  }
  
  router.push({
    path: targetPath,
    query: { path: article.path }
  })
  
  closeSearch()
}

const getPreview = (content) => {
  if (!content) return ''
  return content.replace(/[#*`]/g, '').slice(0, 60) + '...'
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #ddd;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
