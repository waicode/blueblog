<template>
  <ol class="ContentProseOl">
    <slot />
  </ol>
</template>
<style lang="scss">
ol.ContentProseOl {
  position: relative;
  padding: 0;
  margin-bottom: $scale32;
  list-style-type: none;
  counter-reset: number;
}
</style>
