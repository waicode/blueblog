<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';

// 記事一覧から生成されたドロップダウン用のリストをストアから取得
const { tagItems, archiveItems } = useArticlesState();
</script>

<template>
  <aside class="BaLayoutSub">
    <BaSubText title="コンセプト"
      ><AppText :type="TEXT_SIZE.SUB_DESCRIPTION1"
        >モノづくりが好きなアーキテクトがフロントエンドとサーバレスについて書いてます。その技術を使うことで「得られること」を伝える文章を心がけています。プロダクションを意識した「実際の見た目」と「動くサンプル」も一緒に公開していきます。</AppText
      ></BaSubText
    >
    <BaSubText title="ストーリーブック"
      ><AppText :type="TEXT_SIZE.SUB_DESCRIPTION1"
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
      ></BaSubText
    >
    <BaSubDropdown title="タグ" label="タグを選択" :items="tagItems" />
    <BaSubDropdown title="アーカイブ" label="年月を選択" :items="archiveItems" />
    <BaSubProfile title="Author : waicode">
      <AppText :type="TEXT_SIZE.SUB_DESCRIPTION1"
        >ここに簡潔なプロフィールを書きます。だいたい3行くらいで書きます。そして詳しいプロフィールのリンクを貼ります。詳しい<NuxtLink
          to="/about"
          >プロフィールはこちら</NuxtLink
        >。お問合せはこちらから。</AppText
      >
    </BaSubProfile>
  </aside>
</template>

<style lang="scss">
$sub-column-desktop-width: 208px;
$sub-column-tablet-width: 184px;
$sub-column-phone-width: 100%;

.BaLayoutSub {
  width: $sub-column-desktop-width;

  @include tablet {
    width: $sub-column-tablet-width;
  }

  @include phone {
    width: $sub-column-phone-width;
  }
}
</style>
