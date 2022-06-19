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
  type: TextSizeType;
  height?: LineHeightType;
  spacing?: LetterSpacingType;
  weight?: TextWeightType;
  color?: TextColorType;
  underline?: boolean;
}

const props = withDefaults(defineProps<TextPropType>(), {
  type: TEXT_SIZE_MAP.body1,
});

const className = computed(() =>
  bemx('AppText', {
    height: LINE_HEIGHT_MAP[props.height],
    size: TEXT_SIZE_MAP[props.type],
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
$text-black-color: $black-color;
$text-white-color: $white-color;

.AppText {
  &--size {
    &-body1 {
      font-size: $font-size-16px;
      font-style: normal;
      line-height: $line-height-175;
    }
  }

  &--height {
    &-125 {
      letter-spacing: 1.25 !important;
    }

    &-167 {
      letter-spacing: 1.67 !important;
    }

    &-171 {
      letter-spacing: 1.71 !important;
    }

    &-175 {
      letter-spacing: 1.75 !important;
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
      letter-spacing: 4px !important;
    }

    &-6 {
      letter-spacing: 6px !important;
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
    &-white {
      color: $text-white-color;
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
