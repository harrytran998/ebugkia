import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

export type PageProps = Record<string, any>;
export type PageContext = PageContextBuiltIn & {
  Page: any;
  pageProps?: PageProps;
  documentProps?: {
    title?: string;
    description?: string;
  };
};

export type Component = any;
