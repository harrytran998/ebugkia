declare module '*.vue' {
  import { ComponentOptions } from 'vue';

  const component: ComponentOptions;
  export default component;
}

declare module 'vite-plugin-ssr/plugin';

declare module '*.svg' {
  const component: any;
  export default component;
}
