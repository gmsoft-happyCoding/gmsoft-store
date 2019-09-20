/**
 * 获取 storage
 * @Author GM20171202
 * @Date 2019-09-20 16:41:18
 */
import { StorageTypes } from './StorageTypes.d';

export const getStorage = (type: StorageTypes) => {
  if (type === 'localStorage') {
    return localStorage;
  }
  return sessionStorage;
};
