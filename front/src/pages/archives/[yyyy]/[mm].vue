<script setup lang="ts">
import { ComputedRef } from 'vue';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';
import { useArchivesYyyyMmPage } from '@/composables/pages/archives/yyyy/mm';

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const yyyy = route.params.yyyy as string;
const mm = route.params.mm as string;
const monthStr = String(Number(mm)); // ゼロサプレス

// 該当年月の記事を取得
const articles = useArchivesYyyyMmPage(yyyy, mm);

// 1ページあたりの表示数
const pageSize = runtimeConfig.public.pageSize;
// ページネーションの初期表示
const { targetArticles: initialPosts } = usePaginate<ArticleParsedContent>(articles, pageSize);
// ページが切り替わったら表示対象の記事一覧に切り替える
const updatedPosts = ref();
const displayTargetPosts = (targetPosts: ComputedRef<ArticleParsedContent[]>) => {
  updatedPosts.value = unref(targetPosts);
};

useHead(
  useMetaDescription(
    `${yyyy}年${monthStr}月の記事一覧 ⌇ ${TITLE_DEFAULT}`,
    `${yyyy}年${monthStr}月に投稿された記事の一覧です。`,
  ),
);
</script>

<template>
  <div class="BaPageTagsSlug">
    <BaArticleList :articles="updatedPosts ?? initialPosts" class="BaPageTagsSlug__Articles" />
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
