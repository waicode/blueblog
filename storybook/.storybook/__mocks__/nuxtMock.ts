import { ref } from 'vue';

let fetchResult;
let lazyFetchResult;
let stateResult;

export async function useFetch() {
  if (fetchResult) return { data: ref(fetchResult) };
  fetchResult = null;
}

export function useLazyFetch() {
  if (lazyFetchResult) return { data: ref(lazyFetchResult) };
  lazyFetchResult = null;
}

export function useState() {
  if (stateResult) return ref(stateResult);
  stateResult = null;
}

export function useRuntimeConfig() {
  return {
    public: {
      pageSize: 5,
      amazonTrackingId: 'amayutazon-22',
      rakutenAffiliateId: 'g0000012.1zx7x6a7.g0000013.rphkh6ef',
      yahooValueCommerceSid: '3125738',
      yahooValueCommercePid: '887190364',
    },
  };
}

export function useFetchDecorator(story, { parameters }) {
  if (parameters && parameters.useFetch) {
    fetchResult = parameters.useFetch.data;
  }
  return story();
}

export function useLazyFetchDecorator(story, { parameters }) {
  if (parameters && parameters.useLazyFetch) {
    lazyFetchResult = parameters.useLazyFetch.data;
  }
  return story();
}

export function useStateDecorator(story, { parameters }) {
  if (parameters && parameters.useState) {
    stateResult = parameters.useState.value;
  }
  return story();
}
