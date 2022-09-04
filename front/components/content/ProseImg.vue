<script setup lang="ts">
interface ProseImgPropType {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

const props = withDefaults(defineProps<ProseImgPropType>(), {
  src: '',
  alt: '',
  width: undefined,
  height: undefined,
});

// リンクでない場合はassets/imagesフォルダ配下のパスが指定されたとみなす
const imagePath = computed(() => (props.src.match(/^https?:\/\/.+/) ? undefined : props.src));
</script>

<template>
  <div class="ContentProseImg">
    <div class="ContentProseImg__Image">
      <AppImage :image-path="imagePath" :url="src" :alt="alt" :width="width" :height="height" />
    </div>
  </div>
</template>

<style lang="scss">
$capture-image-border-color: $gray-b5-color;

.ContentProseImg {
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
