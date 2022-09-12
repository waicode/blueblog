<script setup lang="ts">
interface CapturePropType {
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

  /**
   * 画像のキャプション
   */
  caption?: string;
}

const props = defineProps<CapturePropType>();
</script>

<template>
  <div class="AppCapture">
    <div class="AppCapture__Image">
      <AppImage v-bind="props" />
    </div>
    <div v-if="caption" class="AppCapture__Caption">
      <AppText>{{ caption }}</AppText>
    </div>
  </div>
</template>

<style lang="scss">
$capture-image-border-color: $gray-b5-color;

.AppCapture {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: $scale40;
  margin-bottom: $scale32;

  &__Image {
    position: relative;
    max-width: 80%;

    @include tablet {
      max-width: 92%;
    }

    @include phone {
      max-width: 100%;
    }

    img {
      vertical-align: top;
      border-radius: $border-radius2;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 0 6px $gray-240-alpha-060-color;
    }
  }

  &__Caption {
    padding-top: $scale8;
    text-align: center;
  }
}
</style>
