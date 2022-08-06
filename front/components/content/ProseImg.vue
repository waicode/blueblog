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
  <span class="ContentProseImg">
    <AppImage :image-path="imagePath" :url="src" :alt="alt" :width="width" :height="height" />
  </span>
</template>

<style lang="scss">
.ContentProseImg {
  margin-bottom: $scale32;
}
</style>
