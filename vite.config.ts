import { defineConfig } from 'vite';

// Adjust base for GitHub Pages: '/<repo-name>/'
// Using workspace folder name as default: 'puszacode-2025'
export default defineConfig({
  base: '/puszacode-2025/',
  optimizeDeps: {
    include: ['markdown-it']
  }
});
