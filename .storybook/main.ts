import { StorybookConfig } from "@storybook/react-vite";
import { dirname, join, resolve } from "path";
import remarkGfm from 'remark-gfm';
import { mergeConfig } from "vite";

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    }
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  core: {
    disableTelemetry: true
  },
  staticDirs: [
    './public',
    '../dist',
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          'node_modules': resolve(__dirname, '../node_modules'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true,
          },
        },
      },
    });
  },
};

export default config;