import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';

export const useArchivesYyyyMmPage = (yyyy: string, mm: string) => {
  const { data } = useQuery(['useArchivesYyyyMmPage'], async () => {
    return await useAsyncArchives(yyyy, mm);
  });
  return { data: data as Ref<ArticleParsedContent[]> };
};
