<script setup lang="ts">
import { Ref } from 'vue';
import { useArticlesState } from '@/composables/state';
import { ArticleParsedContent } from '@/components/ba/ArticleConst';

// TODO: Nuxt3に`scrollToTop: true`がないため暫定対応
const nuxtApp = useNuxtApp();
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0);
});

// 記事を取得しストアへ格納
const { setArticlesState } = useArticlesState();
const queryResult = await useAsyncData('articles', () =>
  queryContent<ArticleParsedContent>('articles')
    .where({ _draft: false })
    .sort({ createdAt: 1 }) // 降順
    .find(),
);
const articles = queryResult.data as Ref<ArticleParsedContent[]>;
setArticlesState(articles);
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
