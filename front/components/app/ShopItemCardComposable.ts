import { arrayToEnumObject, ValueTypeOf } from '@/utils/util';

/**
 * 商品カード種別の定数
 */
export const SHOP_ITEM_CARD_TYPE_MAP = arrayToEnumObject(['goods', 'book']);

/**
 * 商品カード種別の型
 */
export type ShopItemCardType = ValueTypeOf<typeof SHOP_ITEM_CARD_TYPE_MAP>;

/**
 * ECモールASP種別の定数
 */
export const EC_MALL_ASP_TYPE_MAP = arrayToEnumObject(['amazon', 'rakuten', 'yahoo']);

/**
 * ECモールASP種別の型
 */
export type EcMallAspType = ValueTypeOf<typeof EC_MALL_ASP_TYPE_MAP>;

/**
 * 書籍取り扱いASP種別の定数
 */
export const BOOK_ASP_TYPE_MAP = arrayToEnumObject(['amazon', 'kindle', 'rakuten', 'kobo']);

/**
 * 書籍取り扱いASP種別の型
 */
export type BookAspType = ValueTypeOf<typeof BOOK_ASP_TYPE_MAP>;
