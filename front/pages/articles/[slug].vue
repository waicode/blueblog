<script setup lang="ts">
import { Ref } from 'vue';
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';

// TODO: メタタグ

// 記事を取得
const route = useRoute();
const queryResult = await useAsyncData(`articles/${route.params.slug}`, () =>
  queryContent<ArticleParsedContent>('articles', route.params.slug as string).findOne(),
);
const article = queryResult.data as Ref<ArticleParsedContent>;
</script>

<template>
  <div class="BaPageArticlesSlug">
    <BaArticleTop :article="article" />
    <ContentDoc />
  </div>
</template>
