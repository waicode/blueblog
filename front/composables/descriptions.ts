import { keyEnumObject, ValueTypeOf } from '@/utils/util';

/**
 * サイト共通文章
 */
export const DESCRIPTION_MAP = {
  siteConcept: `モノづくりが好きなアーキテクトがフロントエンドとサーバレスについて書いてます。
  その技術を使うことで「得られること」を伝える文章を心がけています。
  プロダクションを意識した「実際の見た目」と「動くサンプル」も一緒に公開していきます。`.replace(/\r?\n/g, ''),
} as const;

/**
 * サイト共通文章キー定数
 */
export const DESCRIPTION = keyEnumObject(DESCRIPTION_MAP);

/**
 * サイト共通文章キーの型定義
 */
export type DescriptionType = ValueTypeOf<typeof DESCRIPTION>;
