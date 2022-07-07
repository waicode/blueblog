import { ref } from 'vue';
let result;
export async function useFetch() {
  if (result) {
    return {
      data: ref(result),
    };
  }
  result = null;
}

export function useFetchDecorator(story, { parameters }) {
  if (parameters && parameters.useFetch) {
    result = parameters.useFetch.data;
  }
  return story();
}
