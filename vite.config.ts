import path from 'path'
import Vue from '@vitejs/plugin-vue'
import SSR from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'


const config: UserConfig = {
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [Vue(), SSR(), ViteComponents({
    globalComponentsDeclaration: true,
  })],
  server: {
    hmr: {
      protocol: 'ws',
      port: 3002
    }
  },
}

export default config
