import { normalizePost } from '@/utils/normalize';

import { HttpClient } from './http';
import { ServicePath } from './servicePath';

const wordpressApi = new HttpClient({ baseUrl: ServicePath.wordpressApiUrl });

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
  'post_thumbnail',
  'tags',
  'categories',
];

export const fetchPosts = async (_params?: FetchPostsOption): Promise<Post[]> => {
  let params: FetchPostsOption = {};
  if (_params?.fields) {
    params = { ..._params, fields: [..._params.fields, defaultPostFields].join(',') };
  }
  const queryString = new URLSearchParams(params).toString();
  const response = await wordpressApi.get<PostsResponse>(`${ServicePath.posts}?${queryString}`);
  return response.posts.map<Post>(post => normalizePost(post));
};

export const getPostBySlug = async (slug: string): Promise<FullPost> => {
  const fields = [...defaultPostFields, 'content'].join(',');
  const post: FullPost = await wordpressApi.get(
    `${ServicePath.posts}/slug:${slug}?fields=${fields}`,
  );
  return normalizePost<FullPost>(post);
};

export const getTags = async () => {
  const tags = await wordpressApi.get(ServicePath.tags);
  return tags;
};

export const getCategories = async () => {
  const categories = await wordpressApi.get(ServicePath.categories);
  return categories;
};
