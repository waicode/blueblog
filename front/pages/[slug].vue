<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
const route = useRoute();
// TODO: メタタグ
const queryResult = await useAsyncData('slug', () => queryContent<ArticleParsedContent>(`${route.params.slug}`).find());
const article = queryResult.data[0];
</script>

<template>
  <div class="BaPageSlug">
    <BaArticleTop :article="article" />
    <ContentDoc />
  </div>
</template>
