/**
 * Shared `@svgr` options for the icon system.
 *
 * Both pipelines read from here so the components rendered in Storybook are
 * identical to the ones published in `dist/`:
 *
 * - `rollup.config.mjs` → `@svgr/rollup` (the published build)
 * - `vite.config.mjs`   → `vite-plugin-svgr` (Storybook, which merges the
 *   project vite config)
 *
 * To drop the icon system, delete this file along with both plugin entries.
 * See the "Removing the icon system" section of `stories/components/Icons.mdx`.
 */
export const svgrOptions = {
  // Declared explicitly so both pipelines run the same plugins. `@svgr/rollup`
  // defaults to svgo + jsx, but `vite-plugin-svgr` only registers jsx, which
  // would let svgo-sensitive icons look right in Storybook and break once
  // published.
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  typescript: true,
  exportType: 'default',
  // Must stay 'classic'. `@svgr/rollup` v8 post-processes svgr's output with a
  // hardcoded classic `@babel/preset-react`, so with 'automatic' svgr skips the
  // `import * as React from 'react'` that the emitted `React.createElement`
  // calls need, and the published bundle throws `React is not defined`.
  jsxRuntime: 'classic',
  // No intrinsic width/height: icons size themselves from css.
  dimensions: false,
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // Required: without a viewBox the icon cannot scale.
            removeViewBox: false,
          },
        },
      },
    ],
  },
};

export default svgrOptions;
