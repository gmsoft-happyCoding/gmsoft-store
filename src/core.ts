import { setStorage, removeStorage, getStorage, getStorageKeys } from './nativeApi';
import { StoreType, SetParams, GetParams } from './type.d';
import {
  transformJSON,
  safeParseJSON,
  getTimestamp,
  throwError,
  createArrWithSize,
  isString,
} from './tools';
import { wrapKey, wrapValue, isGroupKey, splitGroupKey } from './wrap';
import { STORE_MARK } from './config';

export const removeStoreBy = (type: StoreType, cb: (key: string) => boolean) => {
  getStorageKeys(type)
    .filter(cb)
    .map(key => {
      removeStorage(type, key);
    });
};

export const clearStore = (type: StoreType) => {
  removeStoreBy(type, key => key.startsWith(STORE_MARK));
};

const tryDoSetStore = (type: StoreType, { key, freeze, ...restParams }: SetParams) =>
  setStorage(type, wrapKey({ key, freeze }), transformJSON(wrapValue(restParams)));

export const setStore = (type: StoreType, params: SetParams) => {
  const { groupKeysMax, key } = params;
  if (groupKeysMax && isGroupKey(key)) {
    // 是分组key 并且设置了 分组上限
    const martchGroupKeys = getStorageKeys(type).filter(iKey =>
      iKey.startsWith(splitGroupKey(key)[0])
    );
    const diff = martchGroupKeys.length - groupKeysMax;
    if (diff >= 0) {
      // 清除 差值个 子key
      createArrWithSize(diff + 1).map((_, index) => {
        removeStorage(type, martchGroupKeys[index]);
      });
    }
  }
  if (tryDoSetStore(type, params) !== true) {
    // 第一次尝试 没有成功
    // 清空 未冻结的 key
    clearStore(type);
    // 第二次尝试 没有成功
    if (tryDoSetStore(type, params) !== true) {
      throwError('setStore, twice set Error');
    }
  }
};

function getStore(type: StoreType, params: GetParams): any;

function getStore(type: StoreType, key: string): any;

function getStore(type, parmas) {
  let realKey: string | undefined;
  if (isString(parmas)) {
    realKey = isGroupKey(parmas) ? parmas : wrapKey({ key: parmas });
  } else {
    const { key, freeze } = parmas;
    realKey = isGroupKey(key) ? key : wrapKey({ key, freeze });
  }
  if (realKey === undefined) {
    throwError('getStore,Invalid Key');
    return;
  }
  const valueStr = getStorage(type, realKey);
  if (!valueStr) {
    return undefined;
  }
  const value = safeParseJSON(valueStr);
  if (!value || 'data' in value === false || 'ts' in value === false) {
    // 数据格式 无效
    removeStorage(type, realKey);
    return undefined;
  }
  if ('exp' in value) {
    // 有 有效期限制
    const now = getTimestamp();
    if (now - +value.ts > +value.exp) {
      // 超出有效期
      removeStorage(type, realKey);
      return undefined;
    }
  }
  return value.data;
}

export { getStore };
