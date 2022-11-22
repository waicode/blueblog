<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
import { TAXONOMY_MAP } from '@/composables/taxonomies';
import { useTagsSlugPage } from '@/composables/pages/tags/slug';

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const tagSlug = route.params.slug as string;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const tagName = TAXONOMY_MAP[tagSlug].name; // 定数用TAXONOMY_MAPは意図的に型未定義のためts-ignore

if (!tagName) {
  // 該当タグがなければ404ページへ飛ばす
  notFound();
}

// 該当タグの記事を取得
const { data: articles } = useTagsSlugPage(tagSlug, tagName);

if (!articles.value) {
  // 該当タグの記事がなければ404ページへ飛ばす
  notFound();
}

// 1ページあたりの表示数
const pageSize = runtimeConfig.public.pageSize;
// ページネーションの初期表示
const { targetArticles } = usePaginate<ArticleParsedContent>(articles.value, pageSize);
const posts = ref(unref(targetArticles));
// ページが切り替わったら表示対象の記事一覧に切り替える
const displayTargetPosts = (targetPosts: ArticleParsedContent[]) => {
  posts.value = unref(targetPosts);
};

useHead(useMetaDescription(`${tagName}の記事一覧 ⌇ ${TITLE_DEFAULT}`, `「${tagName}」タグの記事一覧です。`));
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
