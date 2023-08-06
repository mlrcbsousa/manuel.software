import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

const buildSourceDir = './src'
const buildSourcesPath = resolve(__dirname, buildSourceDir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        quietDeps: true,
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': buildSourcesPath,
    },
  },
  build: {},
})
