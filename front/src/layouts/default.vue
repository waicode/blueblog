<template>
  <div class="BaLayout">
    <BaLayoutHeader />
    <BaLayoutContainer>
      <BaLayoutMain><slot /></BaLayoutMain>
      <BaLayoutSub />
    </BaLayoutContainer>
    <BaLayoutFooter />
  </div>
</template>

<style lang="scss">
.BaLayout {
  font-family: $font-group-normal;
  background: $main-blue-linear-gradient;
}
</style>
