import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';
import { codecovVitePlugin } from '@codecov/vite-plugin';

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
    /*
     * Put the Codecov Vite plugin after all other plugins
     * https://docs.codecov.com/docs/vite-quick-start
     */
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: 'recharts.org',
      uploadToken: process.env.CODECOV_TOKEN,
    }),
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
  test: {
    coverage: {
      provider: 'v8',
      include: ['src', 'test'],
    },
  },
});
