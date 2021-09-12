import { formatDate } from './date';

export const getTags = (post: Post) => Object.keys(post.tags);

export const normalizePost = <T>(post: any): T => ({
  ...post,
  formattedDate: formatDate(post.date),
  categories: Object.keys(post.categories),
});

/**
 * @description Remove <tag-name></tag-name> on the string
 * @param {string} value - the value will be stripe
 * @returns {string} - the text value
 */
export const normalizeHtmlTag = (value: string): string =>
  value
    .replace(/<[^>]+>/gi, '')
    .replace(/&#8211;/g, '-')
    .replace(/&#8230;/g, '...');
