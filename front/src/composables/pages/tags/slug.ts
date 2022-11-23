import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';

export const useTagsSlugPage = (tagSlug: string, tagName: string) => {
  const { data } = useQuery([tagSlug], async () => {
    const articles = await useAsyncTagsSlug(tagSlug, tagName);
    if (!articles.value) {
      notFound();
    }
    return articles;
  });
  return data as Ref<ArticleParsedContent[]>;
};
