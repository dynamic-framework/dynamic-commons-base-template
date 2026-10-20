/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import { svgrOptions } from './svgr.config.mjs';

export default defineConfig({
  plugins: [
    react(),
    // Icon system for Storybook — `@storybook/react-vite` merges this config.
    // `@svgr/rollup` cannot be reused here: it only exposes a `transform` hook,
    // so vite's asset plugin resolves `.svg` to a data URI first and svgr never
    // sees the markup.
    svgr({
      svgrOptions,
      // `include` overrides the plugin default of `**/*.svg?react` so plain
      // `import Icon from './icon.svg'` works, matching the rollup build.
      include: '**/*.svg',
      // svgr emits TypeScript (`typescript: true`), but the plugin defaults to
      // a jsx-only loader that cannot parse type annotations. Both branches are
      // set because the plugin picks one based on the vite bundler: oxc on
      // rolldown-powered vite (v8+), esbuild on earlier versions.
      oxcOptions: { lang: 'tsx' },
      esbuildOptions: { loader: 'tsx' },
    }),
  ],
});
