import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import { getPostBySlug } from '@/services';

export async function addPageContext(pageContext: PageContextBuiltIn) {
  const { slug } = pageContext.routeParams;
  const post = await getPostBySlug(slug);
  const pageProps = { post };
  return { pageProps };
}
