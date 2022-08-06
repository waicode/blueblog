<script setup lang="ts">
import { Ref } from 'vue';
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
const route = useRoute();
const slug = route.params.slug[0] as string;

// TODO: メタタグ

// 記事を取得
const queryResult = await useAsyncData(`articles/${slug}`, () =>
  queryContent<ArticleParsedContent>('articles', slug).findOne(),
);
const article = queryResult.data as Ref<ArticleParsedContent>;
</script>

<template>
  <div class="BaPageArticlesSlug">
    <BaArticleTop :article="article" />
    <ContentDoc />
  </div>
</template>
