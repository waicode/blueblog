<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';

interface BlockquotePropType {
  citeText?: string;
  citeUrl?: string;
}

defineProps<BlockquotePropType>();
</script>

<template>
  <blockquote class="AppBlockquote">
    <AppText :type="TEXT_SIZE.BODY1">
      <slot />
    </AppText>
    <cite v-if="citeText">
      <a v-if="citeUrl" href="citeUrl" target="_blank" rel="nofollow noopener">
        <AppText :type="TEXT_SIZE.DESCRIPTION1">{{ citeText }}</AppText>
      </a>
      <AppText v-else :type="TEXT_SIZE.DESCRIPTION1">{{ citeText }}</AppText>
    </cite>
  </blockquote>
</template>

<style lang="scss">
$blockquote-bg-color: $gray-fa-color;
$blockquote-border-color: $gray-eceff1-color;

$blockquote-before-icon-width: 40px;
$blockquote-before-icon-height: $blockquote-before-icon-width;

.AppBlockquote {
  position: relative;
  box-sizing: border-box;
  padding: $scale12 $scale20 $scale12 $scale72;
  font-style: italic;
  background: $blockquote-bg-color;
  border: $border-width2 solid $blockquote-border-color;
  border-radius: $border-radius4;

  &::before {
    position: absolute;
    top: 18px;
    left: 15px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    content: ' ';
    background-image: url('~/assets/images/shared/fa-solid_quote-left@2x.png');
    height: $blockquote-before-icon-width;
    width: $blockquote-before-icon-height;
  }

  .AppText {
    padding: 0;
    margin: $scale12 0;
  }

  cite {
    display: block;
    margin-top: $scale8;
    text-align: right;
  }
}
</style>
