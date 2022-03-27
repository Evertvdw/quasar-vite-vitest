/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import AutoImport from 'unplugin-auto-import/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: 'test/setup-file.ts',
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: './test/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'pinia',
        'quasar',
        {
          '@vue/test-utils': ['mount', 'flushPromises'],
          'test/plugins': ['installQuasar', 'installPinia'],
        },
      ],
    }),
    quasar({
      sassVariables: 'src/quasar-variables.scss',
    }),
    tsconfigPaths(),
  ],
});
