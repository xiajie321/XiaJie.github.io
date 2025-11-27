import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/XiaJie.github.io/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@root': path.resolve(__dirname, './src/Root')
    }
  },
  assetsInclude: ['**/*.md', '**/*.yaml', '**/*.yml'] // 允许导入 md 和 yaml 文件
})
