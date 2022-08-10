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
   *
   * - フォントサイズ（font-size）
   * - 行の高さ（line-height）
   * - 字間（letter-spacing）
   *
   * `body1`（デフォルト）
   *
   * ```
   * // desktop
   * font-size: 16px; line-height: 1.75;
   * // tablet / phone
   * font-size: 14px; line-height: 1.714;
   * ```
   *
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
$text-white-color: $white-color;
$text-dark-gray-color: $gray-42-color;
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
    }

    &-title2 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-125;
      font-weight: $font-weight-700;
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
    }

    &-heading3 {
      font-size: $font-size-20px;
      font-style: normal;
      line-height: $line-height-160;
      font-weight: $font-weight-700;
    }

    &-heading4 {
      font-size: $font-size-18px;
      font-style: normal;
      line-height: $line-height-156;
      font-weight: $font-weight-700;
    }

    &-heading5 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-150;
      font-weight: $font-weight-700;
    }

    &-heading6 {
      font-size: $font-size-14px;
      font-style: normal;
      line-height: $line-height-150;
      font-weight: $font-weight-700;
    }

    &-list1 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-143;
      font-family: $font-name-noto-sans-cjk-jp-demi-light;
    }

    &-tableHeader1 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-150;
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
      font-weight: $font-weight-300;
      line-height: $line-height-150;
    }

    &-pagination1 {
      font-size: $font-size-24px;
      font-style: normal;
      line-height: $line-height-150;
    }

    &-subTitle1 {
      font-size: $font-size-20px;
      font-style: normal;
      line-height: $line-height-160;
      font-weight: $font-weight-700;
    }

    &-subTitle2 {
      font-size: $font-size-20px;
      font-style: normal;
      line-height: $line-height-160;
      font-weight: $font-weight-600;
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

    &-copyright {
      font-size: $font-size-48px;
      font-style: normal;
      line-height: $line-height-125;
      letter-spacing: $letter-spacing2;
      @include phone {
        font-size: $font-size-36px;
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
    &-400 {
      font-weight: $font-weight-400;
    }

    &-700 {
      font-weight: $font-weight-700;
    }
  }

  &--color {
    &-normal {
      color: $text-black-color;
    }

    &-darkBlack {
      color: $text-dark-black-color;
    }

    &-white {
      color: $text-white-color;
    }

    &-darkGray {
      color: $text-dark-gray-color;
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
