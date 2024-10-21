import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // plugins: [react()]
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['**/*.test.ts'], // Pattern to include test files
    exclude: ['node_modules'], // Exclude specific folders
    reporters: ['default', 'junit'], // Add custom reporters
    threads: true, // Enable parallel test execution (by default, it’s true)
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      all: true, // Collect coverage from all files, not just the ones tested
      include: ['src/**/*.test.ts', '**/*.js'], // Include files for coverage
      exclude: ['node_modules/**', 'tests/**'], // Exclude files for coverage
    },
  },
})


