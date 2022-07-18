<template>
  <main class="BaLayoutMain">
    <slot />
  </main>
</template>

<style lang="scss">
$head3-gray-color: $gray-e0-color;
$head4-gray-color: $gray-99-color;

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
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    margin-top: $scale52;
    margin-bottom: $scale20;
    &::before {
      display: inline-block;
      background-size: contain;
      background-repeat: no-repeat;
      content: '';
      background-image: url('~/assets/images/shared/miss-fajardose_h2-left@2x.png');
      width: 29px;
      height: 19px;
      margin-right: $scale8;
      margin-bottom: $scale2;
    }
  }

  // 見出し3
  h3 {
    position: relative;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.6;
    padding-left: $scale24;
    margin-top: $scale36;
    margin-bottom: $scale20;
    &::after {
      position: absolute;
      top: 6px;
      left: 0;
      width: 6px;
      height: 70%;
      content: '';
      background-color: $head3-gray-color;
    }
    a {
      .icon {
        display: none;
      }
    }
  }

  // 見出し4
  h4 {
    position: relative;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.56;
    padding-left: $scale24;
    margin-top: $scale32;
    margin-bottom: $scale20;
    &::after {
      position: absolute;
      top: 6px;
      left: 0;
      width: 6px;
      height: 70%;
      content: '';
      background-image: repeating-linear-gradient(
        $head4-gray-color,
        $head4-gray-color 1px,
        transparent 0,
        transparent 4px
      );
    }
    a {
      .icon {
        display: none;
      }
    }
  }

  // 見出し5
  h5 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    margin-top: $scale28;
    margin-bottom: $scale20;
    a {
      .icon {
        display: none;
      }
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
      width: 9px;
      height: 9px;
      content: ' ';
      background: $dark-black-color;
      border-radius: $border-radius-rate20;
      box-shadow: -1px -1px 1px rgba(97, 97, 97, 0.15) inset;
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

  // テーブル
  table {
    margin-bottom: $scale32;
    width: auto;
    border-collapse: collapse;
    font-size: 16px;
    line-height: 1.5;
    word-break: normal;
    display: block;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  td,
  th {
    padding: $scale8;
    border: 1px solid #cfd8dc;
    background: #fff;
  }
  th {
    font-weight: 700;
    background: #eceff1;
    text-align: center !important;
  }
}
</style>
