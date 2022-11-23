<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleConst';
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
const { targetArticles: initialPosts } = usePaginate<ArticleParsedContent>(articles, pageSize);
// ページが切り替わったら表示対象の記事一覧に切り替える
const updatedPosts = ref();
const displayTargetPosts = (targetPosts: ArticleParsedContent[]) => {
  updatedPosts.value = unref(targetPosts);
};

useHead(useMetaDescription());
</script>

<template>
  <div class="BaPageTop">
    <BaArticleList :articles="updatedPosts ?? initialPosts" class="BaPageTop__Articles" />
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
