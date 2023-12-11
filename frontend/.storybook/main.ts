import type { StorybookConfig } from '@storybook/vue3-vite';

import { resolve } from 'path';

// -------------------------------------------------------------------------------------------------

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(tsx|ts|jsx|js)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: resolve(__dirname, '..', 'vite.config.ts'),
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['./public'],
};

export default config;
