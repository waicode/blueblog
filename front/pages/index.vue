<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';

// 記事を取得
const queryResult = await useAsyncData('articles', () => queryContent<ArticleParsedContent>('articles').find());
const articles = queryResult.data;
// 1ページあたりの表示数
const runtimeConfig = useRuntimeConfig();
const pageSize = runtimeConfig.public.pageSize;
// ページネーションの初期表示
const { targetArticles } = usePagenate<ArticleParsedContent>(articles.value, pageSize);
const posts = ref(unref(targetArticles));
// ページが切り替わったら表示対象の記事一覧に切り替える
const displayTargetPosts = (targetPosts) => {
  posts.value = unref(targetPosts);
};
</script>

<template>
  <div class="BaPageTop">
    <div class="BaPageTop__Articles">
      <div v-for="(article, index) in posts" :key="article._path">
        <BaArticle :article="article" />
        <hr v-if="index < posts.length - 1" :key="`hr-${article.id}`" />
      </div>
    </div>
    <div v-show="articles.length > pageSize" class="BaPageTop__Pagenation">
      <AppPagenation :articles="articles" :page-size="pageSize" @change-page="displayTargetPosts" />
    </div>
  </div>
</template>

<style lang="scss">
.BaPageTop {
  &__Articles {
    margin-bottom: $scale36;
  }
}
</style>
