import { ref } from 'vue';
let result;
export function useLazyFetch() {
  if (result) {
    return {
      data: ref(result),
    };
  }
  result = null;
}

export function useFetchDecorator(story, { parameters }) {
  if (parameters && parameters.useLazyFetch) {
    result = parameters.useLazyFetch.data;
  }
  return story();
}
