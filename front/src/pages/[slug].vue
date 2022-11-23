<script setup lang="ts">
import { useSlugPage } from '@/composables/pages/slug';

const route = useRoute();
const slug = route.params.slug as string;

// 記事を取得
const article = useSlugPage(slug);

const title = computed(() => unref(article).title ?? '');
const description = computed(() => unref(article).description);

useHead(useMetaDescription(title, description));
</script>

<template>
  <div v-if="article" class="BaPageSlug">
    <BaArticleTop :article="article" />
    <ContentDoc />
  </div>
</template>
