<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';
</script>

<template>
  <side class="BaLayoutSide">
    <BaSideText title="コンセプト"
      >デザイナーにもエンジニアにもなりきれなかったアーキテクトが、フロントエンドとサーバレスについて書いてます。その技術を使うことで「得られること」を伝える文章を心がけています。プロダクションを意識した「実際の見た目」と「動くサンプル」も一緒に公開していきます。</BaSideText
    >
    <BaSideText title="ストーリーブック"
      ><AppText :type="TEXT_SIZE.SIDE_DESCRIPTION"
        >このブログのコンポーネント設計が書かれた<a
          href="https://waicode.github.io/blueblog/"
          target="_blank"
          rel="noopener"
          >StorybookはGithubページ</a
        >に公開されています。<a
          href="https://www.figma.com/file/5pw5pG3l4d0YJoroP55Ras/blueblog"
          target="_blank"
          rel="noopener"
          >Figmaのデザインカンプ</a
        >も公開しています。</AppText
      ></BaSideText
    >
    <BaSideDropdown
      title="タグ"
      label="タグを選択"
      :items="[
        { label: 'フロントエンド', count: 7, path: '/tags/frontend' },
        { label: 'サーバレス', count: 8, path: '/tags/serverless' },
      ]"
    />
    <BaSideDropdown
      title="アーカイブ"
      label="年月を選択"
      :items="[
        { label: '2022年5月', count: 2, path: '/archives/2022/05' },
        { label: '2022年6月', count: 4, path: '/archives/2022/06' },
      ]"
    />
    <BaSideProfile title="Author : waicode">
      <AppText :type="TEXT_SIZE.SIDE_DESCRIPTION"
        >ここに簡潔なプロフィールを書きます。だいたい3行くらいで書きます。そして詳しいプロフィールのリンクを貼ります。詳しい<NuxtLink
          to="/about"
          >プロフィールはこちら</NuxtLink
        >。お問合せはこちらから。</AppText
      >
    </BaSideProfile>
  </side>
</template>

<style lang="scss">
// TODO: ここから
.BaLayoutSide {
}
</style>
