---
title: この技術ブログで実装したすべてのコンポーネントの一覧（サンプルと解説付き）
description: このブログで実装したすべてのコンポーネントをサンプルと一緒に確認できます。記事ファイルに記述可能なコンポーネントはすべて載せています。
icon: tabler:components
category: フロントエンド
tags: ['フロントエンド']
createdAt: '2022-08-14T13:12:00+09:00'
---

::app-supplement
---
type: warning
title: この記事は現在作成中です。
---
::

## マークダウン形式で表示できるコンポーネント

はじめに、マークダウン形式で表示されるコンポーネントを記載します。

### コンポーネントの制御ファイル

これらの見た目や振る舞いは`components/content`にあるコンポーネントによって制御されています。
`nuxt/content(v2)`の[Prose Components](https://content.nuxtjs.org/api/components/prose)を独自に上書きしてスタイルをあてています。

|種別| コンポーネント名 | 対象ファイル |
| ---- | ---- | ---- |
| 見出し | 見出し2 | `components/content/ProseH2.vue`|
| - | 見出し3 | `components/content/ProseH3.vue`|
| - | 見出し4 | `components/content/ProseH4.vue`|
| - | 見出し5 | `components/content/ProseH5.vue`|
| - | 見出し6 | `components/content/ProseH6.vue`|
| リスト | 順序なしリスト | `components/content/ProseUl.vue`|
| - | 順序付きリスト | `components/content/ProseOl.vue`|
| - | リスト項目 | `components/content/Proseli.vue`|
| テーブル | 表 | `components/content/ProseTable.vue`|
| - | 表本体 | `components/content/ProseTbody.vue`|
| - | 表ヘッダー | `components/content/ProseThead.vue`|
| - | 表データセル | `components/content/ProseTd.vue`|
| - | 表見出しセル | `components/content/ProseTh.vue`|
| その他のブロック要素 | 段落 | `components/content/ProseP.vue`|
| - | コードブロック | `components/content/ProseCode.vue`|
| - | 引用 | `components/content/ProseBlockquote.vue`|
| - | 区切り線 | `components/content/ProseHr.vue`|
| インライン要素 | 強調 | `components/content/ProseStrong.vue`|
| - | 画像 | `components/content/ProseImg.vue`|
| - | リンク | `components/content/ProseA.vue`|
| - | コードスパン | `components/content/ProseCodeInline.vue`|

### コンポーネントのサンプル

`components/content`配下にあるコンポーネントです。対応するMarkdown記述の見た目を制御します。

#### 見出し

##### ConetntProseH2-6

見出し2〜見出し6までコンポーネントでスタイルを定義しています。

## 見出し2のテキスト

ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。

### 見出し3のテキスト

ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。

#### 見出し4のテキスト

ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。

##### 見出し5のテキスト

ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。

###### 見出し6のテキスト

ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。

#### リスト

##### ConetntProseUl/Li

* これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストですこれはリストです。これはリストです。これはリストです。これはリストです。
* これはリストです。これはリストです。これはリストです。これはリストです。
* これはリストです。これはリストです。これはリストです。これはリストです。
* これはリストです。これはリストです。これはリストです。これはリストです。

##### ConetntProseOl/Li

1. これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストですこれはリストです。これはリストです。これはリストです。これはリストです。
2. これはリストです。これはリストです。これはリストです。これはリストです。
3. これはリストです。これはリストです。これはリストです。これはリストです。
4. これはリストです。これはリストです。これはリストです。これはリストです。

#### テーブル

##### ConetntProseTable/Tbody/Thead/Th/Tr/Td

| ヘッダー1 | ヘッダー2 | ヘッダー3 |
| ---- | ---- | ---- |
| ここにテキストが入ります。 | ここにテキストが入ります。 | ここにテキストが入ります。 |
| ここにテキストが入ります。 | ここにテキストが入ります。 | ここにテキストが入ります。 |

#### その他ブロック要素

##### ConetntProseP

ここに段落の本文が入ります。ここに段落の本文が入ります。ここに段落の本文が入ります。ここに段落の本文が入ります。ここに段落の本文が入ります。

##### ConetntProseCode

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

##### ConetntProseBlockquote

以下は引用です。

> これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。これは引用です。

##### ConetntProseHr

これは区切り線です。

---

#### インライン要素

##### ConetntProseStrong

これは**強調**です。

##### ConetntProseImg

以下は画像です。

![content_v1_v2_comparison](article/content_v1_v2_comparison.png)

##### ConetntProseCodeInline

これは`コードスパン`です。

##### ConetntProseA

このように書くと…

```md
[mujiota.com](https://mujiota.com/ "mujiota.com home")でリンクが書けます。

[ここ][mujiota]と[この][mujiota]リンクは同じになります。

[mujiota]: https://mujiota.com/

```

このように表示されます。

[mujiota.com](https://mujiota.com/ "mujiota.com home")でリンクが書けます。

[ここ][mujiota]と[この][mujiota]リンクは同じになります。

[mujiota]: https://mujiota.com/

## 独自に実装したコンポーネント

ここから先は独自に定義したコンポーネントを表示しています。

### AppShopItemCard

::app-shop-item-card
---
title: 明治 たけのこの里 70g×10個
imgFileName: take70_500x500.png
shopName: 明治
amazonItemId: B014NEL7JQ
rakutenItemId: 8f991847d6309f41278a08db7198e761
searchKeyword: 明治 たけのこの里
---
::

::app-shop-item-card
---
type: book
title: シリコンバレー式 自分を変える最強の食事
imgFileName: bpf_diet_500x500.png
shopName: デイヴ・アスプリー
amazonItemId: 4478039674
kindleItemId: B015S5545W
rakutenItemId: 13354097
koboItemId: 60f7b9a3c1723b328b923f2e27736eb8
---
::

### AppSupplement

::app-supplement
---
type: info
title: これは補足説明の情報です
---
ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。
::

::app-supplement
---
type: warning
title: これは補足説明の警告です
---
ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。
::
