<template>
  <main class="BaLayoutMain">
    <slot />
  </main>
</template>

<style lang="scss">
$head2-font-size: $font-size-24px;
$head2-font-weight: $font-weight-700;
$head2-line-height: $line-height-150;
$head2-before-width: 29px;
$head2-before-height: 19px;

$head3-font-size: $font-size-20px;
$head3-font-weight: $font-weight-700;
$head3-line-height: $line-height-160;
$head3-after-bg-color: $gray-e0-color;
$head3-after-width: 6px;
$head3-after-height: 70%;

$head4-font-size: $font-size-18px;
$head4-font-weight: $font-weight-700;
$head4-line-height: $line-height-156;
$head4-after-bg-color: $gray-99-color;
$head4-after-width: $head3-after-width;
$head4-after-height: $head3-after-height;

$head5-font-size: $font-size-16px;
$head5-font-weight: $font-weight-700;
$head5-line-height: $line-height-150;

$ul-li-before-width: 9px;
$ul-li-before-height: $ul-li-before-width;

$table-line-height: $line-height-150;
$table-border-color: $gray-cfd8dc-color;
$table-th-font-weight: $font-weight-700;
$table-th-bg-color: $gray-eceff1-color;
$table-td-bg-color: $white-color;

.BaLayoutMain {
  // flexの可変レイアウト
  flex: 1;
  width: 100%;

  // nuxt/content（Markdown）のテキストスタイルは例外的にここで直接指定する。
  // その他のテキストは必ず`AppText`コンポーネントを使って装飾すること。

  // ベースのテキストはbody1
  font-size: $font-size-16px;
  font-style: normal;
  line-height: $line-height-175;

  // 段落
  p {
    margin-bottom: $scale32;
  }

  // 見出し2
  h2 {
    font-size: $head2-font-size;
    font-weight: $head2-font-weight;
    line-height: $head2-line-height;
    margin-top: $scale52;
    margin-bottom: $scale20;

    &::before {
      display: inline-block;
      background-size: contain;
      background-repeat: no-repeat;
      content: '';
      background-image: url('~/assets/images/shared/miss-fajardose_h2-left@2x.png');
      width: $head2-before-width;
      height: $head2-before-height;
      margin-right: $scale8;
      margin-bottom: $scale2;
    }
  }

  // 見出し3
  h3 {
    position: relative;
    font-size: $head3-font-size;
    font-weight: $head3-font-weight;
    line-height: $head3-line-height;
    padding-left: $scale24;
    margin-top: $scale36;
    margin-bottom: $scale20;

    &::after {
      position: absolute;
      top: 6px;
      left: 0;
      width: $head3-after-width;
      height: $head3-after-height;
      content: ' ';
      background-color: $head3-after-bg-color;
    }

    a {
      /* stylelint-disable selector-class-pattern */
      .icon {
        display: none;
      }
      /* stylelint-enable selector-class-pattern */
    }
  }

  // 見出し4
  h4 {
    position: relative;
    font-size: $head4-font-size;
    font-weight: $head4-font-weight;
    line-height: $head4-line-height;
    padding-left: $scale24;
    margin-top: $scale32;
    margin-bottom: $scale20;

    &::after {
      position: absolute;
      top: 6px;
      left: 0;
      width: $head4-after-width;
      height: $head4-after-height;
      content: ' ';
      background-image: repeating-linear-gradient(
        $head4-after-bg-color,
        $head4-after-bg-color 1px,
        transparent 0,
        transparent 4px
      );
    }

    a {
      /* stylelint-disable selector-class-pattern */
      .icon {
        display: none;
      }
      /* stylelint-enable selector-class-pattern */
    }
  }

  // 見出し5
  h5 {
    font-size: $head5-font-size;
    font-weight: $head5-font-weight;
    line-height: $head5-line-height;
    margin-top: $scale28;
    margin-bottom: $scale20;

    a {
      /* stylelint-disable selector-class-pattern */
      .icon {
        display: none;
      }
      /* stylelint-enable selector-class-pattern */
    }
  }

  // リスト
  ol,
  ul {
    position: relative;
    padding: 0;
    margin-bottom: $scale32;
    list-style-type: none;
    line-height: $line-height-143;
  }

  ol {
    counter-reset: number;
  }

  ul li {
    position: relative;
    padding-left: $scale28;
    margin-bottom: $scale8;
    margin-left: $scale4;
    list-style: none;

    &::before {
      position: absolute;
      top: 8px;
      left: 4px;
      display: block;
      width: $ul-li-before-width;
      height: $ul-li-before-height;
      content: ' ';
      background: $dark-black-color;
      border-radius: $border-radius-rate20;
      box-shadow: -1px -1px 1px $gray-097-alpha-015-color inset;
    }
  }

  ol li {
    position: relative;
    padding-left: $scale28;
    margin-bottom: $scale8;
    margin-left: $scale4;
    list-style: none;

    &::before {
      position: absolute;
      top: 0;
      left: 3px;
      display: block;
      text-align: center;
      content: counter(number) '.';
      counter-increment: number;
    }
  }

  // 画像
  img {
    margin-bottom: $scale32;
  }

  // テーブル
  table {
    margin-bottom: $scale32;
    width: auto;
    border-collapse: collapse;
    line-height: $table-line-height;
    word-break: normal;
    display: block;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  td,
  th {
    padding: $scale8;
    border: 1px solid $table-border-color;
  }

  td {
    background: $table-td-bg-color;
  }

  th {
    font-weight: $table-th-font-weight;
    background: $table-th-bg-color;
    text-align: center !important;
  }
}
</style>
