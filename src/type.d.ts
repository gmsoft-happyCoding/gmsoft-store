export type BasicType = string | number | boolean | undefined | null | object;

export type ValueType = BasicType | BasicType[];

export type KeyType = string;

export interface WrapedValue {
  /** 值 */
  data: ValueType;
  /** 注入时间 */
  ts: number;
  /** 有效期（范围） */
  exp?: number;
}

export interface WrapKeyParams {
  /** 标识 */
  key: string;
  /** 冻结 */
  freeze?: boolean;
}
export interface WrapValueParams {
  /** 值 */
  value: ValueType;
  /** 有效期（区间） */
  validityPeriod?: '30day' | 'week' | 'day' | '12hour' | 'hour' | number;
}

export interface GetParams extends WrapKeyParams {}

export interface SetParams extends WrapKeyParams, WrapValueParams {
  /** 分组key个数的上限 */
  groupKeysMax?: number;
}

export type StoreType = 'session' | 'local';
