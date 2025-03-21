module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {},
              },
            ],
          },
          {
            test: /\.s[ac]ss$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {

                  importLoaders: 2,
                },
              },
              require.resolve('resolve-url-loader'),
              {
                loader: require.resolve('sass-loader'),
                options: {
                  // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                  implementation: require.resolve('sass'),
                  sourceMap: true,
                  sassOptions: {},
                },
              },
            ],
          },
        ],
      }
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
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
    builder: '@storybook/builder-vite',
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

