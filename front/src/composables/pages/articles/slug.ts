import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';

export const useArticlesSlugPage = (slug: string) => {
  const { data } = useQuery([`articles/${slug}`], async () => {
    const article = await useAsyncArticlesSlug(slug);
    if (!article.value) {
      notFound();
    }
    return article;
  });
  return data as Ref<ArticleParsedContent>;
};
