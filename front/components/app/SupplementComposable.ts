import { arrayToEnumObject, ValueTypeOf } from '@/utils/util';

/**
 * 補足説明種別の定数
 */
export const SUPPLEMENT_TYPE = arrayToEnumObject(['normal', 'warning']);

/**
 * 補足説明種別の型
 */
export type SupplementType = ValueTypeOf<typeof SUPPLEMENT_TYPE>;
