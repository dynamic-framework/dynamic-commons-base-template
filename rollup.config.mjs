import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sass from 'rollup-plugin-sass';

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
    sass({
      outputStyle: 'compressed',
      output: 'dist/styles.css',
    }),
  ],
  external: (id) => !/^(\.|\/)/.test(id),
};
