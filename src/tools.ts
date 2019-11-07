/**
 * 工具函数
 */

export const isString = (value: any): value is string =>
  typeof value == 'string' ||
  (!Array.isArray(value) &&
    value !== null &&
    value !== undefined &&
    typeof value === 'object' &&
    Object.prototype.toString.call(value) === '[object String]');

export const transformJSON = (value: any) => JSON.stringify(value);

export const parseJSON = (json: string) => JSON.parse(json);

export const safeParseJSON = (json: string) => {
  try {
    return parseJSON(json);
  } catch (error) {
    return undefined;
  }
};

export const getTimestamp = () => +new Date();

export const throwError = errorMsg => {
  throw new Error(`[gmsoft-store Error] - ${errorMsg}`);
};

export const createArrWithSize = (size: number) => {
  let num = size;
  const arr: null[] = [];
  do {
    arr.push(null);
    num--;
  } while (num > 0);
  return arr;
};
