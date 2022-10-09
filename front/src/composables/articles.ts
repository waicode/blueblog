import { Ref } from 'vue';
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';

export const useAsyncArticles = async () => {
  const queryResult = await useAsyncData('articles', () =>
    queryContent<ArticleParsedContent>('articles')
      .where({ _draft: false })
      .sort({ createdAt: 1 }) // 降順
      .find(),
  );
  return queryResult.data;
};

/**
 * 記事スラッグの個別ページを取得
 *
 * @param slug 記事スラッグ
 * @returns 記事データ
 */
export const useAsyncPageSlug = async (slug: string) => {
  const queryResult = await useAsyncData(slug, () =>
    queryContent<ArticleParsedContent>(slug).where({ _draft: false }).findOne(),
  );
  return queryResult.data as Ref<ArticleParsedContent>;
};

/**
 * 記事スラッグの記事データを取得
 *
 * @param slug 記事スラッグ
 * @returns 記事データ
 */
export const useAsyncArticlesSlug = async (slug: string) => {
  const queryResult = await useAsyncData(`articles/${slug}`, () =>
    queryContent<ArticleParsedContent>('articles', slug).where({ _draft: false }).findOne(),
  );
  return queryResult.data as Ref<ArticleParsedContent>;
};

/**
 * 該当年月の記事データ一覧を取得
 *
 * @param yyyy 年
 * @param mm 月
 * @returns 該当年月の記事データ一覧
 */
export const useAsyncArchives = async (yyyy: string, mm: string) => {
  const queryResult = await useAsyncData(`${yyyy}/${mm}`, () =>
    queryContent<ArticleParsedContent>('articles')
      .where({ createdAt: { $regex: `^${yyyy}-${mm}` }, _draft: false })
      .sort({ createdAt: -1 }) // 降順
      .find(),
  );
  return queryResult.data;
};

/**
 * 該当タグの記事データ一覧を取得
 *
 * @param tagSlug タグスラッグ
 * @param tagName タグ名
 * @returns 該当タグの記事データ一覧
 */
export const useAsyncTagsSlug = async (tagSlug: string, tagName: string) => {
  const queryResult = await useAsyncData(`tags/${tagSlug}`, () =>
    queryContent<ArticleParsedContent>('articles')
      .where({ tags: { $contains: tagName }, _draft: false })
      .sort({ createdAt: -1 }) // 降順
      .find(),
  );
  return queryResult.data;
};
