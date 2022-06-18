import { arrayToEnumObject, ValueTypeOf } from '@/utils/util';

/**
 * 日付テキスト種別の定数
 */
export const DATE_TEXT_TYPE_MAP = arrayToEnumObject(['created', 'updated']);

/**
 * 日付テキスト種別の型
 */
export type DateTextType = ValueTypeOf<typeof DATE_TEXT_TYPE_MAP>;
