<script setup lang="ts">
import {
  TEXT_SIZE_MAP,
  TextSizeType,
  LINE_HEIGHT_MAP,
  LineHeightType,
  LETTER_SPACING_MAP,
  LetterSpacingType,
  TEXT_WEIGHT_MAP,
  TextWeightType,
  TEXT_COLOR_MAP,
  TextColorType,
} from './TextComposable';
import { bemx } from '@/utils/util';

interface TextPropType {
  /**
   * タイポグラフィ種別
   *
   * 指定することで以下が決まる。
   * 太さや色は必要に応じて個別に上書くこと。
   *
   * - フォントサイズ（font-size）
   * - 行の高さ（line-height）
   * - 文字の太さ（font-weight）
   * - 文字の色（color）
   * - 字間（letter-spacing）
   */
  type?: TextSizeType;
  height?: LineHeightType;
  spacing?: LetterSpacingType;
  weight?: TextWeightType;
  color?: TextColorType;
  underline?: boolean;
}

const props = withDefaults(defineProps<TextPropType>(), {
  type: TEXT_SIZE_MAP.body1,
  height: undefined,
  spacing: undefined,
  weight: undefined,
  color: undefined,
  underline: false,
});

const className = computed(() =>
  bemx('AppText', {
    type: TEXT_SIZE_MAP[props.type],
    height: LINE_HEIGHT_MAP[props.height],
    spacing: LETTER_SPACING_MAP[props.spacing],
    weight: TEXT_WEIGHT_MAP[props.weight],
    color: TEXT_COLOR_MAP[props.color],
    underline: props.underline,
  }),
);
</script>

<template>
  <span :class="className">
    <!-- @slot 囲まれたテキストを表示する。 -->
    <slot />
  </span>
</template>

<style lang="scss">
$text-dark-black-color: $dark-black-color;
$text-black-color: $black-color;
$text-blue-black-color: $blue-black-color;
$text-white-color: $white-color;
$text-dark-gray-color: $gray-42-color;
$text-gray-color: $gray-99-color;
$text-light-gray-color: $gray-b5-color;

.AppText {
  color: $text-black-color;

  &--type {
    &-body1 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-175;
      font-family: $font-name-noto-sans-cjk-jp-demi-light;
    }

    &-title1 {
      font-size: $font-size-20px;
      font-style: normal;
      line-height: $line-height-160;
      font-weight: $font-weight-700;
      color: $text-blue-black-color;
    }

    &-title2 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-125;
      font-weight: $font-weight-700;
      color: $text-blue-black-color;
    }

    &-description1 {
      font-size: $font-size-14px;
      font-style: normal;
      line-height: $line-height-167;
      font-family: $font-name-noto-sans-cjk-jp-demi-light;
    }

    &-description2 {
      font-size: $font-size-14px;
      font-style: normal;
      line-height: $line-height-143;
      font-family: $font-name-noto-sans-cjk-jp-demi-light;
    }

    &-heading2 {
      font-size: $font-size-24px;
      font-style: normal;
      line-height: $line-height-150;
      font-weight: $font-weight-700;
      color: $text-blue-black-color;
    }

    &-heading3 {
      font-size: $font-size-20px;
      font-style: normal;
      line-height: $line-height-160;
      font-weight: $font-weight-700;
      color: $text-blue-black-color;
    }

    &-heading4 {
      font-size: $font-size-18px;
      font-style: normal;
      line-height: $line-height-156;
      font-weight: $font-weight-700;
      color: $text-blue-black-color;
    }

    &-heading5 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-150;
      font-weight: $font-weight-700;
      color: $text-blue-black-color;
    }

    &-heading6 {
      font-size: $font-size-14px;
      font-style: normal;
      line-height: $line-height-150;
      font-weight: $font-weight-700;
      color: $text-blue-black-color;
    }

    &-list1 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-143;
      font-family: $font-name-noto-sans-cjk-jp-demi-light;
    }

    &-tableHeader1 {
      font-size: $font-size-14px;
      font-style: normal;
      line-height: $line-height-150;
      color: $text-blue-black-color;
      font-weight: $font-weight-700;
    }

    &-tableData1 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-150;
    }

    &-date1 {
      font-size: $font-size-13px;
      font-style: normal;
      line-height: $line-height-167;
    }

    &-date2 {
      font-size: $font-size-14px;
      font-style: normal;
      line-height: $line-height-143;
    }

    &-tag1 {
      font-size: $font-size-10px;
      font-style: normal;
      line-height: $line-height-160;
    }

    &-button1 {
      font-size: $font-size-13px;
      font-style: normal;
      line-height: $line-height-143;
      font-weight: $font-weight-700;
    }

    &-share1 {
      font-size: $font-size-24px;
      font-style: normal;
      font-weight: $font-weight-100;
      line-height: $line-height-150;
    }

    &-pagination1 {
      font-size: $font-size-24px;
      font-style: normal;
      line-height: $line-height-150;
    }

    &-code1 {
      font-size: $font-size-14px;
      line-height: $line-height-167;
      font-family: $font-group-code;
    }

    &-codeTitle1 {
      font-size: $font-size-12px;
      font-weight: $font-weight-700;
      line-height: $line-height-167;
      font-family: $font-group-code;
    }

    &-toast1 {
      font-size: $font-size-12px;
      line-height: $line-height-160;
    }

    &-subTitle1 {
      font-size: $font-size-20px;
      font-style: normal;
      line-height: $line-height-160;
      font-weight: $font-weight-700;
      color: $text-blue-black-color;
    }

    &-subTitle2 {
      font-size: $font-size-22px;
      font-style: normal;
      line-height: $line-height-160;
      font-weight: $font-weight-600;
      color: $text-blue-black-color;
      font-family: $font-name-advent-pro;
    }

    &-subDescription1 {
      font-size: $font-size-13px;
      font-style: normal;
      line-height: $line-height-167;
      font-family: $font-name-noto-sans-cjk-jp-demi-light;
      @include phone {
        font-size: $font-size-14px;
        line-height: $line-height-171;
      }
    }

    &-subList1 {
      font-size: $font-size-14px;
      font-style: normal;
      line-height: $line-height-167;
      font-family: $font-name-noto-sans-cjk-jp-demi-light;
    }

    &-copyright {
      font-size: $font-size-48px;
      font-style: normal;
      line-height: $line-height-125;
      letter-spacing: $letter-spacing2;
      @include phone {
        font-size: $font-size-36px;
      }
    }

    &-errorCode {
      font-size: $font-size-100px;
      font-weight: $font-weight-600;
      font-family: $font-group-code;

      @include tablet {
        font-size: $font-size-80px;
      }
    }
  }

  &--height {
    &-125 {
      line-height: $line-height-125 !important;
    }

    &-143 {
      line-height: $line-height-143 !important;
    }

    &-150 {
      line-height: $line-height-150 !important;
    }

    &-160 {
      line-height: $line-height-160 !important;
    }

    &-167 {
      line-height: $line-height-167 !important;
    }

    &-171 {
      line-height: $line-height-171 !important;
    }

    &-175 {
      line-height: $line-height-175 !important;
    }
  }

  &--spacing {
    &-normal {
      letter-spacing: normal !important;
    }

    &-0 {
      letter-spacing: 0 !important;
    }

    &-4 {
      letter-spacing: $letter-spacing4 !important;
    }

    &-6 {
      letter-spacing: $letter-spacing6 !important;
    }
  }

  &--weight {
    &-100 {
      font-weight: $font-weight-100;
      font-family: $font-group-normal;
    }

    &-300 {
      font-weight: $font-weight-300;
      font-family: $font-group-normal;
    }

    &-350 {
      font-family: $font-name-noto-sans-cjk-jp-demi-light;
    }

    &-400 {
      font-weight: $font-weight-400;
      font-family: $font-group-normal;
    }

    &-700 {
      font-weight: $font-weight-700;
      font-family: $font-group-normal;
    }
  }

  &--color {
    &-normal {
      color: $text-black-color;
    }

    &-darkBlack {
      color: $text-dark-black-color;
    }

    &-blueBlack {
      color: $text-blue-black-color;
    }

    &-white {
      color: $text-white-color;
    }

    &-darkGray {
      color: $text-dark-gray-color;
    }

    &-gray {
      color: $text-gray-color;
    }

    &-lightGray {
      color: $text-light-gray-color;
    }
  }

  &--underline {
    text-decoration: underline;
  }
}
@include tablet {
  .AppText {
    &--size {
      &-body1 {
        font-size: $font-size-14px;
        line-height: $line-height-171;
      }
    }
  }
}
@include phone {
  .AppText {
    &--size {
      &-body1 {
        font-size: $font-size-14px;
        line-height: $line-height-171;
      }
    }
  }
}
</style>
