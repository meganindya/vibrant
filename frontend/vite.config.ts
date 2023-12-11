import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import pluginVue from '@vitejs/plugin-vue';
import pluginEslint from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginVue(),
    pluginEslint({
      formatter: 'stylish',
    }),
    {
      name: 'md-plugin',

      transform(src, id) {
        if (/\.(md)$/.test(id)) {
          return {
            code: `const content = \`${src}\`; export default content;`,
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  envDir: './src/env',
});
