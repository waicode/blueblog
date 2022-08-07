<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';
</script>

<template>
  <li class="ContentProseLi">
    <AppText :type="TEXT_SIZE.LIST1"><slot /></AppText>
  </li>
</template>

<style lang="scss">
$ul-li-before-width: 6px;
$ul-li-before-height: $ul-li-before-width;

ul.ContentProseUl {
  li.ContentProseLi {
    position: relative;
    padding-left: $scale28;
    margin-bottom: $scale8;
    margin-left: $scale4;
    list-style: none;

    &::before {
      position: absolute;
      top: 10px;
      left: 4px;
      display: block;
      width: $ul-li-before-width;
      height: $ul-li-before-height;
      content: ' ';
      background: $black-color;
      border-radius: $border-radius-rate20;
      box-shadow: -1px -1px 1px $gray-097-alpha-015-color inset;
    }
  }
}

ol.ContentProseOl {
  li.ContentProseLi {
    position: relative;
    padding-left: $scale28;
    margin-bottom: $scale8;
    margin-left: $scale4;
    list-style: none;

    &::before {
      position: absolute;
      top: 0;
      left: 4px;
      display: block;
      text-align: center;
      content: counter(number) '.';
      counter-increment: number;
      font-weight: 300;
    }
  }
}
</style>
