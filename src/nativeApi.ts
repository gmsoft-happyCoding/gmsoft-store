/**
 * 原生api操作
 */

import { StoreType } from './type.d';
import { throwError } from './tools';

const STORAGE_HOST_TYPE_MAP = {
  local: localStorage,
  session: sessionStorage,
};

export const setStorage = (type: StoreType, key: string, value: string): boolean => {
  if (!STORAGE_HOST_TYPE_MAP[type]) {
    throwError('setStorage, Unknown StoreType');
  }
  let success: boolean = false;
  try {
    STORAGE_HOST_TYPE_MAP[type].setItem(key, value);
    success = true;
  } catch (error) {
    success = false;
  }
  return success;
};

export const getStorage = (type: StoreType, key: string) => {
  if (!STORAGE_HOST_TYPE_MAP[type]) {
    throwError('getStorage, Unknown StoreType');
  }
  return STORAGE_HOST_TYPE_MAP[type].getItem(key);
};

export const removeStorage = (type: StoreType, key: string) => {
  if (!STORAGE_HOST_TYPE_MAP[type]) {
    throwError('removeStorage, Unknown StoreType');
  }
  STORAGE_HOST_TYPE_MAP[type].removeItem(key);
};

export const getStorageKeys = (type: StoreType) => {
  if (!STORAGE_HOST_TYPE_MAP[type]) {
    throwError('getStorageKeys, Unknown StoreType');
  }
  return Object.keys(STORAGE_HOST_TYPE_MAP[type]);
};
