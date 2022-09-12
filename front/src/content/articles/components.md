---
title: この技術ブログで実装したすべてのコンポーネントの一覧（サンプルと解説付き）
description: このブログで実装したすべてのコンポーネントをサンプルと一緒に確認できます。記事ファイルに記述可能なコンポーネントはすべて載せています。
icon: tabler:components
category: フロントエンド
tags: ['フロントエンド']
createdAt: '2022-08-14T13:12:00+09:00'
---

（解説は順次追加していきます🙇🏻‍♂️）

## マークダウン形式で表示できるコンポーネント

はじめに、マークダウン形式で表示されるコンポーネントを記載します。

### コンポーネントの制御ファイル

これらの見た目や振る舞いは`components/content`にあるコンポーネントによって制御されています。
`nuxt/content(v2)`の[Prose Components](https://content.nuxtjs.org/api/components/prose)を独自に上書きしてスタイルをあてています。

| コンポーネント名 | 対象ファイル |
| ---- | ---- |
| 段落 | `components/content/ProseP.vue`|
| 強調 | `components/content/ProseStrong.vue`|
| 見出し2 | `components/content/ProseH2.vue`|
| 見出し3 | `components/content/ProseH3.vue`|
| 見出し4 | `components/content/ProseH4.vue`|
| 見出し5 | `components/content/ProseH5.vue`|
| 見出し6 | `components/content/ProseH6.vue`|
| 順序なしリスト | `components/content/ProseUl.vue`|
| 順序付きリスト | `components/content/ProseOl.vue`|
| リスト項目 | `components/content/Proseli.vue`|
| 表 | `components/content/ProseTable.vue`|
| 表本体 | `components/content/ProseTbody.vue`|
| 表ヘッダー | `components/content/ProseThead.vue`|
| 表データセル | `components/content/ProseTd.vue`|
| 表見出しセル | `components/content/ProseTh.vue`|
| 引用 | `components/content/ProseBlockquote.vue`|
| 画像 | `components/content/ProseImg.vue`|
| リンク | `components/content/ProseA.vue`|
| コードブロック | `components/content/ProseCode.vue`|
| コードスパン | `components/content/ProseCodeInline.vue`|
| 区切り線 | `components/content/ProseHr.vue`|

### コンポーネントのサンプル

以下、コンポーネントの表示のサンプルです。

## 見出し2のテキスト

ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。

目立たせるときは**このように強調**します。

### 見出し3のテキスト

ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。

#### 見出し4のテキスト

##### 見出し5のテキスト

ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。

###### 見出し6のテキスト その1

* これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストですこれはリストです。これはリストです。これはリストです。これはリストです。
* これはリストです。これはリストです。これはリストです。これはリストです。
* これはリストです。これはリストです。これはリストです。これはリストです。
* これはリストです。これはリストです。これはリストです。これはリストです。

ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。

###### 見出し6のテキスト その2

1. これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストですこれはリストです。これはリストです。これはリストです。これはリストです。
1. これはリストです。これはリストです。これはリストです。これはリストです。
1. これはリストです。これはリストです。これはリストです。これはリストです。
1. これはリストです。これはリストです。これはリストです。これはリストです。

以下はテーブルです。

| ヘッダー1 | ヘッダー2 | ヘッダー3 |
| ---- | ---- | ---- |
| ここにテキストが入ります。 | ここにテキストが入ります。 | ここにテキストが入ります。 |
| ここにテキストが入ります。 | ここにテキストが入ります。 | ここにテキストが入ります。 |

以下は画像です。

![content_v1_v2_comparison](article/content_v1_v2_comparison.png)

以下は引用です。

> これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。

以下はコードブロックです。行指定のハイライトとコピーができます。

```ts
const a = 4;
const b = a + 3;
const c  = a * b;
```

```ts [components/content/MyComponent.vue] {2,6-10}
<template>
  <input v-model.lazy="message"/>
</template>

<script setup>
import { watch, ref } from 'vue'
const message = ref('');

const saveMessage = () => {
  // do anything with the message
}

watch(message, (newMessage) => {
  saveMessage(newMessage) // only called on change events
})
</script>
```


これは`コードスパン`です。

以下はリンクです。

[mujiota.com](https://mujiota.com/ "mujiota.com home")

[ここ][mujiota]と[この][mujiota]リンクは同じになります。
[mujiota]という書き方もできます。

[mujiota]: https://mujiota.com/

## 独自に実装したコンポーネント

ここから先は独自に定義したコンポーネントを表示しています。

TODO: AppShopItemCardの読み込み

TODO: AppSupplementの読み込み
