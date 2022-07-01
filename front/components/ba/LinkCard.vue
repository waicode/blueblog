<script setup lang="ts">
import { LinkCardType, LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardComposable';
import { bemx } from '@/utils/util';

interface LinkCardPropType {
  /**
   * リンクカード種別
   *
   */
  type: LinkCardType;

  /**
   * タイトル
   *
   */
  title?: string;

  /**
   * 説明
   *
   */
  note?: string;

  /**
   * リンク
   *
   */
  link?: string;

  /**
   * 画像ファイル名
   *
   */
  imgFileName?: string;

  /**
   * ASP測定用の画像リンク
   *
   */
  aspMeasurementImgLink?: string;
}

const props = defineProps<LinkCardPropType>();

const className = computed(() =>
  bemx('BaLinkCard', {
    type: props.type,
  }),
);
</script>

<template>
  <div :class="className">
    <a :href="link" target="_blank" rel="nofollow noopener">
      <div class="BaLinkCard__Wrapper columns">
        <div class="BaLinkCard__LinkImage">
          <AppImage v-if="imgFileName" :path="`link/${imgFileName}`" />
        </div>
        <div class="BaLinkCard__Contents">
          <div class="BaLinkCard__LinkTitle">
            <AppText>{{ title }}</AppText>
          </div>
          <div class="BaLinkCard__LinkNote">
            <AppText>{{ note }}</AppText>
          </div>
          <img v-if="aspMeasurementImgLink" border="0" width="1" height="1" :src="aspMeasurementImgLink" alt="" />
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
$card-bg-color: $white-color;
$card-border-color: $gray-e0-color;
$link-box-shadow-color: $gray-ef-color;
$card-link-hover-color: $gray-66-color;
$card-link-hover-bg-color: $pale-blue-alpha-color;
$card-link-hover-label-color: $black-color;
$link-title-before-bg-color-external: $black-color;
$link-title-before-bg-color-related: $main-blue-color;

$image-border-color: $gray-e0-color;
$image-box-shadow-color: $gray-ef-color;

.BaLinkCard {
  margin: $scale28 0;

  &__Wrapper {
    padding: $scale4;
    background: $card-bg-color;
    border: $border-width1 solid $card-border-color;
    border-radius: $border-radius2;
    box-shadow: 0 0 2px $link-box-shadow-color;
    transition: 0.3s ease-in-out;
    &:hover {
      color: $card-link-hover-color;
      background: $card-link-hover-bg-color;
      .AppExternalLink__LinkTitle {
        &::before {
          background: $card-link-hover-label-color;
        }
      }
    }

    // TODO: ここから、type別のCSSもいれること
  }

  &__LinkImage {
    img {
      vertical-align: top;
      border: $border-width1 solid $image-border-color;
      box-shadow: 0 0 1px $image-box-shadow-color;
    }
  }

  &__LinkTitle {
    margin-bottom: $scale8;
    font-weight: $font-weight-700;
    &::before {
      position: relative;
      top: -2px;
      display: inline-block;
      width: 6em;
      padding: $scale4;
      margin-right: $scale8;
      text-align: center;
      content: '外部リンク';
      background: $link-title-before-bg-color-external;
      border-radius: $border-radius2;
      transition: 0.3s ease-in-out;
    }
  }
  // &__LinkNote {
  // }
}
</style>
