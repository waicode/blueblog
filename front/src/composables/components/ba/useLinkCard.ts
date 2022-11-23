import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';
import { LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardConst';
import { useAsyncArticlesSlug } from '@/composables/articles';
import { getUrlFqdn } from '@/utils/util';

/**
 * リンクカードの処理
 *
 */
export default (
  type: Ref<string>,
  articleSlug: Ref<string | undefined> | undefined,
  article: Ref<ArticleParsedContent | undefined> | undefined,
  link: Ref<string | undefined> | undefined,
  title: Ref<string | undefined> | undefined,
  description: Ref<string | undefined> | undefined,
) => {
  const linkDomain = ref('');
  switch (type.value) {
    case LINK_CARD_TYPE_MAP.EXTERNAL:
      linkDomain.value = link?.value ? getUrlFqdn(link?.value) : '';
      break;
    case LINK_CARD_TYPE_MAP.RELATED:
      linkDomain.value = 'archt.blue';
      break;
    case LINK_CARD_TYPE_MAP.QIITA:
      linkDomain.value = 'qiita.com';
      break;
    case LINK_CARD_TYPE_MAP.ZENN:
      linkDomain.value = 'zenn.dev';
      break;
    default:
  }

  // 記事スラッグが渡された場合は記事データを取得
  const { data: relatedArticleData } = useQuery([articleSlug?.value], async () => {
    if (type.value === LINK_CARD_TYPE_MAP.RELATED) {
      if (!article?.value && articleSlug?.value) {
        const queryResult = await useAsyncArticlesSlug(articleSlug.value as string);
        return queryResult;
      }
    }
    return ref(undefined);
  });

  // OGPを設定
  const ogp = type.value !== LINK_CARD_TYPE_MAP.RELATED && link?.value ? useOgp(link?.value) : ref(undefined);

  const articleData = computed(() => relatedArticleData.value ?? article?.value);
  const linkPath = computed(() => relatedArticleData?.value?._path ?? article?.value?._path ?? link?.value);
  const linkTitle = computed(
    () => relatedArticleData?.value?.title ?? title?.value ?? article?.value?.title ?? ogp?.value?.title,
  );
  const linkDescription = computed(
    () =>
      relatedArticleData?.value?.description ??
      description?.value ??
      article?.value?.description ??
      ogp?.value?.description,
  );
  const linkImage = computed(() => ogp?.value?.imageUrl);

  return { articleData, linkDomain, linkPath, linkTitle, linkDescription, linkImage };
};
