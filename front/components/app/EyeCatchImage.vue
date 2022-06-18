<script setup lang="ts">
import { Icon } from '@iconify/vue';

import useId from '@/composables/useId';
import useCss from '@/composables/useCss';
import { bemx } from '@/utils/util';

interface EyeCatchImagePropType {
  /**
   * アイコン指定文字列
   *
   * iconifyに指定する文字列
   */
  icon: string;

  /**
   * 幅
   *
   * アイキャッチ画像の幅
   */
  width: number;

  /**
   * 高さ
   *
   * アイキャッチ画像の高さ
   */
  height: number;
}

const props = defineProps<EyeCatchImagePropType>();

const id = useId();
const className = bemx('AppEyeCatchImage', id);
useCss(
  () =>
    `
    .AppEyeCatchImage--${id} .AppEyeCatchImage__Bg {
      width: ${props.width}px !important;
      height: ${props.height}px !important;
    }
    .AppEyeCatchImage--${id} .AppEyeCatchImage__Icon svg {
      width: ${Math.trunc(props.width / 1.5)}px !important;
      height: ${Math.trunc(props.height / 1.5)}px !important;
    }
    `,
);
</script>

<template>
  <div :class="className">
    <div class="AppEyeCatchImage__Bg">
      <div class="AppEyeCatchImage__Icon">
        <Icon :icon="icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$svg-icon-color: $white-color;

.AppEyeCatchImage {
  &__Bg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(220.55deg, #7cf7ff 0%, #4b73ff 100%);
  }

  &__Icon {
    svg {
      color: $svg-icon-color;
    }
  }
}
</style>
