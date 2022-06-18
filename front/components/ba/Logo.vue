<script setup lang="ts">
// TODO: Storybookのautoimports対応が完了したら消す
import useId from '@/composables/useId';
import useCss from '@/composables/useCss';
import useWebFont, { FONT_TYPE_MAP, FontType, FONT_WEIGHT_MAP, FontWeightValueType } from '@/composables/useWebFont';
import { bemx } from '@/utils/util';

interface LogoPropType {
  /**
   * ロゴに適用するフォント
   *
   * `Advent Pro` | `Vibur`
   */
  font?: FontType;
  /**
   * ロゴ文字列の太さ
   *
   * `400` | `600`
   */
  weight?: FontWeightValueType;
}

const props = withDefaults(defineProps<LogoPropType>(), {
  font: FONT_TYPE_MAP.ADVENT__PRO,
  weight: FONT_WEIGHT_MAP.weight600,
});

useWebFont(props.font, props.weight);

const id = useId();
const className = bemx('BaLayoutLogo', id);
useCss(
  () =>
    `.BaLayoutLogo--${id} {
      font-family: "${props.font}" !important;
      font-weight: ${props.weight} !important;
    }`,
);
</script>

<template>
  <div :class="className">
    <span class="BaLayoutLogo__Blue">
      <span class="BaLayoutLogo__B">B</span>
      <span class="BaLayoutLogo__Lue">lue</span>
    </span>
    <span class="BaLayoutLogo__Star">*</span>
    <span class="BaLayoutLogo__Architect">
      <span class="BaLayoutLogo__A">A</span>
      <span class="BaLayoutLogo__Rchitect">rchitect</span>
    </span>
  </div>
</template>

<style lang="scss">
$logo-initial-letter-spacing: 6px;
$logo-letter-spacing: 4px;

.BaLayoutLogo {
  display: flex;
  font-size: $font-size-64px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: $white-color;

  &__Blue {
    margin-right: $scale36;
  }

  &__B {
    letter-spacing: $logo-initial-letter-spacing;
  }

  &__Lue {
    letter-spacing: $logo-letter-spacing;
    font-weight: $font-weight-700;
    font-size: $font-size-40px;
  }

  &__Star {
    margin-top: $scale12;
    margin-bottom: $scale-minus12;
    margin-right: $scale36;
    color: $accent-yellow-color;
  }

  &__A {
    letter-spacing: $logo-initial-letter-spacing;
  }

  &__Rchitect {
    letter-spacing: $logo-letter-spacing;
    font-weight: $font-weight-700;
    font-size: $font-size-40px;
  }
}
</style>
