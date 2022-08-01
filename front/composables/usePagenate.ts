import { Ref } from 'vue';

/**
 * ## ページネーション
 *
 * ページサイズと表示対象ページから表示する記事一覧を返却する。
 * 引数にはリアクティブな値を受け渡すことも可能。
 * 一緒に返却される関数でページネーションをリアクティブに操作できる。
 *
 * @param articles 記事のリスト
 * @param pageSize ページサイズ
 * @param currentPage 表示するページ（指定なしの場合は1）
 * @returns 表示対象の記事一覧とページネーション操作
 */
export default <T>(
  articles: Array<T> | Ref<Array<T>>,
  pageSize: number | Ref<number>,
  currentPage: number | Ref<number> = ref(1),
) => {
  /**
   * 表示対象ページ
   */
  const targetPage = ref(unref(currentPage));

  /**
   * 最後のページ数
   */
  const lastPageCount = computed(() => Math.ceil(unref(articles).length / unref(pageSize)));

  /**
   * 表示ページの記事一覧
   */
  const targetArticles = computed(() =>
    unref(articles).slice(unref(pageSize) * (unref(targetPage) - 1), unref(pageSize) * unref(targetPage)),
  );

  /**
   * 表示ページの設定
   */
  const setPage = (page: number | Ref<number>) => (targetPage.value = unref(page));

  /**
   * 前のページに戻る
   *
   * 0以下になった場合は1にする。
   */
  const goPreviousPage = (delta = 1) => {
    targetPage.value = targetPage.value - delta;
    if (targetPage.value < 1) {
      targetPage.value = 1;
    }
  };

  /**
   * 次のページへ進む
   *
   * 最後のページより大きい場合は補正する。
   */
  const goNextPage = (delta = 1) => {
    targetPage.value = targetPage.value + delta;
    if (targetPage.value > unref(lastPageCount)) {
      targetPage.value = unref(lastPageCount);
    }
  };

  /**
   * 最初のページに戻す
   */
  const reset = () => (targetPage.value = 1);

  return { targetArticles, targetPage, lastPageCount, setPage, goNextPage, goPreviousPage, reset };
};
