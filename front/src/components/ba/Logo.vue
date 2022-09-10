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

if (props.font !== FONT_TYPE_MAP.ADVENT__PRO || props.weight !== FONT_WEIGHT_MAP.weight600) {
  // Advent Pro SemiBold以外はWebフォントを読み込む。
  // family=Advent+Pro:wght@600はnuxt.config.tsでheadタグに指定しているため読み込み不要。
  useWebFont(props.font, props.weight);
}

const id = useId(`BaLayoutLogo--${getCurrentInstance().uid}`);
const className = bemx('BaLayoutLogo', id.value);
useCss(
  () =>
    `.BaLayoutLogo--${id.value} {
      font-family: "${props.font}" !important;
      font-weight: ${props.weight} !important;
    }`,
);
</script>

<template>
  <ClientOnly>
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
  </ClientOnly>
</template>

<style lang="scss">
$logo-initial-letter-spacing: 6px;
$logo-letter-spacing: 4px;
$logo-phone-letter-spacing: 2px;

.BaLayoutLogo {
  display: flex;
  font-size: $font-size-80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: $scale20;
  color: $white-color;

  @include phone {
    margin-left: $scale10;
    font-size: $font-size-44px;
  }

  &__B {
    letter-spacing: $logo-initial-letter-spacing;
    @include phone {
      letter-spacing: $logo-phone-letter-spacing;
    }
  }

  &__Lue {
    letter-spacing: $logo-letter-spacing;
    font-size: $font-size-48px;
    margin-right: $scale36;
    @include phone {
      font-size: $font-size-28px;
      letter-spacing: $logo-phone-letter-spacing;
      margin-right: $scale12;
    }
  }

  &__Star {
    margin-top: $scale16;
    margin-bottom: $scale-minus16;
    margin-right: $scale36;
    color: $accent-yellow-color;
    @include phone {
      margin-top: $scale8;
      margin-bottom: $scale-minus8;
      margin-right: $scale12;
      font-size: $font-size-48px;
      letter-spacing: 0;
    }
  }

  &__A {
    letter-spacing: $logo-initial-letter-spacing;
    @include phone {
      letter-spacing: $logo-phone-letter-spacing;
    }
  }

  &__Rchitect {
    letter-spacing: $logo-letter-spacing;
    font-size: $font-size-48px;
    @include phone {
      font-size: $font-size-28px;
      letter-spacing: $logo-phone-letter-spacing;
    }
  }
}
</style>
