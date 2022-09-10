<script setup lang="ts">
interface CaptureImagePropType {
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

const props = defineProps<CaptureImagePropType>();
</script>

<template>
  <div class="AppCaptureImage">
    <div class="AppCaptureImage__Image">
      <AppImage v-bind="props" />
    </div>
  </div>
</template>

<style lang="scss">
$capture-image-border-color: $gray-b5-color;

.AppCaptureImage {
  display: flex;
  justify-content: center;
  margin-top: $scale32;
  margin-bottom: $scale32;

  &__Image {
    position: relative;
    max-width: 80%;

    img {
      vertical-align: top;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      content: '';
      border-style: solid;
      border-width: $border-width8;
      border-image-source: repeating-linear-gradient(
        45deg,
        $capture-image-border-color,
        $capture-image-border-color $border-width2,
        transparent 0,
        transparent 6px
      );
      border-image-slice: 20;
      border-image-repeat: round;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
