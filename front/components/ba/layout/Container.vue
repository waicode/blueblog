<template>
  <div class="BaLayoutContainer">
    <slot />
  </div>
</template>
<style lang="scss">
$container-desktop-max-width: 1200px;
$container-bg-color: $bluish-white-color;
$container-shadow-color: $gray-000-alpha-010-color;

.BaLayoutContainer {
  display: flex;
  flex-direction: row;
  max-width: $container-desktop-max-width;
  padding: $scale32 $scale44;
  gap: $scale60;
  margin: 0 auto;
  background-color: $container-bg-color;
  border-radius: $border-radius12;
  box-shadow: 0 0 20px $container-shadow-color;
  @include tablet {
    gap: $scale32;
    max-width: 96%;
    margin: 0 auto $scale64;
    padding: $scale28 $scale32;
  }
  @include phone {
    gap: $scale24;
    max-width: 100%;
    flex-direction: column;
  }
}
</style>
