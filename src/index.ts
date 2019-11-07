import { removeStoreBy, clearStore, setStore, getStore } from './core';
import { SetParams, GetParams } from './type.d';
import { createGroupKey } from './wrap';

/** 调用回调函数，移除Localstorage，【谨慎使用，会处理掉不该清理的数据】 */
export const removeLocalStoreBy = (cb: (key: string) => boolean) => removeStoreBy('local', cb);
/** 清空 通过gmsoft-store创建的非冻结状态的Localstorage数据 */
export const clearLocalStore = () => clearStore('local');
/** 创建 Localstorage 数据 */
export const setLocalStore = (params: SetParams) => setStore('local', params);

function getLocalStore(key: string): any;

function getLocalStore(params: GetParams): any;

/** 获取 Localstorage 数据，如果要取用冻结数据，需要 传入 GetParams*/
function getLocalStore(params) {
  return getStore('local', params);
}

export { getLocalStore };

/** 调用回调函数，移除 SessionStorage，【谨慎使用，会处理掉不该清理的数据】 */
export const removeSessionStoreBy = (cb: (key: string) => boolean) => removeStoreBy('local', cb);
/** 清空 通过gmsoft-store创建的非冻结状态的SessionStorage数据 */
export const clearSessionStore = () => clearStore('local');
/** 创建 SessionStorage 数据 */
export const setSessionStore = (params: SetParams) => setStore('local', params);

function getSessionStore(key: string): any;

function getSessionStore(params: GetParams): any;

/** 获取 SessionStorage 数据，如果要取用冻结数据，需要 传入 GetParams*/
function getSessionStore(params) {
  return getStore('local', params);
}

export { getSessionStore };

export { createGroupKey };

export default {
  removeLocalStoreBy,
  clearLocalStore,
  setLocalStore,
  getLocalStore,
  removeSessionStoreBy,
  clearSessionStore,
  setSessionStore,
  getSessionStore,
  createGroupKey,
};
