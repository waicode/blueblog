<script setup lang="ts">
import { Icon } from '@iconify/vue';

const { copy, copied } = useClipboard();

const contentProseCodeRef = ref(undefined);

const { isOutside } = useMouseInElement(contentProseCodeRef);

withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: '', language: null, filename: null, highlights: () => [] },
);
</script>

<template>
  <div ref="contentProseCodeRef" class="ContentProseCode">
    <span v-show="filename" class="ContentProseCode__FileName">{{ filename }}</span>
    <transition name="fade"
      ><span v-show="!isOutside" class="ContentProseCode__CopyIcon"
        ><Icon icon="tabler:copy" @click="copy(code)" /></span
    ></transition>
    <span v-if="copied" class="ContentProseCode__CopiedText">コピーしました！</span>
    <slot />
  </div>
</template>

<style lang="scss">
$code-bg-color: $gray-f5-color;
$code-copy-icon-color: $gray-99-color;
$code-copied-text-color: $code-copy-icon-color;
$code-line-min-height: 16px;
$code-line-before-width: 16px;
$code-line-before-text-color: $blue-gray-alpha-040-color;
$code-line-before-border-color: $accent-yellow-color;

.ContentProseCode {
  background: $code-bg-color;
  position: relative;
  margin-top: $scale16;
  margin-bottom: $scale16;
  padding-top: $scale16;
  overflow: hidden;
  border-radius: $scale8;

  /* stylelint-disable */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0%;
  }
  /* stylelint-eable */

  &__FileName {
    display: block;
    font-size: 14px;
    font-weight: 100;
    padding-left: 20px;
  }

  &__CopyIcon {
    svg {
      position: absolute;
      width: $scale20;
      height: $scale20;
      top: $scale12;
      right: $scale16;
      color: $code-copy-icon-color;
    }

    &:hover {
      cursor: pointer;
    }
  }

  // TODO: テキストコンポーネントへの分離
  &__CopiedText {
    position: absolute;
    top: $scale12;
    right: $scale44;
    font-size: 12px;
    color: $code-copied-text-color;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex: 1 1 0%;
    overflow-x: auto;
    padding: $scale16;
    line-height: 1.625;
    counter-reset: lines;

    code {
      font-family: $font-group-code;
      width: 100%;
      display: flex;
      flex-direction: column;

      .line {
        display: inline-table;
        min-height: $code-line-min-height;

        &::before {
          counter-increment: lines;
          content: counter(lines);
          width: $code-line-before-width;
          margin-right: $scale24;
          display: inline-block;
          text-align: left;
          color: $code-line-before-text-color;
        }
      }

      .highlight {
        background-color: #ededed;
        display: block;
        margin-right: $scale-minus16;
        margin-left: $scale-minus16;
        padding-right: $scale16;
        padding-left: $scale12;
        border-left: $border-width4 solid $code-line-before-border-color;
      }
    }
  }
}
</style>
