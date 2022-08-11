<script setup lang="ts">
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';

defineProps({
  error: Object,
});
</script>

<template>
  <div class="BaError">
    <BaLayoutHeader />
    <BaLayoutContainer>
      <BaLayoutMain>
        <div class="BaError__Content">
          <code class="BaError__Code"
            ><AppText :type="TEXT_SIZE.ERROR_CODE" :color="TEXT_COLOR.DARK_GRAY">404</AppText></code
          >
          <div class="BaError__Message">
            <AppText :type="TEXT_SIZE.BODY1">お探しのページが見つかりませんでした。</AppText>
          </div>
        </div>
      </BaLayoutMain>
    </BaLayoutContainer>
    <BaLayoutFooter />
  </div>
</template>

<style lang="scss">
.BaError {
  text-align: center;
  min-height: 100vh;

  &__Content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $scale20;
    min-height: 320px;
  }

  &__Code {
  }

  &__Message {
  }
}
</style>
