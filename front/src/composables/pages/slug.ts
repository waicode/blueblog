import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';

export const useSlugPage = (slug: string) => {
  const { data } = useQuery([`${slug}`], async () => {
    const article = await useAsyncPageSlug(slug);
    if (!article.value) {
      notFound();
    }
    return article;
  });
  return data as Ref<ArticleParsedContent>;
};
