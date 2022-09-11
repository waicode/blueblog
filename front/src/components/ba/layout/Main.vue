<template>
  <main class="BaLayoutMain">
    <slot />
  </main>
</template>

<style lang="scss">
.BaLayoutMain {
  width: calc(100% - $scale60 - $sub-column-desktop-width);

  @include tablet {
    width: calc(100% - $scale60 - $sub-column-tablet-width);
  }

  @include phone {
    width: 100%;
  }
}
</style>
