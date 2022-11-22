import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
import { arrayToEnumObject, ValueTypeOf } from '@/utils/util';

/**
 * リンクカード種別の定数
 */
export const LINK_CARD_TYPE_MAP = arrayToEnumObject(['external', 'related', 'qiita', 'zenn']);

/**
 * リンクカード種別の型
 */
export type LinkCardType = ValueTypeOf<typeof LINK_CARD_TYPE_MAP>;

export const useLinkCard = (slug: string) => {
  const { data } = useQuery(['useLinkCard'], async () => {
    const queryResult = await useAsyncArticlesSlug(slug);
    return queryResult;
  });
  return { data: data as Ref<ArticleParsedContent> };
};
