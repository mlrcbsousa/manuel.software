import { mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    include: ['src/**/*.test.ts'],
    exclude: ['src/**/*.vue.test.ts'],
    // https://github.com/bcoe/c8#cli-options--configuration
    // open coverage/index.html for detailed coverage results
    coverage: {
      all: true,
      reporter: ['cobertura', 'text', 'text-summary', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['src/mocks', '**/types', '**/types.ts', '**/config', '**/*.vue', 'src/main.ts', '**/*.test.*'],
    },
    environment: 'happy-dom',
  },
})
