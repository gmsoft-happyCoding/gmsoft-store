/**
 * 包装工具
 */
import { STORE_MARK, GROUP_MARK, STORE_FREEZE_MARK } from './config';
import { WrapValueParams, WrapedValue, WrapKeyParams } from './type.d';
import { getTimestamp, isString, throwError } from './tools';
import { TIME_STAMP_MAP, TIME_STAMP_MARKS } from './config';

export const wrapKey = (params: WrapKeyParams) => {
  if (!isString(params.key)) {
    throwError(`'key' is required and must be String,but get: ${typeof params.key}!`);
  }
  if (params.freeze === true) {
    return `${STORE_FREEZE_MARK}${params.key}`;
  }
  return `${STORE_MARK}${params.key}`;
};

/**
 * 构造 分组 key
 * @param {string} groupKey - 分组key标识
 * @param {string} itemKey - 子key
 * @returns {string}
 */
export const createGroupKey = (groupKey: string, itemKey: string) => {
  if (!isString(groupKey)) {
    throwError(`'groupKey' is required and must be String,but get: ${typeof groupKey}!`);
  }
  if (!isString(itemKey)) {
    throwError(`'itemKey' is required and must be String,but get: ${typeof itemKey}!`);
  }
  return `${STORE_MARK}${groupKey}${GROUP_MARK}${itemKey}`;
};

export const isGroupKey = (key: string) => key.startsWith(STORE_MARK) && key.includes(GROUP_MARK);

export const splitGroupKey = (groupKey: string) => groupKey.split(GROUP_MARK);

export const wrapValue = ({ value, validityPeriod }: WrapValueParams): WrapedValue => {
  let exp: number | undefined;
  if (isString(validityPeriod)) {
    if (TIME_STAMP_MAP[validityPeriod]) {
      exp = TIME_STAMP_MAP[validityPeriod];
    } else {
      throwError(
        `'validityPeriod' is Invalid, only support ${TIME_STAMP_MARKS.join(
          ','
        )} or Number, but get: ${validityPeriod}!`
      );
    }
  }
  return {
    data: value,
    ts: getTimestamp(),
    exp,
  };
};
