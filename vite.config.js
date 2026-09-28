import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Manual chunks only apply to the client bundle. During vite-ssg's SSR
        // pass, vue/vue-router are externalized and cannot be chunked.
        manualChunks: isSsrBuild ? undefined : {
          vue: ['vue', 'vue-router'],
          markdown: ['showdown', 'dompurify'],
        },
      },
    },
  },
  // vite-ssg: prerender the content routes plus every project snapshotted by
  // scripts/prerenderProjects.js. Projects without a snapshot stay client-rendered.
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: () => {
      let projects = []
      try { projects = JSON.parse(fs.readFileSync('public/projects/index.json', 'utf8')) } catch { }
      return ['/', '/privacy', ...projects.map((full) => `/project/${full}`)]
    },
  },
}))
