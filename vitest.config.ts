import { mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['src/**/*.test.ts'],
    exclude: ['src/**/*.vue.test.ts'],
    // https://github.com/bcoe/c8#cli-options--configuration
    // open coverage/index.html for detailed coverage results
    coverage: {
      all: true,
      reporter: ['cobertura', 'text', 'text-summary', 'html'],
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/mocks', '**/types', '**/types.ts', '**/config', 'src/main.ts', '**/*.test.*'],
    },
  },
})
