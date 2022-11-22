import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';

export const useTagsSlugPage = (tagSlug: string, tagName: string) => {
  const { data } = useQuery(['useTagsSlugPage'], async () => {
    return await useAsyncTagsSlug(tagSlug, tagName);
  });
  return { data: data as Ref<ArticleParsedContent[]> };
};
