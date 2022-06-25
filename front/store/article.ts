import { defineStore } from 'pinia';

// 記事情報の型定義
export type Article = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  imageFormat?: string;
  icon?: string;
  tags?: Array<string>;
  toc?: Array<any>;
  createdAt: string;
  updatedAt: string;
};

const useArticleStore = defineStore('article', () => {
  // -----------------------
  // State
  // -----------------------

  const articleState: Article = reactive({
    id: 0,
    slug: '',
    title: '',
    description: '',
    category: '',
    createdAt: '',
    updatedAt: '',
  });

  // -----------------------
  // Setter
  // -----------------------

  const setArticleState = (data: Article) => {
    articleState.id = data.id;
    articleState.slug = data.slug;
    articleState.title = data.title;
    articleState.description = data.description;
    articleState.imageFormat = data.imageFormat;
    articleState.category = data.category;
    articleState.createdAt = data.createdAt;
    articleState.updatedAt = data.updatedAt;
  };

  // -----------------------
  // Action
  // -----------------------

  return articleState;
});
