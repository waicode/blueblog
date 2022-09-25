---
title: Markdownのブログ記事をVSCodeで効率良く書くための備忘録
description: この技術ブログの生産性は「VSCodeでいかに効率良くマークダウンを書けるか」にかかっています。Markdownファイル(.md)を効率良く書いて、その見た目を速やかに確認するTipsをまとめます。
icon: tabler:markdown
category: 開発環境
tags: ['開発環境']
createdAt: '2022-09-04T23:24:24+09:00'
---

## すぐに見た目を確認できればMarkdownが最強である

そもそも、Markdownがあまり好きではありません。

過去にアウトライナーアプリも試したことがありますが、どうもしっくり来ませんでした。

テキスト編集は最終的な見た目と一緒に確認したい派なので、自由に使えるなら見たものがそのま出力されるエディタの方が圧倒的に好みです。

Notionや最近のSlack UIアップデートを見ても、もはや死語になりつつあるくらい「WYSIWYG（ウィジウィグ：What You See Is What You Get）」がトレンドだと思います。

それでもMarkdownを使う理由は、**構造をプログラミングで取り扱えるエコシステムが整っているから**です。

マークダウンは簡単に「書き下せる」軽量なマークアップ言語。あくまでもマークアップ言語なので、マークアップしながら統一的なルールを敷いて文章を書くこの技術ブログにおいては、マークダウン以外の選択肢は無いと思います。

マークダウンはもともとプレーンテキストでも読みやすいように生み出された言語です。そのため、マークダウンだけを使って最終的なスタイルを調整するのは限界があります。

その代わり、構文が統一されて**構造が把握しやすい文章が書けるのがマークダウンの強み**です。Markdownのお作法に則りプレーンテキストでも読みやすく書いていけば、パース後にCSSでスタイルを当てる前の**その文章構造自体から美しく**できます。

逆に言えば、マークダウンをWYSIWYGに負けないようにするには**エディタ上の更新を速やかに・最終的な見た目そのままにプレビューする仕組み**が必要不可欠だということです。

## 前提はVSCodeを使うこと

記事を編集するエディタはVSCodeです。

::ba-link-card
---
type: external
link: https://azure.microsoft.com/ja-jp/products/visual-studio-code/
imgFileName: vscode_icon_480x252.png
---
::

基本的にはVSCode経由でマークダウンを編集し、VSCode上またはWebブラウザを使って見た目を確認します。そのため、**VSCodeの基本設定や拡張機能を利用する前提**でこの記事を書いていきます。

## Markdownを効率よく書く

### 書くための拡張機能を入れる

そもそもMarkdownとは事前に取り決められた文章の書き方の定義です。すでに用意してある定義の効率化のために自分でコードを書くのは時間がもったいないので、VSCodeの拡張機能を使います。

#### Markdown All in One

ショートカットや便利なコマンドが有効になる拡張機能です。

::ba-link-card
---
type: external
link: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
imgFileName: markdown_all_in_one_480x252.png
---
::

##### 太字にするショートカット

リッチテキストの編集ができるエディタでは定番の太字です。テキストを選択した状態でMacなら`⌘`+`B`、Windowsなら`Ctrl`+`B`で太字になります。

::app-capture
---
src: article/markdown_all_in_one_b.gif
alt: Markdown All in One 太字にする
caption: ⌘ + B で太字
---
::

他に見出しや取り消しなどのショートカットも用意されていますが、太字しか使っていません。見出しはよく使いますが`#`の増減なので、ショートカットコマンドを覚えずとも直接テキスト編集すれば十分です。

##### リスト入力の補完

リスト入力した状態で改行すると、連続入力ができます。インデントも考慮されます。`Tab`でリストの階層を下げる（`Shift`+`Tab`で上げる）こともできます。

::app-capture
---
src: article/markdown_all_in_one_list.gif
alt: Markdown All in One リストを連続入力
caption: 改行でリストを連続入力
---
::

##### テキスト選択状態でURLをコピペすると自動でリンク表示に変換

テキストを選択した状態でクリップボードにコピーされたリンク（URL形式の文字列）を貼り付けると、自動でリンク表記に変換してくれます。

::app-capture
---
src: article/markdown_all_in_one_url.gif
alt: Markdown All in One URLコピペで自動リンク表示変換
caption: URLコピペで自動リンク表示変換
---
::

他にも、見出しのナンバリングや目次作成などの機能もありますが、このブログにおいてはスタイルやアプリで出力すべき内容なので使っていません。その他の機能はコマンドパレットで「Markdown All in One:」から呼び出せます。

### Paste Image

画像を簡単に挿入できるようになる拡張機能です。

::ba-link-card
---
type: external
link: https://marketplace.visualstudio.com/items?itemName=telesoho.vscode-markdown-paste-image
imgFileName: markdown_paste_image_480x252.png
---
::

#### 画像保存と画像挿入記述をコピペ作業で実現

Markdownファイルに画像を挿入するのは結構手間がかかります。事前に画像を格納しておいて、その画像ファイルへのパスを代替テキストと共に指定しなければなりません。この面倒な作業をコピペで実現できる拡張機能です。

画像ファイルをコピーした状態でMacでは`⌘`+`alt`+`V`、Windowsなら`Ctrl`+`alt`+`V`で「指定フォルダへの画像保存」と「Markdownファイルへの画像挿入記述」を同時にやってくれます。画像を多用する記事では、無いとやってられないくらいに重宝します。

::app-capture
---
src: article/markdown_paste_image.gif
alt:  Markdown Paste Image 画像保存と挿入
caption: ⌘ + alt + V で画像の保存・記述を同時に実現
---
::

画像の保存先は設定で変更できます。このブログではNuxtのassets配下（`front/src/assets/images/article`）を指定しています。例外的にこのフォルダ以外に格納する際には、一度コピペしたあとに手動でパスを直しています。

1つ注意点として、Macでコピーする場合は画像を開いていない状態だとFinderから画像ファイルを選択してコピーしても正しく動作しません。Githubに[関連するissue](https://github.com/mushanshitiancai/vscode-paste-image/issues/46)があがっていました。

少し面倒ですが、一度画像を開いてプレビュー表示してからコピーする必要があります。

### :emojisense:

絵文字入力が楽になる拡張機能です。

::ba-link-card
---
type: external
link: https://marketplace.visualstudio.com/items?itemName=bierner.emojisense
imgFileName: emojisense_480x252.png
---
::

#### 絵文字コードのプレビューと入力補完

絵文字コードとは`:`で囲まれたコードのことで、テキストとして入力すると表示されるタイミングで対応する絵文字に変換されます。たとえば`:smile:`は「😄」に変換されて表示されます。

注意点として、絵文字をコードを使う場合はGithubやSlackをはじめ、絵文字を表示する側が対応している必要があります。`nuxt/content`も絵文字コードに対応しているので、このブログでも利用が可能です。

この拡張機能は絵文字コードをMarkdown上で入力すると、該当の絵文字をプレビュー表示してくれます。また、マークアップ絵文字を入力したい場合は`::`で補完されます。

#### Unicode絵文字の入力補完

`:`を入力すると一般的な絵文字入力で使われるUnicode絵文字が絵文字コード付きで入力補完されます。たとえば「😀」を入力したい場合は`:grinning:`を選びます。

::app-capture
---
src: article/markdown_emojisense_input.gif
alt:  Markdown emojisense 絵文字の入力補完
caption: ': で絵文字の入力補完'
---
::

さらにMacでは`⌘`+`I`、Windowsでは`Ctrl`+`I`でUnicode絵文字ピッカーが使えます。少しややこしいですが、絵文字コードで入力したい絵文字を検索して、そのままUnicode絵文字が入力できます。

::app-capture
---
src: article/markdown_emojisense_picker.gif
alt:  Markdown emojisense 絵文字ピッカー
caption: ⌘ + I で絵文字ピッカー
---
::

### Insert Date String

現在時刻文字列のショートカット入力ができるようになる拡張機能です。

::ba-link-card
---
type: external
link: https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring
imgFileName: insert_date_string_480x252.png
---
::

#### ISO 8601形式の日付文字列を入力補完

日付文字列をショートカットで入力できるようになります。対応するショートカットはMacでは`⌘`+`Shift`+`I`、Windowsでは`Ctrl`+`Shift`+`I`です。

::app-capture
---
src: article/markdown_insert_date_string.gif
alt:  Markdown Insert Date String 日付文字列をショートカット入力
caption: ⌘ + Shift + I で日付文字列を入力
---
::

注意点としてショートカットキーが競合するとうまく動かなくなります。1つ前に説明した:emojisense:の絵文字Picker表示のショートカットと競合（`⌘`+`Shift`+`I`にも`⌘`+`I`と同じ絵文字Pickerが割り当てられている）するので、こちらを使いたい場合はVSCodeのショートカットキー設定から:emojisense:のキーバインドを削除またはしてください。

このブログでは記事の更新日付はMarkdownファイル（.md）の更新日から引っ張ってきていますが、作成日（createdAt）は最初に記録しておく必要があります。その作成日を入力する際に重宝しています。

日付のフォーマットは設定で変更可能です。形式はISO 8601のタイムゾーン付きの形式（例：`2022-8-27T12:34:56+09:00`）としています。

### 拡張機能で対応できないものはスニペット登録

拡張機能をそのまま使えない場合はVSCodeのスニペットを活用します。VSCodeのプロジェクト設定として`.vscode/markdown.code-snippets`にスニペットを登録します。

このブログでは以下のスニペットを登録しています。

- 記事テンプレート
- テーブル
- コードブロック
- 独自コンポーネントのMDC表記

VSCodeの拡張機能とスニペット登録を組み合わせることで、すべての記述を入力補助できます。通常のテキスト以外は、まず何かしら入力補完したうえで書き始めることが可能です。

## Markdownの構文に誤りがないかチェックする

書いているマークダウンの構文に問題ないかもVSCodeの拡張機能でリアルタイムにチェックできます。

### 静的解析（lint）でマークダウンの構文をチェックする

#### markdownlint

markdownlintを使えばeslintやstylelintのようにマークダウンの構文チェックができます。

::ba-link-card
---
type: external
link: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
imgFileName: markdownlint_480x252.png
---
::

マークダウンの書き方に問題がある場合、VSCodeのエディタ上で波線で警告されます。

::app-capture
---
src: article/markdown_lint.gif
alt:  Markdown markdownlint 問題がある場合は波線で警告
caption: 問題がある場合はVSCodeのエディタ上で波線で警告
---
::

拡張機能をインストールすればすぐ使えますが、デフォルトの構文チェックは厳しめに設定されています。

そのため[markdownlintのRules](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md001)を見て`markdownlint.config`で設定を調整することをおすすめします。`.vscode/settings.json`に設定を書いておけば、プロジェクト固有の設定として有効になります。

このブログではNuxtのMDC（マークダウンにコンポーネント表記ができる特殊記述）を使っているため、特殊記述の影響で出る警告はすべて無効化しています。

```json [.vscode/settings.json]
{
  "markdownlint.config": {
    "heading-increment": false, // MD001: 見出しレベルが1つずつ増加されているか、MDCコンポーネントの影響で見出しの階層を正しく判定できないため
    "heading-style": false, // MD003: 見出しスタイルがMDCのコンポーネント記述と競合するため
    "line-length": {
      // MD013: 1文の最大文字数を調整
      "line_length": 120
    },
    "blanks-around-headings": false, // MD022: 見出しを空白行で囲む必要があるスタイルが同じく競合するため
    "no-duplicate-heading": false, // MD024: 見出し判断されたコンポーネント名が重複するため見出しテキストの重複を許容
    "no-trailing-punctuation": false, // MD026: 見出しに.,;:が入ることを許容
    "no-inline-html": false, // MD033: HTML記述を許容
    "no-bare-urls": false // MD034: コンポーネントの引数で指定するためURLそのままの表記を許容
  }
}

```

::ba-link-card
---
type: external
link: https://github.com/waicode/blueblog/blob/main/.vscode/markdown.code-snippets
---
::

### 静的解析（lint）でマークダウンの構文をチェックする

#### markdownlint-cli2

eslintやstylelintと同様に、markdownlintもhuskyを使ってプレコミット時に構文チェックすれば、不正なマークダウンがコミットされることを防ぐことができます。

CLIでチェックするなら`markdownlint-cli2`がおすすめです。

::ba-link-card
---
type: external
link: https://github.com/DavidAnson/markdownlint-cli2
---
::

`markdownlint-cli`でも良いのですが`markdownlint-cli2`の方が設定ベースで調整しやすく、VSCodeとうまく連動するように設計されています。

##### markdownlint-cli2のインストール

`npm`または`yarn`でインストールします。

```sh
npm install --save-dev markdownlint-cli2
```

```sh
yarn add -D markdownlint-cli2
```

##### lint実行とスクリプト登録

インストール後、以下のコマンドでlintできます。

```sh
markdownlint-cli2 "**/*.md"
```

実際には`package.json`のscriptsに登録して使うのが通例です。

```json [package.json]
"scripts": {
  "lint:markdown": "markdownlint-cli2 \"**/*.md\""
}
```

##### 設定ファイル

ただし、このままではすべてのマークダウン・すべてのルールが対象となるため設定ファイルで調整します。プロジェクトルートに`.markdownlint-cli2.jsonc`を作成すれば設定が読み込まれます。

設定ファイルはいくつかのフォーマットに対応していますが、VSCodeと揃えるために`.jsonc`（Commentが書けるJSON）がおすすめです。`config`の項目にはVSCode拡張機能のmarkdownlintの設定はそのまま記載できます。また、解析対象から外したいファイルやフォルダは`ignores`で設定します。

```json [.markdownlint-cli2.jsonc]
{
  "config": {
    "heading-increment": false, // MD001: 見出しレベルが1つずつ増加されているか、MDCコンポーネントの影響で見出しの階層を正しく判定できないため
    "heading-style": false, // MD003: 見出しスタイルがMDCのコンポーネント記述と競合するため
    "line-length": {
      // MD013: 1文の最大文字数を調整
      "line_length": 120
    },
    "blanks-around-headings": false, // MD022: 見出しを空白行で囲む必要があるスタイルが同じく競合するため
    "no-duplicate-heading": false, // MD024: 見出し判断されたコンポーネント名が重複するため見出しテキストの重複を許容
    "no-trailing-punctuation": false, // MD026: 見出しに.,;:が入ることを許容
    "no-inline-html": false, // MD033: HTML記述を許容
    "no-bare-urls": false // MD034: コンポーネントの引数で指定するためURLそのままの表記を許容
  },
  "ignores": ["node_modules", ".nuxt"]
}
```

::ba-link-card
---
type: external
link: https://github.com/waicode/blueblog/blob/main/front/.markdownlint-cli2.jsonc
---
::

なお、VSCodeの設定ファイルの拡張子は`.json`ですがコメントの記載が可能になっています。これは、VSCodeが内部でJSONの設定ファイルを`.jsonc`として解釈しているからです。

##### huskyとlint-stagedでプレコミット時に確認

huskyを使うとコミットやプッシュ時に、任意のコマンドを自動で実行できます。これに加えてlint-stagedを使うと、ソースコード全体ではなく`git stage`されたファイルに対してlintすることができるようになります。

[husky](https://github.com/typicode/husky)と[lint-staged](https://github.com/okonet/lint-staged)が入ってない場合、`npm`または`yarn`でインストールします。

```sh
npm install --save-dev husky lint-staged
```

```sh
yarn add -D husky lint-staged
```

続いて、huskyを有効化します。

```sh
npx husky install
```

```sh
yarn husky install
```

この操作で`.husky`ディレクトリが作成されます。

```sh
.husky
├── _
│   └── husky.sh
└── .gitignore
```

`package.json`のscriptsにhuskyが有効化される設定を入れておきます。

`prepare`に`husky install`を記述します。

この技術ブログのようにモノレポ構成を採用している場合は、ルート直下のpackage.jsonに設定を入れます。

```json [package.json]
"scripts": {
  "prepare": "husky install"
}
```

なお、yarn2を採用している場合は`prepare`でなく`postinstall`に記述します。

```json [package.json]
"scripts": {
  "private": true,
  "postinstall": "husky install"
}
```

パッケージを公開している場合は以下となります。詳しくは[huskyの公式ドキュメント](https://typicode.github.io/husky/#/?id=yarn-2)をご覧ください。

```json [package.json]
"scripts": {
  "private": false,
  "scripts": {
    "postinstall": "husky install",
    "prepublishOnly": "pinst --disable",
    "postpublish": "pinst --enable"
  }
}
```

その後、コミット時にチェックするためpre-commitファイルを作成します。

```sh
npx husky add .husky/pre-commit "npm lint-staged"
```

```sh
yarn husky add .husky/pre-commit "yarn lint-staged"
```

以下の`.husky/pre-commit`ファイルが作成されます。

```sh [.husky/pre-commit]
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# npmの場合
npm lint-staged
# yarnの場合
yarn lint-staged
```

一般的なレポジトリ構成であればこの記述で問題ありません。モノレポ構成の場合、リポジトリの中にある指定プロジェクトフォルダで実行したいのでコマンドを追記します。

```sh [.husky/pre-commit]
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# frontフォルダへ移動
cd front

# lintを実行
yarn lint-staged
```

::ba-link-card
---
type: external
link: https://github.com/waicode/blueblog/blob/main/.husky/pre-commit
---
::

これでコミット時にlintされるようになりました。最後にlint-stagedの設定ファイルで実行する静的解析（lint）を指定します。

以下は`.md`の拡張子のファイルに対してmarkdownlintを行う設定です。

```js [.lintstagedrc.js]
module.exports = {
  '*.{md}': ['yarn lint:markdown']
};

```

::ba-link-card
---
type: external
link: https://github.com/waicode/blueblog/blob/main/front/.lintstagedrc.js
---
::

lint-stagedの動作は`package.json`に書くこともできますが、別の設定ファイルに書いて`yarn`のコマンドを直接叩くのがオススメです。

設定ファイルは`.lintstagedrc.js`のように[lint-stagedのConfiguration](https://github.com/okonet/lint-staged#configuration)に記載されている設定ファイル名にすれば自動で読み込んでくれます。

::app-capture
---
src: article/markdown_husky.gif
alt:  Markdown プレコミットでmarkdownlint
caption: markdownlintでコミット時にチェック
---
::

::app-supplement
---
type: warning
title: Markdownの自動整形（format）はやらないほうが無難
---
markdownlint-cli2にも自動修正モードで実行できるコマンド（`markdownlint-cli2-fix`）があります。しかし、自動整形は使わない方が無難です。マークダウンはシステムのためでなく「人が読むために書かれること」が多いです。自動整形を入れると意図せず補正されて見た目が崩れるリスクが上回ると考えています。
::

## Markdownの見た目を速やかに確認する

### コマンドパレットから「Markdown:プレビューを横に」

単純にプレビューを表示する場合はVSCodeの基本機能で実現できます。

コマンドパレットから「Markdown:プレビューを横に（Markdown Open Preview to the Side）」を選択します。

::app-capture
---
src: article/markdown_preview.gif
alt:  Markdown プレビューを横に
caption: コマンドパレットから「Markdown:プレビューを横に」を選択
---
::

プレビューの場合、ファイルを保存する前でもリアルタイムで更新されます。

::app-capture
---
src: article/markdown_preview_realtime.gif
alt:  Markdown プレビューはリアルタイム反映
caption: プレビューはファイル保存前でもリアルタイム反映
---
::

### HMRで保存と同時にブラウザで確認

その一方で、プレビューでは記事のスタイルが反映されません。最終的な見た目を確認するにあたって、プレビューだけでは機能が不足しています。

前提として、このブログではNuxt3と`nuxt/content`を使って全ての記事をMarkdownファイルで管理しています。

::ba-link-card
---
type: external
link: https://content.nuxtjs.org/
title: nuxt/content
description: The file-based CMS for your Nuxt application, powered by Markdown and Vue components.
imgFileName: nuxt_content_v2_480x252.png
---
::

Nuxt3（正確にはVite）の場合、HMR（Hot module replacement）と呼ばれるホットリロード機能が強力です。

devモードでブログを立ち上げて、該当のページをWebブラウザで横に並べて表示しておけば、ファイル保存と同時に見た目が反映されます。

::app-capture
---
src: article/markdown_hmr.gif
alt:  Markdown HMRでファイル保存と同時に見た目を反映
caption: HMRでファイル保存と同時に最終的な見た目を確認
---
::

最終的な見た目をファイル保存のタイミングで確認できるので、これが一番便利です。

### HMRで確認しているときはプレビュー表示はほぼ見ない

Markdownを書くときはVSCodeを分割してプレビュー表示を右に、さらにその右側にWebブラウザを並べてどちらも確認できるようにしています。

HMRは更新の反映が非常にはやいので、**開発モードで立ち上がっているなら正直こちらだけで十分**です。HMR確認の唯一の手間は、一度devモードでNuxtを立ち上げてブラウザで該当ページを表示させる必要があることです。

そのため、最初はプレビュー表示で書いて、途中からHMR確認する流れで書くこともあります。別の作業ですでにdevモードでブログが確認できる場合は、プレビューは表示させずにそのままブラウザで確認します。

## やりたい事と実現する機能の対応表

最後にやりたい事とそれを実現するための操作・機能を表にまとめます。

### 「Markdownを効率よく書く」のまとめ

| やりたい事 | 実現するための操作・機能 | 備考 |
| ------- | ------- | ------- |
| 記事を書き始める | スニペットで記事テンプレートを挿入 | VSCodeのスニペットで実現 |
| 太字にする | `⌘`+`B` | 拡張機能で実現（Windowsでは`Ctrl`+`B`） |
| 見出し | 直接テキストで`#`を入力 | ショートカットは使わない |
| リスト | 直接テキストで`-`または`*`を入力 | 拡張機能で連続入力できる |
| リンク | テキスト選択状態でURLコピペ | 拡張機能で実現 |
| 画像の保存・挿入 | 画像ファイル開いてコピーして`⌘`+`alt`+`V` | 拡張機能で実現（Windowsでは`Ctrl`+`alt`+`V`） |
| 絵文字 | `:`で入力補完、または`⌘`+`I`で絵文字ピッカー | 拡張機能で実現（Windowsでは`Ctrl`+`I`） |
| 日付文字列 | `⌘`+`Shift`+`I` | 拡張機能で実現（Windowsでは`Ctrl`+`Shift`+`I`） |
| テーブル | スニペットでテーブル表記を挿入 | VSCodeのスニペットで実現 |
| コードブロック | スニペットコードブロック表記を挿入 | VSCodeのスニペットで実現 |
| 独自コンポーネント | スニペットでコンポーネント表記を挿入 | VSCodeのスニペットで実現 |
| 構文チェック | markdownlintを有効化して設定を調整 | 拡張機能で実現 |

### 「Markdownの構文に誤りがないかチェックする」のまとめ

| やりたい事 | 実現するための操作・機能 | 備考 |
| ------- | ------- | ------- |
| 構文チェック | markdownlintを有効化して設定を調整 | 拡張機能で実現 |
| コミット時に確認 | huskyとlint-stagedでチェック | `npm`または`yarn`でインストール |

### 「Markdownの見た目を速やかに確認する」のまとめ

| やりたい事 | 実現するための操作・機能 | 備考 |
| ------- | ------- | ------- |
| 簡易的に見た目を確認する | コマンドパレットから「Markdown:プレビューを横に」を呼び出す | devモードを起動している場合は使わない |
| 完全な見た目を確認する | Nuxtのdevモードでブログを立ち上げて該当ページを確認 | 見た目の更新はファイル保存のタイミング |

ショートカットはすぐに忘れてしまうので、思い出せなくなるたびに確認しながら更新しています。
