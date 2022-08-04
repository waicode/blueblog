<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const tagSlug = runtimeConfig.public.tags[`${route.params.slug}`];

// 該当タグがなければNotFound
if (!tagSlug) {
  // TODO: NotFoundへ飛ばす
}

// 該当タグの記事を取得
const queryResult = await useAsyncData(`tags/${tagSlug}`, () =>
  queryContent<ArticleParsedContent>('articles')
    .where({ tags: { $contains: tagSlug } })
    .sort({ createdAt: -1 }) // 降順
    .find(),
);
const articles = queryResult.data;
// 1ページあたりの表示数
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
  <div class="BaPageTagsSlug">
    <BaArticleList :articles="posts" class="BaPageTop__Articles" />
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
