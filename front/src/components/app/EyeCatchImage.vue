<script setup lang="ts">
import { getCurrentInstance } from 'vue';
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
   * アイキャッチ画像の幅。
   * %単位の比率かpx単位または単位なしの数値で指定する。
   * `auto`の指定は不可。
   */
  width?: string;

  /**
   * 高さ
   *
   * アイキャッチ画像の高さ。
   * %単位の比率かpx単位または単位なしの数値で指定する。
   * `auto`の指定も可。
   */
  height?: string;

  /**
   * アイコンサイズ比率
   *
   * イメージ中央に表示するアイコンサイズの比率。
   */
  iconRatio?: number;

  /**
   * アスペクト比
   *
   * 幅と高さをアスペクト比で指定する場合に設定する
   */
  aspectRatio?: number;
}

const props = withDefaults(defineProps<EyeCatchImagePropType>(), {
  width: '100%',
  height: '100%',
  iconRatio: 1 / 3,
  aspectRatio: 1.91,
});

// アスペクト比は高さが未指定の場合は`1.91 / 1`に指定する
const aspectRatioValue = computed(() => props.aspectRatio ?? (props.height ? undefined : 1.91 / 1));

const iconRatioWidth = computed(() => {
  if (props.width.includes('%')) {
    const widthRatio = props.width.replace('%', '');
    return `${Math.trunc(Number(widthRatio) * props.iconRatio)}%`;
  } else {
    return undefined;
  }
});

const iconPixelWidth = computed(() => {
  if (props.width.includes('%')) {
    return undefined;
  }
  const widthNumber = props.width.includes('px') ? props.width.replace('px', '') : props.width;
  return `${Math.trunc(Number(widthNumber) * props.iconRatio)}px`;
});

// TODO: ClientOnlyで逃げたが、本来はサーバサイドとクライアントサイドに共通のランダムIDを用意してSSRしたい
const instanceUid = getCurrentInstance()?.uid;
const id = useId(`AppEyeCatchImage--${instanceUid}`);
const className = bemx('AppEyeCatchImage', id.value);

useCss(
  () =>
    `
    .AppEyeCatchImage--${id.value} .AppEyeCatchImage__Bg {
      ${props.width ? `width: ${props.width};` : ''}
      ${props.height ? `height: ${props.height};` : ''}
      ${unref(aspectRatioValue) ? `aspect-ratio: ${unref(aspectRatioValue)};` : ''}
    }
    .AppEyeCatchImage--${id.value} .AppEyeCatchImage__Icon {
      ${unref(iconRatioWidth) ? `width: ${unref(iconRatioWidth)};` : ''}
    }
    .AppEyeCatchImage--${id.value} .AppEyeCatchImage__Icon svg {
      ${unref(iconPixelWidth) ? `width: ${unref(iconPixelWidth)};` : ''}
    }
    `,
);
</script>

<template>
  <ClientOnly>
    <div :class="className">
      <div class="AppEyeCatchImage__Bg">
        <div class="AppEyeCatchImage__Icon">
          <Icon :icon="icon" />
        </div>
      </div>
    </div>
  </ClientOnly>
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
      width: 100%;
      height: auto;
    }
  }
}
</style>
