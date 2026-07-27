import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { ZipArchive } from 'archiver';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ローカルビルド時に静的HTMLをコピーするプラグイン
function copyStaticHtmlPlugin(outDir, files) {
  return {
    name: 'copy-static-html',
    apply: 'build',
    // closeBundle は出力ディレクトリの書き出し前に呼ばれるため writeBundle を使う
    writeBundle() {
      for (const file of files) {
        fs.copyFileSync(file, path.join(outDir, file));
      }
    }
  };
}

// sampleフォルダをzipにまとめるプラグイン
function zipSamplePlugin(outDir) {
  return {
    name: 'zip-sample',
    apply: 'build',
    // closeBundle は出力ディレクトリの書き出し前に呼ばれるため writeBundle を使う
    writeBundle() {
      return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(path.join(outDir, 'sample.zip'));
        const archive = new ZipArchive();
        output.on('close', resolve);
        archive.on('error', reject);
        archive.pipe(output);
        archive.directory('sample/', 'sample');
        archive.finalize();
      });
    }
  };
}

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

export default defineConfig(({ mode }) => ({
  root: '.',
  base: mode === 'ghpages' ? '/tma-front/' : './',
  plugins: mode === 'ghpages'
    ? [copyStaticHtmlPlugin('build', ['sample-config.png']), zipSamplePlugin('build')]
    : [localFileCompatPlugin(), copyStaticHtmlPlugin('build', ['changelog.html', 'doc.html', 'sample-config.png']), zipSamplePlugin('build')],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: mode === 'ghpages'
        ? { main: 'index.html', changelog: 'changelog.html', doc: 'doc.html' }
        : 'index.html',
      output: { format: mode === 'ghpages' ? 'es' : 'iife' }
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
}));
