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
}

const props = defineProps<ImagePropType>();

// altが未指定のとき、画像パス指定の場合はファイル名を設定
const imageAltText = ref('');
if (props.imagePath) {
  imageAltText.value = props.alt ? props.alt : getFileName(props.imagePath);
}
</script>

<template>
  <img v-if="imagePath" class="AppAssetsImage" :alt="imageAltText" :src="`~/assets/image/${props.imagePath}`" />
  <img v-else class="AppAssetsImage" :alt="alt" :src="url" />
</template>
