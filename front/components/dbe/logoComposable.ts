import { arrayToEnumObject, ValueTypeOf } from "~/utils/util";

/**
 * ロゴフォント種別
 */
export const LOGO_FONT_TYPE = arrayToEnumObject(["Advent Pro", "Vibur"]);

/**
 * ロゴフォント種別の型
 */
export type LogoFontType = ValueTypeOf<typeof LOGO_FONT_TYPE>;
