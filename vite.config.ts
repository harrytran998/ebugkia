import path from 'path';
import Vue from '@vitejs/plugin-vue';
import SSR from 'vite-plugin-ssr/plugin';
import ViteSvg from 'vite-svg-loader';
import { UserConfig } from 'vite';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';

const config: UserConfig = {
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    ViteSvg({
      svgoConfig: {
        multipass: false,
        datauri: 'base64',
      },
    }),
    SSR(),
    ViteComponents({
      globalComponentsDeclaration: true,
      extensions: ['vue', 'ts'],
    }),
    WindiCSS({
      scan: {
        dirs: ['src/pages', 'src/components'],
        fileExtensions: ['vue', 'js', 'ts', 'html'],
      },
    }),
  ],
  server: {
    hmr: {
      protocol: 'ws',
      port: 3002,
    },
  },
};

export default config;
