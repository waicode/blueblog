<script setup lang="ts">
interface PhotoImagePropType {
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

  /**
   * 画像のキャプション
   */
  caption?: string;
}

const props = defineProps<PhotoImagePropType>();
</script>

<template>
  <div class="AppPhotoImage">
    <div class="AppPhotoImage__Image">
      <AppImage v-bind="props" />
    </div>
    <div v-if="caption" class="AppPhotoImage__Caption">
      <AppText>{{ caption }}</AppText>
    </div>
  </div>
</template>

<style lang="scss">
$photo-image-frame-bg-color: $bluish-white-color;
$photo-image-frame-border-color: $gray-cfd8dc-color;
$photo-image-shadow-color: $blue-gray-alpha-007-color;
$photo-image-blend-color: rgba(230, 193, 61, 0.1);
$photo-image-frame-tilt-top: -10px;
$photo-image-frame-tilt-left: -25px;
$photo-image-frame-tilt-right: $photo-image-frame-tilt-left;
$photo-image-frame-tilt-bottom: $photo-image-frame-tilt-top;
.AppPhotoImage {
  display: flex;
  justify-content: center;
  margin-top: $scale40;
  margin-bottom: $scale8;

  &__Image {
    position: relative;
    max-width: 60%;

    &::before,
    &::after {
      position: absolute;
      z-index: $z-index-1;
      width: 70px;
      height: 25px;
      content: '';
      background-color: $photo-image-frame-bg-color;
      transform: rotate(-35deg);
    }

    &::before {
      top: $photo-image-frame-tilt-top;
      left: $photo-image-frame-tilt-left;
      border-bottom: $border-width1 solid $photo-image-frame-border-color;
    }

    &::after {
      right: $photo-image-frame-tilt-right;
      bottom: $photo-image-frame-tilt-bottom;
      border-top: $border-width1 solid $photo-image-frame-border-color;
    }
    img {
      vertical-align: top;
      filter: sepia(0.25) contrast(1.1) brightness(1.1);
      border-radius: $border-radius8;
      box-shadow: 0 2px 4px $photo-image-shadow-color;

      &::before {
        content: '';
        background: $photo-image-blend-color;
        mix-blend-mode: lighten;
      }
    }
  }
  &__Caption {
    padding-top: $scale24;
    padding-bottom: $scale16;
    text-align: center;
  }
}
</style>
