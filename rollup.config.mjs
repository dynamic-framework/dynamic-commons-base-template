import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

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
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
    postcss({
      extract: 'css/dynamic-commons.css',
      plugins: [autoprefixer],
    }),
  ],
  external: (id) => !/^(\.|\/)/.test(id),
};
