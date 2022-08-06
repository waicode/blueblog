<template>
  <div>
    <BaLayoutHeader />
    <BaLayoutContainer>
      <BaLayoutMain><slot /></BaLayoutMain>
      <BaLayoutSub />
    </BaLayoutContainer>
    <BaLayoutFooter />
  </div>
</template>

<style lang="scss">
body {
  /* Gradation/Blue Liner */
  background: linear-gradient(180deg, #4b73ff 10%, #7cf7ff 100%);
}
</style>
