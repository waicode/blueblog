<script setup lang="ts">
import { Ref } from 'vue';
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';

const route = useRoute();
const slug = route.params.slug;

// 記事を取得
const queryResult = await useAsyncData(slug, () => queryContent<ArticleParsedContent>(slug).findOne());
const article = queryResult.data as Ref<ArticleParsedContent>;

if (!article.value) {
  notFound();
}

useHead({
  title: `${article.value.title} ⌇ Blue * Architect`,
  meta: [
    {
      name: 'description',
      content: article.value.description,
    },
  ],
});
</script>

<template>
  <div v-if="article" class="BaPageSlug">
    <BaArticleTop :article="article" />
    <ContentDoc />
  </div>
</template>
