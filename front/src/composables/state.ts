import { Ref } from 'vue';
import { useState } from '#app';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';
import { getTagSlug } from '@/composables/taxonomies';

/**
 * 全記事一覧用のストア
 *
 * 初期表示で読み込み、
 * サブカラムのドロップダウンなどサイト全体で使い回す。
 *
 * @returns 全記事一覧用のストアとセッター
 */
export const useArticlesState = () => {
  /**
   * 全記事一覧用のストア
   */
  const articlesState = useState<ArticleParsedContent[]>('articles');

  /**
   * 全記事一覧用ストアのセッター
   */
  const setArticlesState = (articles: ArticleParsedContent[] | Ref<ArticleParsedContent[]>) => {
    articlesState.value = unref(articles);
  };

  /**
   * タグ情報リスト
   *
   * 全記事一覧に連動して更新される。
   * サブカラムのドロップダウンで利用する。
   */
  const tagItems = computed(() => {
    const tagsObj: { [key: string]: number } = {};
    articlesState.value
      .map((data: ArticleParsedContent) => (data.tags ? data.tags : []))
      .flat()
      .forEach((tagName: string) => {
        // { tagName: count }
        tagsObj[tagName] = tagsObj[tagName] ? tagsObj[tagName] + 1 : 1;
      });
    return Object.entries(tagsObj).map(([label, count]) => ({
      label,
      count,
      path: `/tags/${getTagSlug(label)}`,
    }));
  });

  /**
   * アーカイブ情報リスト
   *
   * 全記事一覧に連動して更新される。
   * サブカラムのドロップダウンで利用する。
   */
  const archiveItems = computed(() => {
    const archivesObj: { [key: string]: number } = {};
    articlesState.value
      .map((data: ArticleParsedContent) => data.createdAt.slice(0, 7)) // yyyy-mmを切り取り
      .forEach((monthKey: string) => {
        // { 'yyyy-mm': count }
        archivesObj[monthKey] = archivesObj[monthKey] ? archivesObj[monthKey] + 1 : 1;
      });
    return Object.entries(archivesObj).map(([label, count]) => ({
      label: `${label.slice(0, 4)}年${label.slice(5, 7)}月`, // 2022年08月
      count,
      path: `/archives/${label.slice(0, 4)}/${label.slice(5, 7)}`, // /archives/2022/08
    }));
  });

  return { articlesState, tagItems, archiveItems, setArticlesState };
};
