<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { TEXT_SIZE } from '@/components/app/TextComposable';
import { useArticlesState } from '@/composables/state';
import { DESCRIPTION_MAP, DESCRIPTION } from '@/composables/descriptions';

// 記事一覧から生成されたドロップダウン用のリストをストアから取得
const { tagItems, archiveItems } = useArticlesState();
</script>

<template>
  <aside class="BaLayoutSub">
    <BaSubText title="コンセプト"
      ><AppText :type="TEXT_SIZE.SUB_DESCRIPTION1"
        >{{ DESCRIPTION_MAP[DESCRIPTION.SITE_CONCEPT] }}
        <AppLink to="/about">コンセプトの詳細はこちら</AppLink>から。</AppText
      ></BaSubText
    >
    <BaSubText title="ストーリーブック"
      ><AppText :type="TEXT_SIZE.SUB_DESCRIPTION1"
        >このブログの<AppLink href="https://waicode.github.io/blueblog/">コンポーネント設計が書かれたStorybook</AppLink
        >はGithubページに公開されています。<AppLink href="https://www.figma.com/file/5pw5pG3l4d0YJoroP55Ras/blueblog"
          >Figmaのデザインカンプ</AppLink
        >も公開しています。</AppText
      ></BaSubText
    >
    <BaSubDropdown title="タグ" label="タグを選択" :items="tagItems" />
    <BaSubDropdown title="アーカイブ" label="年月を選択" :items="archiveItems" />
    <BaSubProfile title="Author : waicode">
      <AppText :type="TEXT_SIZE.SUB_DESCRIPTION1"
        ><AppLink href="https://www.wantedly.com/companies/netprotections">Net Protections</AppLink>
        で働くアーキテクト。TechとBusinessの垣根がない開発組織とアーキテクチャを目指して、日々奮闘しています。詳しい<AppLink
          to="/me"
          >プロフィールはこちら</AppLink
        >から。<AppLink to="/contact">お問合せはこちら</AppLink>から。</AppText
      >
    </BaSubProfile>
    <BaSubText title="About">
      <ul>
        <li>
          <AppLink to="/about"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="tabler:code" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">このブログについて</AppText></AppLink
          >
        </li>
        <li>
          <AppLink to="/me"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="tabler:letter-a" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">プロフィール</AppText></AppLink
          >
        </li>
        <li>
          <AppLink to="/policy"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="tabler:lock" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">プライバシーポリシー</AppText></AppLink
          >
        </li>
        <li>
          <AppLink to="/contact"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="tabler:send" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">お問い合わせ</AppText></AppLink
          >
        </li>
      </ul>
    </BaSubText>
    <BaSubText title="Links">
      <ul>
        <li>
          <AppLink href="https://github.com/waicode/blueblog/"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="logos:github-icon" class="BaLayoutSub__LogosGithubIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">ソースコード</AppText></AppLink
          >
        </li>
        <li>
          <AppLink href="https://waicode.github.io/blueblog/"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="logos:storybook-icon" class="BaLayoutSub__LogosStorybookIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">コンポーネントガイド</AppText></AppLink
          >
        </li>
        <li>
          <AppLink href="https://www.figma.com/file/5pw5pG3l4d0YJoroP55Ras/blueblog"
            ><AppText :type="TEXT_SIZE.SUB_LIST1"
              ><Icon icon="logos:figma" class="BaLayoutSub__LogosFigmaIcon" /></AppText
            ><AppText :type="TEXT_SIZE.SUB_LIST1">デザインカンプ</AppText></AppLink
          >
        </li>
      </ul>
    </BaSubText>
  </aside>
</template>

<style lang="scss">
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
