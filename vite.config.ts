import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

export default defineConfig({
  /*
   * Base must be relative because usually the app runs from a root of the domain
   * but sometimes it's deployed to a subdirectory, e.g. for pull request reviews,
   * or when forking the repo.
   */
  base: './',
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    }),
    viteTsconfigPaths(),
  ],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 4000
    port: 4000,
  },
  build: {
    outDir: path.resolve(__dirname, 'docs'),
  },
  esbuild: {
    include: /\.[jt]s[x]?$/,
    exclude: [],
    loader: 'jsx',
  },
  css: {
    preprocessorOptions: {
      sass: {
        includePaths: [
          path.resolve(__dirname, './src/styles'),
          path.resolve(__dirname, './node_module/simple-line-icons/sass'),
        ],
      },
    },
  },
});
