<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleConst';

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

<style lang="scss">
$article-list-hr-height: 2px;

.BaArticleList {
  hr {
    background-color: $gray-f5-color;
    border: none;
    display: block;
    height: $article-list-hr-height;
    margin: $scale24 0;
    @include tablet {
      margin: $scale20 0;
    }
  }
}
</style>
