import {
  arrayToEnumObject,
  keyEnumObject,
  KeyTypeOf,
  ValueTypeOf,
} from "~/utils/util";

/**
 * ロゴフォント種別の定数
 */
export const LOGO_FONT_TYPE_MAP = arrayToEnumObject(["Advent Pro", "Vibur"]);

/**
 * ロゴフォント種別の型
 */
export type LogoFontType = ValueTypeOf<typeof LOGO_FONT_TYPE_MAP>;

/**
 * ロゴフォント太さマップ
 */
export const LOGO_FONT_WEIGHT_MAP = {
  weight400: "400",
  weight600: "600",
} as const;

/**
 * ロゴフォント太さマップ キーの定数
 */
export const LOGO_FONT_WEIGHT_TYPE = keyEnumObject(LOGO_FONT_WEIGHT_MAP);

/**
 * ロゴフォント太さマップ キーの型
 */
export type LogoFontWeightKeyType = KeyTypeOf<typeof LOGO_FONT_WEIGHT_MAP>;

/**
 * ロゴフォント太さマップ 値の型
 */
export type LogoFontWeightValueType = ValueTypeOf<typeof LOGO_FONT_WEIGHT_MAP>;
