import { arrayToEnumObject, ValueTypeOf } from '@/utils/util';

/**
 * リンクカード種別の定数
 */
export const LINK_CARD_TYPE_MAP = arrayToEnumObject(['external', 'related', 'qiita', 'zenn']);

/**
 * リンクカード種別の型
 */
export type LinkCardType = ValueTypeOf<typeof LINK_CARD_TYPE_MAP>;
