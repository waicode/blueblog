<template>
  <span class="AppTagLabel">
    <!-- @slot 囲まれたタグ名を表示する。 -->
    <slot />
  </span>
</template>

<style lang="scss">
$tag-label-bg-color: $gray-f5-color;
$tag-label-text-color: $black-color;

.AppTagLabel {
  align-items: center;
  background-color: $tag-label-bg-color;
  border-radius: $border-radius4;
  color: $tag-label-text-color;
  display: inline-flex;
  justify-content: center;
  padding: $scale3 $scale8;
  white-space: nowrap;

  a:hover {
    text-decoration: underline;
  }
}
</style>
