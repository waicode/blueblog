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
