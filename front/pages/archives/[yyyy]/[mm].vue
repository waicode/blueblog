<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const yyyy = route.params.yyyy;
const mm = route.params.mm;

// 該当年月の記事を取得
const queryResult = await useAsyncData(`${yyyy}/${mm}`, () =>
  queryContent<ArticleParsedContent>('articles')
    .where({ createdAt: { $regex: `^${yyyy}-${mm}` } })
    .sort({ createdAt: -1 }) // 降順
    .find(),
);
const articles = queryResult.data;

// 1ページあたりの表示数
const pageSize = runtimeConfig.public.pageSize;
// ページネーションの初期表示
const { targetArticles } = usePagenate<ArticleParsedContent>(unref(articles), pageSize);
const posts = ref(unref(targetArticles));
// ページが切り替わったら表示対象の記事一覧に切り替える
const displayTargetPosts = (targetPosts) => {
  posts.value = unref(targetPosts);
};
</script>

<template>
  <div class="BaPageTagsSlug">
    <BaArticleList :articles="posts" class="BaPageTagsSlug__Articles" />
    <div v-show="articles.length > pageSize">
      <AppPagination :articles="articles" :page-size="pageSize" @change-page="displayTargetPosts" />
    </div>
  </div>
</template>

<style lang="scss">
.BaPageTagsSlug {
  &__Articles {
    margin-bottom: $scale36;
  }
}
</style>
