<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextConst';

// クリップボードにコピー
const { copy, copied } = useClipboard();

// マウスオーバーまたはタップでコピーボタンを表示
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
  <ClientOnly>
    <div ref="contentProseCodeRef" class="ContentProseCode">
      <span v-show="filename" class="ContentProseCode__FileName"
        ><AppText :type="TEXT_SIZE.CODE_TITLE1" :color="TEXT_COLOR.DARK_GRAY">{{ filename }}</AppText></span
      >
      <transition name="fade"
        ><span v-show="!isOutside" class="ContentProseCode__CopyIcon"
          ><Icon icon="tabler:copy" @click="copy(code)" /></span
      ></transition>
      <span v-if="copied" class="ContentProseCode__CopiedText"
        ><AppText :type="TEXT_SIZE.TOAST1" :color="TEXT_COLOR.GRAY">コピーしました！</AppText></span
      >
      <AppText :type="TEXT_SIZE.CODE1"><slot /></AppText>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
$code-bg-color: $gray-f5-color;
$code-copy-icon-color: $gray-99-color;
$code-line-min-height: 16px;
$code-line-before-width: 16px;
$code-line-before-text-color: $blue-gray-alpha-040-color;
$code-line-before-border-color: $accent-yellow-color;
$code-highlight-bg-color: $gray-ed-color;

.ContentProseCode {
  background: $code-bg-color;
  position: relative;
  margin-top: $scale16;
  margin-bottom: $scale16;
  padding-top: $scale16;
  border-radius: $scale8;
  overflow: hidden;

  /* stylelint-disable */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0%;
  }
  /* stylelint-enable */

  &__FileName {
    display: block;
    padding-left: $scale20;
  }

  &__CopyIcon {
    svg {
      position: absolute;
      width: $scale20;
      height: $scale20;
      top: $scale16;
      right: $scale16;
      color: $code-copy-icon-color;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__CopiedText {
    position: absolute;
    top: $scale16;
    right: $scale44;
    background-color: $code-bg-color;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex: 1 1 0%;
    overflow-x: auto;
    padding: $scale16;
    counter-reset: lines;
  }

  code {
    display: flex;
    flex-direction: column;

    /* stylelint-disable */
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
      background-color: $code-highlight-bg-color;
      display: block;
      margin-right: $scale-minus16;
      margin-left: $scale-minus16;
      padding-right: $scale16;
      padding-left: $scale12;
      border-left: $border-width4 solid $code-line-before-border-color;
    }
    /* stylelint-enable */
  }
}
</style>
