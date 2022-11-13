import { ref } from 'vue';

let queryResultData;

export async function useAsyncArticlesSlug(slug: string) {
  if (queryResultData) return { data: ref(queryResultData) };
  queryResultData = null;
}

export function useAsyncArticlesSlugDecorator(story, { parameters }) {
  if (parameters && parameters.useAsyncArticlesSlug) {
    queryResultData = parameters.useAsyncArticlesSlug.data;
  }
  return story();
}
