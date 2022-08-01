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
  if (parameters && parameters.useLazyFetch) {
    result = parameters.useLazyFetch.data;
  }
  return story();
}
