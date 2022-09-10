<template>
  <div class="BaLayoutHeader">
    <div class="BaLayoutHeader__Logo">
      <AppLink to="/">
        <BaLogo />
      </AppLink>
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
    @include phone {
      margin-top: $scale48;
      margin-bottom: $scale36;
    }
  }
}
</style>
