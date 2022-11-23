<script setup lang="ts">
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextConst';
defineProps({
  // eslint-disable-next-line vue/require-default-prop
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
            ><AppText :type="TEXT_SIZE.ERROR_CODE" :color="TEXT_COLOR.DARK_GRAY">{{
              error ? error.statusCode : ''
            }}</AppText></code
          >
          <div class="BaError__Message">
            <AppText v-if="error && error.statusCode === '404'" :type="TEXT_SIZE.BODY1"
              >お探しのページが見つかりませんでした。</AppText
            >
            <AppText v-else :type="TEXT_SIZE.BODY1">エラーが発生しました。</AppText>
          </div>
        </div>
      </BaLayoutMain>
    </BaLayoutContainer>
    <BaLayoutFooter />
  </div>
</template>

<style lang="scss">
$ba-error-content-min-height: 320px;

.BaError {
  text-align: center;
  min-height: 100vh;

  &__Content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $scale20;
    min-height: $ba-error-content-min-height;
  }
}
</style>
