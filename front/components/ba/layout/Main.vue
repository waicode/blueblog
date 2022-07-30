<template>
  <main class="BaLayoutMain">
    <slot />
  </main>
</template>

<style lang="scss">
.BaLayoutMain {
  // flexの可変レイアウト
  flex: 1;
  width: 100%;
}
</style>
