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
  const matchQuery = window.matchMedia(unref(mediaQueryString));

  const isMatch = ref(matchQuery.matches);

  const listener = (event) => (isMatch.value = event.matches);

  onMounted(() => {
    matchQuery.addEventListener('change', listener);
  });

  onUnmounted(() => {
    matchQuery.removeEventListener('change', listener);
  });

  return isMatch;
};
