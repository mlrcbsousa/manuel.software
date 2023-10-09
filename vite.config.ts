import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from '@modyfi/vite-plugin-yaml'

const buildSourceDir = './src'
const buildSourcesPath = resolve(__dirname, buildSourceDir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [yaml(), vue()],
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
