import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';

export const useArchivesYyyyMmPage = (yyyy: string, mm: string) => {
  const { data } = useQuery([`${yyyy}-${mm}`], async () => {
    const articles = await useAsyncArchives(yyyy, mm);
    if (!articles.value) {
      notFound();
    }
    return articles;
  });
  return data as Ref<ArticleParsedContent[]>;
};
