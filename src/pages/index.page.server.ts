import { fetchPosts } from "~/services";

export async function addPageContext(pageContext: any) {
  const postsResponse = await fetchPosts({
    fields: [
      "ID",
      "date",
      "title",
      "slug",
      "excerpt",
      "author",
      "password",
      "type",
      "post_thumbnail",
      "tags",
      "categories",
    ],
  });
  const pageProps = { postsResponse };
  return { pageProps };
}
