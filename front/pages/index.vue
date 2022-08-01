<script setup lang="ts"></script>

<template>
  <!-- TODO: エラ-の解消から -->
  <ContentList v-slot="{ list }" path="/articles">
    <div v-for="(article, index) in list" :key="article._path">
      <BaArticle :article="article" />
      <hr v-if="index < list.length - 1" :key="`hr-${article.id}`" />
    </div>
  </ContentList>
</template>
