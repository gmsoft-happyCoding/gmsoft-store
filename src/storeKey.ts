/**
 *
 * @Author GM20171202
 * @Date 2019-09-22 22:24:41
 */

const STORE_KEY_SIGN = '__gmsoft-store__';

const STORE_KEY_BIZ_DIVIDER_SIGN = '__case__';

const getTimeStamp = () => `${+new Date()}`;

/**
 * 生成 key
 * @example
 * // => "__gmsoft-store__1569162574118__case__blablabla"
 * getStoreKey()
 */
export const getStoreKey = (bizKey: string) =>
  `${STORE_KEY_SIGN}${getTimeStamp}${STORE_KEY_BIZ_DIVIDER_SIGN}${bizKey}`;

/**
 * 判定 key 是否是 storeKey
 * @param key 
 */
export const isStoreKey = (key?: string) =>
  !!key && key.startsWith(STORE_KEY_SIGN) && key.includes(STORE_KEY_BIZ_DIVIDER_SIGN);

/**
 * 从 storeKey 中取出 时间戳
 * @param storeKey 
 */
export const getTimeStampInStoreKey = (storeKey: string): number =>
  +storeKey.split(STORE_KEY_BIZ_DIVIDER_SIGN)[0].split(STORE_KEY_SIGN)[1];
