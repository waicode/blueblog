<script setup lang="ts">
import { LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardComposable';

const args = {
  type: LINK_CARD_TYPE_MAP.EXTERNAL,
  link: 'https://mujiota.com/1372/bulletproof-coffee/',
  imgFileName: 'bulletproof-coffee.jpg',
  article: {
    id: 123,
    slug: 'storybook123',
    title: 'タイトルを書きます：最大文字数は40文字程度を目安にするのは2行以内にはおさめたいから',
    description:
      'キャプションを書きます。だいたい120文字くらいを目安に3行でおさまるボリュームで。ここが長すぎると一覧の高さが合わなくなってしまいます。キャプションは実際の本文の冒頭から取ってくるので、リード文を意識して書きます。',
    icon: 'tabler:calendar-event',
    category: 'フロントエンド',
    tags: ['フロントエンド', 'サーバレス'],
    createdAt: '2017-05-06T18:36:20.000Z',
    updatedAt: '2021-07-25T09:49:35.000Z',
  },
};
</script>
<template>
  <h1>トップページ</h1>
  <BaLinkCard v-bind="args" />
</template>
