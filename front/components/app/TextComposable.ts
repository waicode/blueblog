import { keyEnumObject, KeyTypeOf } from '@/utils/util';

/**
 * タイポグラフィ種別
 */
export const TEXT_SIZE_MAP = {
  body1: 'body1',
  title1: 'title1',
  title2: 'title2',
  description1: 'description1',
  description2: 'description2',
  date1: 'date1',
  tag1: 'tag1',
  button1: 'button1',
  share1: 'share1',
  sideHeading1: 'sideHeading1',
  sideHeading2: 'sideHeading2',
  sideDescription: 'sideDescription',
  copyright: 'copyright',
} as const;

/**
 * タイポグラフィ種別の型
 */
export type TextSizeType = KeyTypeOf<typeof TEXT_SIZE_MAP>;

/**
 * タイポグラフィ種別定数
 */
export const TEXT_SIZE = keyEnumObject(TEXT_SIZE_MAP);

/**
 * 行の高さ
 */
export const LINE_HEIGHT_MAP = {
  height125: 1.25,
  height143: 1.43,
  height150: 1.5,
  height160: 1.6,
  height167: 1.67,
  height171: 1.71,
  height175: 1.75,
} as const;

/**
 * 行の高さ型
 */
export type LineHeightType = KeyTypeOf<typeof LINE_HEIGHT_MAP>;

/**
 * 行の高さ種別定数
 */
export const LINE_HEIGHT = keyEnumObject(LINE_HEIGHT_MAP);

/**
 * 字間
 */
export const LETTER_SPACING_MAP = {
  spacing0: '0',
  spacing4: '4',
  spacing6: '6',
} as const;

/**
 * 字間の型
 */
export type LetterSpacingType = KeyTypeOf<typeof LETTER_SPACING_MAP>;

/**
 * 字間種別
 */
export const LETTER_SPACING = keyEnumObject(LETTER_SPACING_MAP);

/**
 * テキスト太さ
 */
export const TEXT_WEIGHT_MAP = {
  weight400: '400',
  weight700: '700',
} as const;

/**
 * テキスト太さの型
 */
export type TextWeightType = KeyTypeOf<typeof TEXT_WEIGHT_MAP>;

/**
 * テキスト太さ種別定数
 */
export const TEXT_WEIGHT = keyEnumObject(TEXT_WEIGHT_MAP);

/**
 * テキスト色
 */
export const TEXT_COLOR_MAP = {
  normal: 'normal',
  darkBlack: 'darkBlack',
  white: 'white',
} as const;

/**
 * テキスト色の型
 */
export type TextColorType = KeyTypeOf<typeof TEXT_COLOR_MAP>;

/**
 * テキスト色種別定数
 */
export const TEXT_COLOR = keyEnumObject(TEXT_COLOR_MAP);
