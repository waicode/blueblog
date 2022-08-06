<script setup lang="ts">
import { getFileName } from '@/utils/util';

interface ImagePropType {
  /**
   * 画像パス
   *
   * assets/imagesフォルダ配下のパスを指定する。
   */
  imagePath?: string;

  /**
   * 画像リンク
   *
   * 外部サイトの画像を利用する際に画像URLを指定する。
   * imagePathが指定されている場合はそちらが優先される。
   */
  url?: string;

  /**
   * 画像のaltテキスト
   *
   * imagePathを指定している場合に限り、
   * 未指定の場合はファイル名がalt属性に設定される。
   */
  alt?: string;

  /**
   * 画像の幅
   */
  width?: string | number;

  /**
   * 画像の高さ
   */
  height?: string | number;
}

const props = withDefaults(defineProps<ImagePropType>(), {
  imagePath: undefined,
  url: undefined,
  alt: undefined,
  width: undefined,
  height: undefined,
});

// altが未指定のとき、画像パス指定の場合はファイル名を設定
const imageAltText = computed(() => {
  if (!props.imagePath) return props.alt;
  return props.alt ? props.alt : getFileName(props.imagePath);
});

// assets/imagesフォルダ配下のパスが指定された場合はURLを取得
const imageSrcPath = computed(() =>
  // TODO: Nuxtで動的なAsset指定のやり方が出てきたら更新すること
  props.imagePath ? new URL(`../../assets/images/${props.imagePath}`, import.meta.url).href : props.url,
);
</script>

<template>
  <div>
    <ClientOnly>
      <img class="AppImage" :alt="imageAltText" :src="imageSrcPath" :width="width" :height="height" />
    </ClientOnly>
  </div>
</template>
