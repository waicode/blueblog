<template>
  <div class="ContentProseTable">
    <table class="ContentProseTable__Table">
      <slot />
    </table>
  </div>
</template>

<style lang="scss">
.ContentProseTable {
  display: flex;
  margin-bottom: $scale32;

  &--align {
    &-center {
      // TODO: マークダウンでスタイルを指定できるようにする方法を模索する
      .ContentProseTable {
        justify-content: center;
      }
    }
  }

  &__Table {
    width: auto;
    border-collapse: collapse;
    word-break: normal;
    display: block;
    overflow: auto;
  }
}
</style>
