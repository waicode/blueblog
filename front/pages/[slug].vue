<script setup lang="ts">
import { Ref } from 'vue';
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
// TODO: メタタグ

// 記事を取得
const route = useRoute();
const queryResult = await useAsyncData(`${route.params.slug}`, () =>
  queryContent<ArticleParsedContent>(`${route.params.slug}`).findOne(),
);
const article = queryResult.data as Ref<ArticleParsedContent>;
</script>

<template>
  <div v-if="article" class="BaPageSlug">
    <BaArticleTop :article="article" />
    <ContentDoc />
  </div>
</template>
