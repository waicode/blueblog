import { ref } from 'vue';

let resultData;

export async function useAsyncArticlesSlug(slug: string) {
  if (resultData) {
    return ref(resultData);
  }
  resultData = null;
}

export function useAsyncArticlesSlugDecorator(story, { parameters }) {
  if (parameters && parameters.useAsyncArticlesSlug) {
    resultData = parameters.useAsyncArticlesSlug.data;
  }
  return story();
}
