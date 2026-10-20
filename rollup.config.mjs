/* eslint-disable import/no-extraneous-dependencies */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

import { svgrOptions } from './svgr.config.mjs';

export default {
  input: {
    index: 'src/index.ts',
  },
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      sourcemap: true,
    },
  ],
  plugins: [
    // Icon system: compiles every imported `.svg` into a React component.
    // Must run before `typescript()` so the generated component is already
    // plain JS by the time the rest of the pipeline sees it.
    svgr(svgrOptions),
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
    postcss({
      extract: 'css/dynamic-commons.css',
      extensions: ['.css', '.scss'],
      use: [
        ['sass', {
          silenceDeprecations: ['legacy-js-api', 'import'],
          includePaths: ['node_modules'],
          quietDeps: true,
          verbose: false,
        }],
      ],
      plugins: [autoprefixer],
    }),
  ],
  external: (id) => !/^(\.|\/)/.test(id),
};
