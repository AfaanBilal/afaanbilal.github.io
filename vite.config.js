import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

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
  // vite-ssg: statically prerender only the content routes.
  // Dynamic /project/:name pages depend on the GitHub API and stay client-rendered.
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: () => ['/', '/privacy'],
  },
}))
