import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

/**
 * 記事情報の型定義
 */
export type Article = {
  description: string;
  category: string;
  imageFormat?: string;
  icon?: string;
  tags?: Array<string>;
  createdAt: string;
  updatedAt: string;
};

/**
 * Contentを拡張した記事情報の型
 */
export type ArticleParsedContent = Article & ParsedContent;

/**
 * アイキャッチ画像の幅 デスクトップ
 */
export const EYE_CATCH_WIDTH_DESKTOP = '400px';

/**
 * アイキャッチ画像の幅 タブレット
 */
export const EYE_CATCH_WIDTH_TABLET = '160px';

/**
 * アイキャッチ画像の幅 スマホ
 */
export const EYE_CATCH_WIDTH_PHONE = '100%';
