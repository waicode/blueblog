/**
 * ## メディアクエリ判定
 *
 * CSSのメディアクエリ判定をJavaScriptでライフサイクル期間に実施する。
 * 判定結果がリアクティブな真偽値で返却される。
 *
 * @param mediaQueryFunc メディアクエリ文字列を返却する関数
 *
 */
export default (mediaQueryFunc: () => string) => {
  const mediaQueryString = computed(mediaQueryFunc);
  const isMatch = ref(false);

  let matchQuery;
  const listener = (event) => (isMatch.value = event.matches);
  onMounted(() => {
    matchQuery = window.matchMedia(unref(mediaQueryString));
    isMatch.value = matchQuery.matches;
    matchQuery.addEventListener('change', listener);
  });

  onUnmounted(() => {
    if (matchQuery) {
      matchQuery.removeEventListener('change', listener);
    }
  });

  return isMatch;
};
