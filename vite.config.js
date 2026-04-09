import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// file:// で直接開けるようにするプラグイン
function localFileCompatPlugin() {
  return {
    name: 'local-file-compat',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html
          .replace(/\s+type="module"/g, ' defer')
          .replace(/\s+crossorigin/g, '');
      }
    }
  };
}

export default defineConfig({
  root: '.',
  base: './',
  plugins: [localFileCompatPlugin()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      output: { format: 'iife' }
    }
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'js/components'),
      'model':      path.resolve(__dirname, 'js/model'),
      'utils':      path.resolve(__dirname, 'js/utils'),
      'view-model': path.resolve(__dirname, 'js/view-model'),
    }
  },
  test: {
    environment: 'jsdom',
  }
});
