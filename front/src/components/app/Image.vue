<script setup lang="ts">
import { getFileName } from '@/utils/util';
import { isAssetImageSrcPath } from '@/components/app/ImageComposable';

interface ImagePropType {
  /**
   * 画像のソース
   *
   * 以下のいずれかを受け取り、値で判定して処理を分ける。
   *
   * 1. assets/imagesフォルダ配下のパス
   * 2. 外部サイトの画像を利用する際に画像URL
   */
  src: string;

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

const props = defineProps<ImagePropType>();

// altが未指定のとき、画像パス指定の場合はファイル名を設定
const imageAltText = computed(() => {
  if (!isAssetImageSrcPath(props.src)) return props.alt;
  return props.alt ? props.alt : getFileName(props.src);
});

// assets/imagesフォルダ配下のパスが指定された場合はURLを取得
const imageSrc = computed(() =>
  // TODO: Nuxtで動的なAsset指定のやり方が出てきたら更新すること
  isAssetImageSrcPath(props.src) ? new URL(`../../assets/images/${props.src}`, import.meta.url).href : props.src,
);
</script>

<template>
  <ClientOnly>
    <img class="AppImage" :alt="imageAltText" :src="imageSrc" :width="width" :height="height" />
  </ClientOnly>
</template>
