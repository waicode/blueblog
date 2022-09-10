import { Ref } from 'vue';
import { keyEnumObject, ValueTypeOf } from '@/utils/util';

/**
 * サイトのデフォルトタイトル
 */
export const TITLE_DEFAULT = 'Blue * Architect';

/**
 * サイト共通文章
 */
export const DESCRIPTION_MAP = {
  siteConcept: `実用面から技術の価値を考え、デザインからインフラまで一貫性を持って、実例を交えた技術情報を発信します。
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

/**
 * ヘッダ上書き情報の生成
 *
 * @param title ヘッダのタイトル
 * @param description ヘッダの説明文
 * @returns ページ毎に上書きする`useHead`の引数になるオブジェクト
 */
export const useMetaDescription = (
  title: Ref<string> | string = TITLE_DEFAULT,
  description: Ref<string> | string = DESCRIPTION_MAP.siteConcept,
  imageUrl: Ref<string> | string = undefined,
) => {
  const meta: { [key: string]: string }[] = [
    {
      name: 'description',
      content: unref(description),
    },
    { property: 'og:title', content: unref(title) },
    {
      name: 'og:description',
      content: unref(description),
    },
    { property: 'twitter:title', content: unref(title) },
    {
      name: 'twitter:description',
      content: unref(description),
    },
  ];

  if (imageUrl) {
    meta.push({ property: 'og:image', content: unref(imageUrl) });
  }

  return {
    title: unref(title),
    meta,
  };
};
