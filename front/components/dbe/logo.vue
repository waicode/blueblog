<script setup lang="ts">
import useId from "@/composables/useId";
import useCss from "@/composables/useCss";
import useWebFont from "@/composables/useWebFont";
import { bemx } from "@/utils/util";
import { LOGO_FONT_TYPE, LogoFontType } from "./logoComposable";

interface LogoPropType {
  font?: LogoFontType;
}

const props = withDefaults(defineProps<LogoPropType>(), {
  font: LOGO_FONT_TYPE.ADVENT__PRO,
});

useWebFont(props.font);

const id = useId();
const className = bemx("DbeLogo", id);
useCss(
  () =>
    `.${className} {
      font-family: ${props.font} !important;
    }`
);
</script>

<template>
  <div :class="className">
    <span class="DbeLogo__Designer">DESIGNER</span>
    <span class="DbeLogo__Star1">*</span>
    <span class="DbeLogo__Blue">BLUE</span>
    <span class="DbeLogo__Star2">*</span>
    <span class="DbeLogo__Engineer">ENGINEER</span>
  </div>
</template>

<style lang="scss">
.DbeLogo {
  display: flex;
  font-size: $font-size-48px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: $white-color;

  &__Star1,
  &__Star2 {
    color: $accent-yellow-color;
  }
}
</style>
