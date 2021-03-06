/**
 * @param val
 * @param type
 */
function is(val: unknown, type: string) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined';
export const isUndef = <T = any>(val?: T): val is T => !isDef(val);

export const isDev = process.env.NODE_ENV !== 'production';

/**
 * Type guard to filter out null values
 *
 * @param v
 */
export function isNotNull<T>(v: T | null): v is Exclude<T, null> {
  return v !== null;
}

/**
 * @param val
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

/**
 * @param val
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/**
 * @param val
 */
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

/**
 * @param val
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

/**
 * @param val
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

/**
 * @param val
 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (!val) {
    return true;
  }
  if (isArray(val)) {
    return val.length === 0;
  }

  if (isString(val)) {
    return val.trim().length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

/**
 * @param val
 */
export function isNotEmpty<T = unknown>(val: T): val is T {
  return !isEmpty(val);
}

/**
 * Use for case you validate multiple values is not empty
 *
 * @param args
 */
export function isNotEmpties(...args: any[]): boolean {
  if (args.length > 1) {
    return args.reduce((a, b) => a && isNotEmpty(b), true);
  }
  return false;
}
