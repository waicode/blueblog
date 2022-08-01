<script lang="ts">
import { defineComponent } from '#imports';

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
  },
});
</script>

<template>
  <slot />
</template>

<style lang="scss">
/* stylelint-disable selector-class-pattern */
pre code .line {
  display: block;
  min-height: $font-size-16px;
}
/* stylelint-enable selector-class-pattern */
</style>
