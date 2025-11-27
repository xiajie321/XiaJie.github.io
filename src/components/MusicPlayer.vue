<template>
  <div 
    ref="playerRef"
    class="fixed z-50 select-none"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
  >
    <div 
      class="bg-gray-100 pixel-border p-2 w-64 shadow-xl"
      @mousedown="startDrag"
    >
      <!-- 标题栏/拖拽手柄 -->
      <div class="bg-pixel-dark text-white px-2 py-1 mb-2 text-xs font-pixel flex justify-between items-center cursor-move">
        <span>音乐播放器</span>
        <div class="flex gap-1">
          <div class="w-2 h-2 rounded-full bg-red-500"></div>
          <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
        </div>
      </div>

      <!-- 播放器主体 -->
      <div class="flex flex-col gap-2">
        <!-- 显示屏 -->
        <div class="bg-[#9bbc0f] p-2 pixel-border-sm inner-shadow font-pixel text-xs text-[#0f380f] overflow-hidden h-8 flex items-center">
          <div class="whitespace-nowrap animate-marquee" v-if="currentTrack">
            ♪ {{ currentTrackName }} ♪
          </div>
          <div v-else>未插入磁带</div>
        </div>

        <!-- 控制区 -->
        <div class="flex flex-col gap-2 mt-1">
          <!-- 播放控制 -->
          <div class="flex justify-between w-full px-2">
            <button 
              @click="toggleLoopMode"
              class="w-8 h-8 flex items-center justify-center bg-gray-600 text-white pixel-btn-sm hover:brightness-110 active:scale-95 text-xs"
              :title="loopMode === 'single' ? '单曲循环' : '顺序播放'"
            >
              {{ loopMode === 'single' ? '1' : '∞' }}
            </button>
            
            <button 
              @click="prevTrack"
              class="w-8 h-8 flex items-center justify-center bg-pixel-secondary text-white pixel-btn-sm hover:brightness-110 active:scale-95"
            >
              <<
            </button>

            <button 
              @click="togglePlay"
              class="w-8 h-8 flex items-center justify-center bg-pixel-primary text-white pixel-btn-sm hover:brightness-110 active:scale-95"
            >
              {{ isPlaying ? '||' : '▶' }}
            </button>
            
            <button 
              @click="nextTrack"
              class="w-8 h-8 flex items-center justify-center bg-pixel-secondary text-white pixel-btn-sm hover:brightness-110 active:scale-95"
            >
              >>
            </button>
          </div>

          <!-- 音量控制 -->
          <div class="flex items-center gap-1 w-full">
            <span class="text-[10px] font-pixel whitespace-nowrap">音量</span>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.1" 
              v-model="volume"
              @input="updateVolume"
              class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer pixel-range"
            >
          </div>
        </div>
      </div>
    </div>
    
    <audio ref="audioPlayer" @ended="handleEnded" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isPlaying = ref(false)
const playlist = ref([])
const currentIndex = ref(0)
const audioPlayer = ref(null)
const volume = ref(0.5)
const loopMode = ref('sequence') // 'sequence' | 'single'

// 拖拽相关状态
const playerRef = ref(null)
const position = ref({ x: window.innerWidth - 300, y: window.innerHeight - 150 })
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })

// 读取音乐文件
const musicFiles = import.meta.glob('../Root/Music/*.{mp3,wav,ogg}', { eager: true, as: 'url' })

onMounted(() => {
  // 构建播放列表
  playlist.value = Object.keys(musicFiles).map(path => ({
    path: musicFiles[path],
    name: path.split('/').pop()
  }))
  
  if (playlist.value.length > 0) {
    loadTrack(0)
  }
  
  // 初始化音量
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value
  }

  // 全局鼠标事件监听
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('resize', handleResize)
  window.addEventListener('start-game', handleStartGame)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('start-game', handleStartGame)
})

const handleStartGame = () => {
  // 尝试播放第一首歌
  if (playlist.value.length > 0 && !isPlaying.value) {
    // 设置为播放状态
    isPlaying.value = true
    // 尝试播放，如果被浏览器阻止，控制台会有警告
    if (audioPlayer.value) {
      audioPlayer.value.play().catch(e => {
        console.log('Autoplay blocked even after interaction?', e)
        isPlaying.value = false
      })
    }
  }
}

const currentTrack = computed(() => playlist.value[currentIndex.value])

const currentTrackName = computed(() => {
  if (!currentTrack.value) return ''
  return currentTrack.value.name
})

const loadTrack = (index) => {
  if (index >= 0 && index < playlist.value.length) {
    currentIndex.value = index
    audioPlayer.value.src = playlist.value[index].path
    audioPlayer.value.volume = volume.value // 确保切歌时音量一致
    
    if (isPlaying.value) {
      audioPlayer.value.play().catch(e => console.log('Autoplay blocked', e))
    }
  }
}

const togglePlay = () => {
  if (playlist.value.length === 0) return
  
  if (isPlaying.value) {
    audioPlayer.value.pause()
  } else {
    audioPlayer.value.play().catch(e => console.log('Playback failed', e))
  }
  isPlaying.value = !isPlaying.value
}

const prevTrack = () => {
  if (playlist.value.length === 0) return
  
  let prevIndex = currentIndex.value - 1
  if (prevIndex < 0) {
    prevIndex = playlist.value.length - 1
  }
  loadTrack(prevIndex)
  if (!isPlaying.value) {
    isPlaying.value = true
    audioPlayer.value.play()
  }
}

const nextTrack = () => {
  if (playlist.value.length === 0) return
  
  let nextIndex = currentIndex.value + 1
  if (nextIndex >= playlist.value.length) {
    nextIndex = 0
  }
  loadTrack(nextIndex)
  if (!isPlaying.value) {
    isPlaying.value = true
    audioPlayer.value.play()
  }
}

const handleEnded = () => {
  if (loopMode.value === 'single') {
    // 单曲循环：重置时间并播放
    audioPlayer.value.currentTime = 0
    audioPlayer.value.play()
  } else {
    // 顺序播放：下一首
    nextTrack()
  }
}

const toggleLoopMode = () => {
  loopMode.value = loopMode.value === 'sequence' ? 'single' : 'sequence'
}

const updateVolume = () => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value
  }
}

// 拖拽逻辑
const startDrag = (e) => {
  // 只有点击标题栏或背景时才拖动，避免影响按钮
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return
  
  isDragging.value = true
  dragOffset.value = {
    x: e.clientX - position.value.x,
    y: e.clientY - position.value.y
  }
}

const onDrag = (e) => {
  if (!isDragging.value) return
  
  let newX = e.clientX - dragOffset.value.x
  let newY = e.clientY - dragOffset.value.y
  
  // 边界检查
  const maxX = window.innerWidth - playerRef.value.offsetWidth
  const maxY = window.innerHeight - playerRef.value.offsetHeight
  
  position.value = {
    x: Math.min(Math.max(0, newX), maxX),
    y: Math.min(Math.max(0, newY), maxY)
  }
}

const stopDrag = () => {
  isDragging.value = false
}

const handleResize = () => {
  // 窗口调整大小时确保播放器不跑出屏幕
  const maxX = window.innerWidth - (playerRef.value?.offsetWidth || 256)
  const maxY = window.innerHeight - (playerRef.value?.offsetHeight || 120)
  
  if (position.value.x > maxX) position.value.x = maxX
  if (position.value.y > maxY) position.value.y = maxY
}
</script>

<style scoped>
.animate-marquee {
  animation: marquee 8s linear infinite;
  display: inline-block;
  padding-left: 100%;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.inner-shadow {
  box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2);
}

.pixel-btn-sm {
  box-shadow: 
    -2px 0 0 0 #2d3436,
    2px 0 0 0 #2d3436,
    0 -2px 0 0 #2d3436,
    0 2px 0 0 #2d3436,
    2px 2px 0 0 rgba(0,0,0,0.2);
}

/* 自定义 Range Input 样式 */
.pixel-range {
  -webkit-appearance: none;
  background: transparent;
}

.pixel-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 8px;
  background: #2d3436;
  cursor: pointer;
  margin-top: -4px;
  box-shadow: 1px 1px 0 rgba(0,0,0,0.2);
}

.pixel-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  background: #ddd;
  border: 1px solid #999;
}
</style>
