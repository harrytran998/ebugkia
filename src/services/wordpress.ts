import { formatDate } from '@/utils';
import { HttpClient } from './http';

const wordpressApi = new HttpClient({
  baseUrl: 'https://public-api.wordpress.com',
});

export interface FetchPostsOption extends Record<string, any> {
  /**
   * Return the Nth 1-indexed page of posts. Takes precedence over the offset parameter.
   */
  page?: number;
  /**
   * 0-indexed offset.
   */
  offset?: number;
  /**
   * The number of posts to return. Limit: 100. Default: 20.
   */
  number?: number;
  /**
   * Returns specified fields only. Comma-separated list. Example: fields=ID,title
   */
  fields?: string | string[];
  order?: 'DESC' | 'ASC';
  /**
    date: (default) Order by the created time of each post.
    modified: Order by the modified time of each post.
    title: Order lexicographically by the posts' titles.
    comment_count: Order by the number of comments for each post.
    ID: Order by post ID.
   */
  order_by?: string;
  /**
   * Specify the tag name or slug.
   */
  tag?: string;
  /**
   * Specify the category name or slug.
   */
  category?: string;
  /**
   * Author's user ID
   */
  author?: number;
  /**
   * Search query
   */
  search?: string;
  /**
   * Return posts dated after the specified datetime.
   */
  after?: Date;
  /**
   * Return posts dated before the specified datetime.
   */
  before?: Date;
}

export interface PostsResponse {
  posts: Post[];
  found: number;
}
export interface Author {
  ID: number;
  nice_name: string;
  avatar_URL: string;
  profile_URL: string;
}
export interface Post {
  ID: number;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  featured_image: string;
  author: Author;
  formattedDate: string;
}

export interface FullPost extends Post {
  content: string;
}

const normalizePost = <T>(post: any): T => ({
  ...post,
  formattedDate: formatDate(post.date),
});

const defaultPostFields = [
  'ID',
  'date',
  'title',
  'slug',
  'excerpt',
  'author',
  'password',
  'type',
  'featured_image',
  'tags',
  'categories',
];

export const fetchPosts = async (params: FetchPostsOption): Promise<PostsResponse> => {
  params.fields = defaultPostFields.join(',');
  const queryString = new URLSearchParams(params).toString();

  const response: PostsResponse = await wordpressApi.get(
    `/rest/v1.1/sites/ebugkia.wordpress.com/posts?${queryString}`,
  );
  return {
    ...response,
    posts: response.posts.map<Post>(normalizePost),
  };
};

export const getPostBySlug = async (slug: string): Promise<FullPost> => {
  const fields = defaultPostFields.concat('content').join(',');
  const post: FullPost = await wordpressApi.get(
    `/rest/v1.1/sites/ebugkia.wordpress.com/posts/slug:${slug}?fields=${fields}`,
  );
  return normalizePost<FullPost>(post);
};
