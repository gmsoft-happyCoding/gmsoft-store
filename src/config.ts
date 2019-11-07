/**
 * 配置文件
 */
export const STORE_MARK = '__gmsoft-store__';

export const STORE_FREEZE_MARK = '__gmsoft-store-freeze__';

export const GROUP_MARK = '__group__';

export const TIME_STAMP_MARKS = ['30day', 'week', 'day', '12hour', 'hour'];

/** 时间标识转换时间戳 */
export const TIME_STAMP_MAP = {
  '30day': 2592000000,
  week: 604800000,
  day: 86400000,
  '12hour': 43200000,
  hour: 3600000,
};
