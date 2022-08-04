<script setup lang="ts">
import { ArticleParsedContent } from './ArticleComposable';

interface ArticleTopPropType {
  /**
   * 記事一覧
   */
  articles: ArticleParsedContent[];
}

defineProps<ArticleTopPropType>();
</script>

<template>
  <div class="BaArticleList">
    <div v-for="(article, index) in articles" :key="article._path">
      <BaArticle :article="article" />
      <hr v-if="index < articles.length - 1" :key="`hr-${article.id}`" />
    </div>
  </div>
</template>
