import { dirname, join } from 'node:path';

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
        lazyCompilation: false,
      },
    },
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  core: {
    disableTelemetry: true,
  },
  staticDirs: [
    './public',
    '../dist',
  ],
  features: {
    buildStoriesJson: true,
  },
  docs: {
    autodocs: 'tag',
  },
};

