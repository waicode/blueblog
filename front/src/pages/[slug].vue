<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

// 記事を取得
const article = await useAsyncPageSlug(slug);

if (!article.value) {
  // 該当記事がなければ404ページへ飛ばす
  notFound();
}

useHead(useMetaDescription(`${article.value.title} ⌇ ${TITLE_DEFAULT}`, article.value.description));
</script>

<template>
  <div v-if="article" class="BaPageSlug">
    <BaArticleTop :article="article" />
    <ContentDoc />
  </div>
</template>
