const apiVersion = '/rest/v1.1';
const prefixSites = `${apiVersion}/sites/ebugkia.wordpress.com`;

/**
 * {@link https://developer.wordpress.com/docs/api}
 */
export const ServicePath = {
  wordpressApiUrl: 'https://public-api.wordpress.com',
  posts: `${prefixSites}/posts`,
  likePost: (postId: string) => `${prefixSites}/posts/${postId}/like/new`,
  tags: `${prefixSites}/tags`,
  categories: `${prefixSites}/categories`,
  menus: `${prefixSites}/menus`,
  commentsOnPost: (postId: string) => `${prefixSites}/posts/${postId}/reply`,
};
