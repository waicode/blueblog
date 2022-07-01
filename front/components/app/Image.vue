<script setup lang="ts">
import { getFileName } from '@/utils/util';

interface ImagePropType {
  /**
   * 画像パス
   *
   * assets/imagesフォルダ配下のパスを指定する。
   */
  path: string;

  /**
   * 画像のaltテキスト
   *
   * 未指定の場合はファイル名がalt属性に設定される。
   */
  alt?: string;
}

const props = defineProps<ImagePropType>();

// 静的アセットの解決されたURLを取得
const imageUrl = new URL(`../../assets/images/${props.path}`, import.meta.url).href;
// altが未指定の場合はファイル名を設定
const imageAltText = props.alt ? props.alt : getFileName(props.path);
</script>

<template>
  <img class="AppAssetsImage" :alt="imageAltText" :src="imageUrl" />
</template>
