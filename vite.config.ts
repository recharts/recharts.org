import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '/',
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
    loader: 'tsx',
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
