<script setup lang="ts">
import useId from "@/composables/useId";
import useCss from "@/composables/useCss";
import useWebFont from "@/composables/useWebFont";
import { bemx } from "@/utils/util";
import {
  LOGO_FONT_TYPE_MAP,
  LogoFontType,
  LOGO_FONT_WEIGHT_MAP,
  LogoFontWeightValueType,
} from "./logoComposable";

interface LogoPropType {
  font?: LogoFontType;
  weight?: LogoFontWeightValueType;
}

const props = withDefaults(defineProps<LogoPropType>(), {
  font: LOGO_FONT_TYPE_MAP.ADVENT__PRO,
  weight: LOGO_FONT_WEIGHT_MAP.weight600,
});

useWebFont(props.font, props.weight);

const id = useId();
const className = bemx("DbeLogo", id);
useCss(
  () =>
    `.DbeLogo--${id} {
      font-family: "${props.font}" !important;
      font-weight: ${props.weight} !important;
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
