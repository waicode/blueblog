<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { TEXT_SIZE } from '@/components/app/TextComposable';

// 記事一覧から生成されたドロップダウン用のリストをストアから取得
const { tagItems, archiveItems } = useArticlesState();
</script>

<template>
  <aside class="BaLayoutSub">
    <BaSubText title="コンセプト"
      ><AppText :type="TEXT_SIZE.SUB_DESCRIPTION1"
        >{{ DESCRIPTION_MAP[DESCRIPTION.SITE_CONCEPT] }}
        <NuxtLink to="/about">コンセプトの詳細はこちら</NuxtLink>から。</AppText
      ></BaSubText
    >
    <BaSubText title="ストーリーブック"
      ><AppText :type="TEXT_SIZE.SUB_DESCRIPTION1"
        >このブログの<a href="https://waicode.github.io/blueblog/" target="_blank" rel="noopener"
          >コンポーネント設計が書かれたStorybook</a
        >はGithubページに公開されています。<a
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
        ><a href="https://www.wantedly.com/companies/netprotections" target="_blank" rel="noopener">Net Protections</a>
        で働くアーキテクト。TechとBusinessの垣根がない開発組織とアーキテクチャを目指して、日々奮闘しています。詳しい<NuxtLink
          to="/author"
          >プロフィールはこちら</NuxtLink
        >から。<NuxtLink to="/contact">お問合せはこちら</NuxtLink>から。</AppText
      >
    </BaSubProfile>
    <BaSubText title="About">
      <ul>
        <li>
          <NuxtLink to="/about"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="tabler:code" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">このブログについて</AppText></NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/me"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="tabler:letter-a" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">プロフィール</AppText></NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/policy"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="tabler:lock" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">プライバシーポリシー</AppText></NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/contact"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="tabler:send" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">お問い合わせ</AppText></NuxtLink
          >
        </li>
      </ul>
    </BaSubText>
    <BaSubText title="Links">
      <ul>
        <li>
          <a href="https://github.com/waicode/blueblog/" target="_blank" rel="noopener"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="logos:github-icon" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">ソースコード</AppText></a
          >
        </li>
        <li>
          <a href="https://waicode.github.io/blueblog/" target="_blank" rel="noopener"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="logos:storybook-icon" class="BaLayoutSub__LogosStorybookIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">コンポーネントガイド</AppText></a
          >
        </li>
        <li>
          <a href="https://www.figma.com/file/5pw5pG3l4d0YJoroP55Ras/blueblog" target="_blank" rel="noopener"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="logos:figma" class="BaLayoutSub__LogosFigmaIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">デザインカンプ</AppText></a
          >
        </li>
      </ul>
    </BaSubText>
  </aside>
</template>

<style lang="scss">
$sub-column-desktop-width: 208px;
$sub-column-tablet-width: 160px;
$sub-column-phone-width: 100%;

.BaLayoutSub {
  width: $sub-column-desktop-width;

  @include tablet {
    width: $sub-column-tablet-width;
  }

  @include phone {
    width: $sub-column-phone-width;
  }

  &__LogosGithubIcon,
  &__LogosStorybookIcon,
  &__LogosFigmaIcon {
    width: 20px;
    height: 14px;
    vertical-align: middle;
    margin-top: $scale-minus2;
    margin-right: $scale6;
  }

  .BaSubText {
    ul {
      li {
        a:hover {
          text-decoration: underline;
        }
      }
    }

    li:not(:last-child) {
      padding-bottom: $scale2;
    }
  }
}
</style>
