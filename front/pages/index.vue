<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
import { useArticlesState } from '@/composables/state';
const runtimeConfig = useRuntimeConfig();

// 記事一覧をストアから取得
const { articlesState: articles } = useArticlesState();

if (!articles.value) {
  notFound();
}

// 1ページあたりの表示数
const pageSize = runtimeConfig.public.pageSize;
// ページネーションの初期表示
const { targetArticles } = usePaginate<ArticleParsedContent>(articles.value, pageSize);
const posts = ref(unref(targetArticles));
// ページが切り替わったら表示対象の記事一覧に切り替える
const displayTargetPosts = (targetPosts) => {
  posts.value = unref(targetPosts);
};

useHead({
  meta: [
    {
      name: 'description',
      content: DESCRIPTION_MAP[DESCRIPTION.SITE_CONCEPT],
    },
  ],
});
</script>

<template>
  <div class="BaPageTop">
    <BaArticleList :articles="posts" class="BaPageTop__Articles" />
    <div v-show="articles.length > pageSize">
      <AppPagination :articles="articles" :page-size="pageSize" @change-page="displayTargetPosts" />
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
