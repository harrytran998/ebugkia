import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import { fetchPosts, getCategories, getTags } from '@/services';

export const addPageContext = async (pageContext: PageContextBuiltIn) => {
  const posts = await fetchPosts();
  const categories = await getCategories();
  const pageProps = { posts, categories };
  return { pageProps };
};
