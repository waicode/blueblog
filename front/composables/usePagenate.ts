import { Article } from '@/store/article';
import { Ref } from 'vue';

/**
 * ## ページネーション
 *
 * ページサイズと表示ページに従いページに表示する記事一覧を返却する。
 * 引数にはリアクティブな値を受け渡すことも可能。
 *
 * @param articles 記事のリスト
 * @param pageSize ページサイズ
 * @param currentPage 表示するページ（指定なしの場合は1）
 * @returns 検索結果の記事データ配列のPromise
 */
export default (
  articles: Article[] | Ref<Article[]>,
  pageSize: number | Ref<number>,
  currentPage: number | Ref<number> = ref(1),
) => unref(articles).slice(unref(pageSize) * (unref(currentPage) - 1), unref(pageSize) * unref(currentPage));
