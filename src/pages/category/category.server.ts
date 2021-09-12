import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import { getCategories } from '@/services';

export const addPageContext = async (pageContext: PageContextBuiltIn) => {
  const categories = await getCategories();

  console.log('addPageContext  👻  tags', categories);
  const pageProps = { categories };
  return { pageProps };
};
