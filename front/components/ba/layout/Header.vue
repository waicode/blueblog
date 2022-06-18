<template>
  <div class="BaLayoutHeader">
    <div class="BaLayoutHeader__Logo">
      <BaLogo />
    </div>
  </div>
</template>

<style lang="scss">
.BaLayoutHeader {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__Logo {
    margin-top: $scale80;
    margin-bottom: $scale56;
  }
}
</style>
