/**
 * 设置
 * @Author GM20171202
 * @Date 2019-09-22 22:20:37
 */

export const setLocalStorage = (key: string, value: string) => {
    
};

const setLocalStorageNative = (key: string, value: string): Error | true => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return error;
  }
};
