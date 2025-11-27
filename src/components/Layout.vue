<template>
  <div class="min-h-screen flex flex-col font-sans bg-transition" :class="themeClass">
    <!-- 像素风格导航栏 -->
    <header class="bg-white/90 dark:bg-gray-900/90 dark:border-gray-700 backdrop-blur border-b-4 border-pixel-dark p-4 sticky top-0 z-50 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center gap-4">
          <!-- Logo 图片或文字 -->
          <div 
            v-if="blogStore.siteConfig.images?.logo"
            class="w-10 h-10 bg-pixel-primary pixel-border animate-pixel-bounce flex items-center justify-center overflow-hidden"
          >
             <img :src="resolvePath(blogStore.siteConfig.images.logo)" alt="Logo" class="w-full h-full object-cover" />
          </div>
          <div 
            v-else
            class="w-10 h-10 bg-pixel-primary pixel-border animate-pixel-bounce flex items-center justify-center text-white font-bold text-xl"
          >
            {{ blogStore.siteConfig.site?.logo || 'P' }}
          </div>
          
          <h1 class="text-xl font-pixel hidden sm:block">{{ blogStore.siteConfig.site?.title || '像素博客' }}</h1>
        </div>
        
        <nav class="flex items-center gap-4">
          <!-- 深色模式切换 -->
          <button 
            @click="toggleTheme" 
            class="pixel-btn bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors p-2 flex items-center justify-center"
            title="切换深色模式"
          >
            <span v-if="isDark">🌙</span>
            <span v-else>☀️</span>
          </button>

          <!-- 搜索组件 -->
          <Search />

          <template v-if="blogStore.loading">
            <div class="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
            <div class="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
            <div class="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
          </template>
          <template v-else>
            <router-link 
              v-for="menu in blogStore.menus" 
              :key="menu.id"
              :to="'/' + (menu.type === 'home' ? '' : menu.id)"
              class="pixel-btn bg-white hover:bg-pixel-accent transition-colors"
              :class="{ 'bg-pixel-accent': isCurrentRoute(menu) }"
            >
              <span class="mr-2">{{ menu.icon }}</span>
              {{ menu.title }}
            </router-link>
          </template>
        </nav>
      </div>
    </header>

    <!-- 主内容区域 -->
    <main class="flex-grow container mx-auto p-4 sm:p-8 relative flex gap-8 items-start">
      <!-- 动态背景元素 -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <!-- Home/Default: 云朵 -->
        <template v-if="themeClass === 'theme-home' || themeClass === 'theme-default'">
          <div class="pixel-cloud absolute top-10 left-[-100px] opacity-60 animate-cloud-1"></div>
          <div class="pixel-cloud absolute top-40 left-[-200px] opacity-40 animate-cloud-2 scale-75"></div>
          <div class="pixel-cloud absolute top-20 left-[-300px] opacity-30 animate-cloud-3 scale-50"></div>
        </template>
        
        <!-- Articles: 星星 -->
        <template v-if="themeClass === 'theme-articles'">
          <div v-for="n in 20" :key="n" class="pixel-star" :style="{ top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', animationDelay: Math.random() * 2 + 's' }"></div>
        </template>
      </div>

      <!-- 任天堂主题装饰元素 (仅在宽屏显示) -->
      <div class="hidden 2xl:block absolute left-[-100px] top-20 animate-float">
        <!-- Mario 问号砖块 -->
        <svg width="64" height="64" viewBox="0 0 16 16" class="pixel-art">
          <rect width="16" height="16" fill="#000" />
          <rect x="1" y="1" width="14" height="14" fill="#fcd116" />
          <rect x="1" y="1" width="14" height="1" fill="#fff5ab" />
          <rect x="1" y="1" width="1" height="14" fill="#fff5ab" />
          <rect x="14" y="2" width="1" height="13" fill="#d6a600" />
          <rect x="2" y="14" width="13" height="1" fill="#d6a600" />
          <!-- 问号 -->
          <path d="M5 4h6v2h-2v2h-2v-1h2v-1h-2v-2h-2z m2 6h2v2h-2z" fill="#d6a600" />
        </svg>
      </div>

      <div class="hidden 2xl:block absolute right-[-100px] top-40 animate-float-delayed">
        <!-- Zelda 三角力量 -->
        <svg width="64" height="64" viewBox="0 0 16 16" class="pixel-art">
          <path d="M8 1l-4 7h8z M4 8l-4 7h8z M12 8l-4 7h8z" fill="#fcd116" stroke="#d6a600" stroke-width="0.5" />
        </svg>
      </div>

      <div class="hidden 2xl:block absolute left-[-80px] bottom-20 animate-bounce-slow">
        <!-- Pokemon 精灵球 -->
        <svg width="64" height="64" viewBox="0 0 16 16" class="pixel-art">
          <rect x="5" y="1" width="6" height="14" fill="#000" />
          <rect x="1" y="5" width="14" height="6" fill="#000" />
          <rect x="3" y="2" width="10" height="12" fill="#000" />
          <rect x="2" y="3" width="12" height="10" fill="#000" />
          <!-- 上半红 -->
          <rect x="5" y="2" width="6" height="1" fill="#e70012" />
          <rect x="3" y="3" width="10" height="1" fill="#e70012" />
          <rect x="2" y="4" width="12" height="1" fill="#e70012" />
          <rect x="2" y="5" width="12" height="1" fill="#e70012" />
          <rect x="2" y="6" width="12" height="1" fill="#e70012" />
          <rect x="2" y="7" width="5" height="1" fill="#e70012" />
          <rect x="9" y="7" width="5" height="1" fill="#e70012" />
          <!-- 下半白 -->
          <rect x="2" y="8" width="5" height="1" fill="#fff" />
          <rect x="9" y="8" width="5" height="1" fill="#fff" />
          <rect x="2" y="9" width="12" height="1" fill="#fff" />
          <rect x="2" y="10" width="12" height="1" fill="#fff" />
          <rect x="2" y="11" width="12" height="1" fill="#fff" />
          <rect x="3" y="12" width="10" height="1" fill="#fff" />
          <rect x="5" y="13" width="6" height="1" fill="#fff" />
          <!-- 中间按钮 -->
          <rect x="6" y="6" width="4" height="4" fill="#000" />
          <rect x="7" y="7" width="2" height="2" fill="#fff" />
        </svg>
      </div>

      <!-- 更多背景元素 (随机散布) -->
      <div class="hidden xl:block absolute right-[10%] top-[60%] animate-float" style="animation-delay: 2s">
         <!-- 塞尔达卢比 (Rupee) -->
         <svg width="32" height="32" viewBox="0 0 16 16" class="pixel-art">
           <path d="M4 4 L8 0 L12 4 L12 10 L8 14 L4 10 Z" fill="#4ade80" stroke="#166534" stroke-width="1"/>
           <path d="M6 5 L8 3 L10 5 L10 9 L8 11 L6 9 Z" fill="#86efac" />
         </svg>
      </div>

      <div class="hidden xl:block absolute left-[5%] bottom-[10%] animate-bounce-slow" style="animation-delay: 1.5s">
         <!-- 马里奥水管 -->
         <svg width="48" height="48" viewBox="0 0 16 16" class="pixel-art">
           <rect x="2" y="0" width="12" height="4" fill="#22c55e" stroke="#000" stroke-width="1" />
           <rect x="3" y="4" width="10" height="12" fill="#22c55e" stroke="#000" stroke-width="1" />
           <!-- 高光 -->
           <rect x="4" y="1" width="1" height="2" fill="#86efac" />
           <rect x="5" y="5" width="1" height="10" fill="#86efac" />
         </svg>
      </div>

      <div class="hidden xl:block absolute right-[20%] top-[20%] animate-float" style="animation-delay: 0.5s">
         <!-- 马里奥金币 -->
         <svg width="32" height="32" viewBox="0 0 16 16" class="pixel-art">
            <path d="M4 2h8v12h-8z" fill="#fcd116" stroke="#d6a600" stroke-width="1"/>
            <rect x="6" y="4" width="2" height="8" fill="#fff5ab" />
         </svg>
      </div>

      <!-- 主要内容容器 -->
      <!-- 添加 text-gray-900 dark:text-gray-100 以强制文字颜色，解决 Light Mode 下 Articles 主题文字看不清的问题 -->
      <div class="flex-grow w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm pixel-border p-6 min-h-[60vh] relative overflow-hidden z-10 transition-all duration-300 text-gray-900 dark:text-gray-100">
        <!-- 装饰性像素元素 -->
        <div class="absolute top-2 right-2 w-4 h-4 bg-pixel-secondary opacity-50"></div>
        <div class="absolute bottom-2 left-2 w-4 h-4 bg-pixel-primary opacity-50"></div>
        
        <router-view v-slot="{ Component, route }">
          <transition name="page" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>

      <!-- 右侧侧边栏：TOC 和 最近更新 -->
      <aside class="hidden lg:block w-72 shrink-0 space-y-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar p-4">
        <!-- 文章目录 (仅当有 currentToc 时显示) -->
        <div v-if="blogStore.currentToc.length > 0" class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm pixel-border p-4 text-gray-900 dark:text-gray-100">
          <h3 class="font-pixel text-sm mb-4 border-b-2 border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2">
            <span class="text-pixel-primary">📑</span> 目录
          </h3>
          <ul class="space-y-2 text-sm">
            <li 
              v-for="item in blogStore.currentToc" 
              :key="item.id"
              :class="{'pl-4': item.level > 2, 'pl-8': item.level > 3}"
            >
              <a 
                :href="'#' + item.id" 
                class="block transition-colors truncate border-l-2 pl-2 py-1"
                :class="[
                  blogStore.activeHeadingId === item.id 
                    ? 'border-pixel-primary text-pixel-primary font-bold bg-pixel-primary/10' 
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-pixel-primary dark:hover:text-pixel-primary hover:border-gray-300'
                ]"
                @click.prevent="scrollToHeading(item.id)"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- 最近更新 (始终显示) -->
        <div class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm pixel-border p-4 text-gray-900 dark:text-gray-100">
          <h3 class="font-pixel text-sm mb-4 border-b-2 border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2">
            <span class="text-pixel-primary">★</span> 最近更新
          </h3>
          <ul class="space-y-3">
            <li v-for="article in blogStore.recentArticles" :key="article.path">
              <router-link 
                :to="{ path: getArticleLink(article), query: { path: article.path } }"
                class="group block hover:translate-x-1 transition-transform"
              >
                <div class="text-xs font-bold text-gray-800 group-hover:text-pixel-primary truncate">
                  {{ article.title || '无标题' }}
                </div>
                <div class="text-[10px] text-gray-500 font-pixel mt-1 flex justify-between">
                  <span>{{ formatDate(article.date) }}</span>
                  <span class="bg-gray-200 px-1 rounded">{{ article.category }}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </aside>
    </main>

    <!-- 页脚 -->
    <footer class="bg-pixel-dark text-white p-8 text-center font-pixel text-xs mt-auto">
      <p>&copy; {{ new Date().getFullYear() }} {{ blogStore.siteConfig.site?.title || '像素博客' }}. 基于 Vue 3 & Vite 构建。</p>
      
      <!-- 社交链接 -->
      <div class="mt-6 flex justify-center gap-6" v-if="blogStore.siteConfig.social">
        <a 
          v-if="blogStore.siteConfig.social.github" 
          :href="blogStore.siteConfig.social.github" 
          target="_blank" 
          class="hover:text-pixel-primary transition-colors flex flex-col items-center gap-1 group"
        >
          <div class="w-8 h-8 bg-white text-black rounded flex items-center justify-center pixel-border-sm group-hover:bg-pixel-primary group-hover:text-white transition-colors">
            <!-- GitHub Icon -->
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <span>GITHUB</span>
        </a>

        <a 
          v-if="blogStore.siteConfig.social.bilibili" 
          :href="blogStore.siteConfig.social.bilibili" 
          target="_blank" 
          class="hover:text-pixel-secondary transition-colors flex flex-col items-center gap-1 group"
        >
          <div class="w-8 h-8 bg-white text-black rounded flex items-center justify-center pixel-border-sm group-hover:bg-pixel-secondary group-hover:text-white transition-colors">
            <!-- Bilibili Icon (Simple TV) -->
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
              <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267c.053-.071.116-.142.187-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c0-.373.129-.689.387-.947.258-.257.574-.386.946-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c0-.373.129-.689.387-.947.258-.257.574-.386.946-.386z"/>
            </svg>
          </div>
          <span>BILIBILI</span>
        </a>
      </div>
      
      <div class="mt-6 flex justify-center gap-4">
        <div class="w-2 h-2 bg-pixel-primary animate-pulse"></div>
        <div class="w-2 h-2 bg-pixel-secondary animate-pulse delay-75"></div>
        <div class="w-2 h-2 bg-pixel-accent animate-pulse delay-150"></div>
      </div>
    </footer>

    <!-- 全局组件 -->
    <MusicPlayer />
    
    <!-- 点击特效容器 -->
    <div ref="particleContainer" class="fixed inset-0 pointer-events-none z-[9999]"></div>

    <!-- Fake Loading Screen (Mario Style) -->
    <transition name="fade">
      <div v-if="isFakeLoading" class="fixed inset-0 z-[10001] bg-black flex flex-col items-center justify-center overflow-hidden">
        <!-- 标题 -->
        <div class="text-white font-pixel text-2xl mb-12 animate-pulse">正在加载世界...</div>
        
        <!-- 游戏场景 -->
        <div class="w-full max-w-2xl relative h-32 border-b-4 border-white">
          <!-- 水管 (终点 - 开口朝左) -->
          <div class="absolute right-0 bottom-0 w-16 h-16 z-10">
            <svg viewBox="0 0 16 16" class="w-full h-full">
              <!-- 管口 (左侧) -->
              <rect x="0" y="2" width="4" height="12" fill="#22c55e" stroke="#000" stroke-width="0.5" />
              <!-- 管身 (右侧) -->
              <rect x="4" y="3" width="12" height="10" fill="#22c55e" stroke="#000" stroke-width="0.5" />
              <!-- 高光 -->
              <rect x="1" y="3" width="1" height="10" fill="#86efac" />
              <rect x="4" y="4" width="12" height="2" fill="#86efac" />
            </svg>
          </div>
          
          <!-- 马里奥 (移动) -->
          <div 
            class="absolute bottom-0 w-12 h-12 transition-all duration-100 ease-linear"
            :style="{ left: `calc(${loadingProgress}% - 3rem)` }"
          >
            <!-- 简单的像素马里奥 SVG -->
            <svg viewBox="0 0 12 16" class="w-full h-full animate-bounce-fast">
               <rect x="3" y="0" width="5" height="1" fill="#f00" />
               <rect x="2" y="1" width="9" height="1" fill="#f00" />
               <!-- 脸 -->
               <rect x="2" y="2" width="7" height="1" fill="#fc9" />
               <rect x="9" y="2" width="1" height="1" fill="#000" />
               <rect x="2" y="3" width="1" height="1" fill="#fc9" />
               <rect x="4" y="3" width="1" height="1" fill="#fc9" />
               <rect x="8" y="3" width="3" height="1" fill="#000" />
               <!-- 身体 -->
               <rect x="2" y="5" width="7" height="3" fill="#00f" />
               <rect x="1" y="6" width="1" height="2" fill="#f00" />
               <rect x="9" y="6" width="1" height="2" fill="#f00" />
            </svg>
          </div>
        </div>
        
        <!-- 进度文字 -->
        <div class="mt-4 font-pixel text-white text-xl">{{ Math.floor(loadingProgress) }}%</div>
      </div>
    </transition>

    <!-- Click to Start Overlay -->
    <transition name="fade">
      <div v-if="showStartOverlay" class="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center backdrop-blur-sm" @click="startGame">
        <div class="text-center animate-bounce cursor-pointer">
          <div class="font-pixel text-4xl text-white mb-4 text-stroke tracking-widest">点击开始</div>
          <div class="font-pixel text-sm text-gray-400 animate-pulse">点击任意处进入</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, computed, ref, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '../stores/blog'
import { format } from 'date-fns'
import MusicPlayer from './MusicPlayer.vue'
import Search from './Search.vue'
import { playSound } from '../utils/sound'
import { resolvePath } from '../utils/image'

const blogStore = useBlogStore()
const route = useRoute()
const isDark = ref(false)
const particleContainer = ref(null)
const showStartOverlay = ref(false) // 初始不显示，等待加载完成后显示
const isFakeLoading = ref(true)
const loadingProgress = ref(0)

const startGame = () => {
  showStartOverlay.value = false
  playSound('start')
  // 触发自定义事件，让 MusicPlayer 监听并开始播放
  window.dispatchEvent(new Event('start-game'))
}

const startFakeLoading = () => {
  const duration = 2000 // 2秒
  const startTime = Date.now()
  
  const updateProgress = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min((elapsed / duration) * 100, 100)
    
    loadingProgress.value = progress
    
    if (progress < 100) {
      requestAnimationFrame(updateProgress)
    } else {
      // 加载完成
      setTimeout(() => {
        isFakeLoading.value = false
        showStartOverlay.value = true
      }, 200)
    }
  }
  
  requestAnimationFrame(updateProgress)
}

const createParticle = (x, y) => {
  if (!particleContainer.value) return
  
  const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#54a0ff']
  const particleCount = 8
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.classList.add('absolute', 'w-2', 'h-2')
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    particle.style.left = `${x}px`
    particle.style.top = `${y}px`
    
    // Random velocity
    const angle = Math.random() * Math.PI * 2
    const velocity = 2 + Math.random() * 4
    const vx = Math.cos(angle) * velocity
    const vy = Math.sin(angle) * velocity
    
    particleContainer.value.appendChild(particle)
    
    let opacity = 1
    let posX = x
    let posY = y
    
    const animate = () => {
      opacity -= 0.05
      posX += vx
      posY += vy
      
      particle.style.opacity = opacity
      particle.style.transform = `translate(${posX - x}px, ${posY - y}px)`
      
      if (opacity > 0) {
        requestAnimationFrame(animate)
      } else {
        particle.remove()
      }
    }
    
    requestAnimationFrame(animate)
  }
}

const handleGlobalClick = (e) => {
  createParticle(e.clientX, e.clientY)
}

onMounted(() => {
  blogStore.init()
  window.addEventListener('click', handleGlobalClick)
  
  // Check for saved theme or system preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }

  // 启动假加载
  startFakeLoading()
})

onUnmounted(() => {
  window.removeEventListener('click', handleGlobalClick)
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const isCurrentRoute = (menu) => {
  if (menu.type === 'home') {
    return route.path === '/'
  }
  return route.path.includes(menu.id)
}

// 根据路由决定主题
const themeClass = computed(() => {
  const path = route.path
  if (path === '/') return 'theme-home'
  if (path.includes('/Articles')) return 'theme-articles'
  if (path.includes('/About')) return 'theme-about'
  return 'theme-default'
})

const getArticleLink = (article) => {
  const menu = blogStore.menus.find(m => m.id === article.category)
  if (menu && menu.type !== 'home') {
    return '/' + menu.id
  }
  return '/'
}

const formatDate = (date) => {
  if (!date) return ''
  return format(new Date(date), 'MM/dd')
}

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes bounce-fast {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.animate-bounce-fast {
  animation: bounce-fast 0.2s infinite;
}
</style>
