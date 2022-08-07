import { keyEnumObject, ValueTypeOf } from '@/utils/util';

/**
 * タグ情報。
 */
export const TAXONOMY_MAP = {
  frontend: { name: 'フロントエンド', icon: '😃' },
  serverless: { name: 'サーバレス', icon: '😶‍🌫️' },
  notyet: { name: '未分類', icon: '❔' },
} as const;

/**
 * タグ情報キー定数。
 */
export const TAXONOMY = keyEnumObject(TAXONOMY_MAP);

/**
 * タグ情報キーの型定義。
 */
export type TaxonomyType = ValueTypeOf<typeof TAXONOMY>;

/**
 * タグ名称からスラッグ（タグ情報のキー）を取得
 *
 * 該当なしの場合は未分類（notyet）を返却する。
 *
 * @param tagName タグ名称
 * @returns スラッグ（タグ情報のキー）
 */
export const getTagSlug = (tagName: string) => {
  const tagSlug = Object.keys(TAXONOMY_MAP).filter((key) => TAXONOMY_MAP[key].name === tagName)[0];
  return tagSlug || TAXONOMY.NOTYET;
};
