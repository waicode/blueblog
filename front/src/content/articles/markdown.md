---
title: Markdownのブログ記事をVSCodeで効率良く書くための備忘録
description: この技術ブログの生産性は「VSCodeでいかに効率良くマークダウンを書けるか」にかかっています。Markdownファイル(.md)を効率良く書いて、その見た目を速やかに確認するTipsをまとめます。
icon: tabler:markdown
category: 開発環境
tags: ['開発環境']
createdAt: '2022-09-04T23:24:24+09:00'
---

## すぐに見た目を確認できればMarkdownが最強である

そもそもMarkdownがあまり好きではありません。過去にアウトライナーアプリも試したことがありますが、どうもしっくり来ませんでした。

テキスト編集は最終的な見た目と一緒に確認したい派なので、自由に使えるなら見たものがそのま出力されるエディタの方が圧倒的に好みです。NotionやSlackの最近のUIアップデートを見ても、もはや死語になりつつあるくらい「WYSIWYG（ウィジウィグ：What You See Is What You Get）」がトレンドだと思います。

それでもMarkdownを使う理由は、**構造をプログラミングで取り扱えるエコシステムが整っているから**です。マークダウンは簡単に「書き下せる」軽量なマークアップ言語。あくまでもマークアップ言語なので、マークアップしながら統一的なルールを敷いて文章を書くこの技術ブログにおいては、マークダウン以外の選択肢は無いと思います。

マークダウンをWYSIWYGに負けないようにするためには、**エディタ上の更新を速やかに・最終的な見た目そのままにプレビューする仕組み**が必要不可欠です。

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

リスト入力した状態で改行すると、連続入力ができます。インデントも考慮されます。

::app-capture
---
src: article/markdown_all_in_one_list.gif
alt: Markdown All in One リストを連続入力
caption: 改行でリストを連続入力
---
::

##### テキスト選択状態でURLをコピペすると自動でリンク表示に変換

テキストを選択した状態でクリップボードにコピーされたリンク（URL形式の文字列）を貼り付けると、自動でリンク表記に変換してくれます。

![自動でリンク表示変換](https://i.gyazo.com/8a2787336abbaedde4612d677b2b1a4a.gif)

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

画像ファイルをコピーした状態でMacでは`⌘`+`alt`+`v`、Windowsなら`Ctrl`+`alt`+`v`で「指定フォルダへの画像保存」と「Markdownファイルへの画像挿入記述」を同時にやってくれます。画像を多用する記事では、無いとやってられないくらいに重宝します。

![画像を保存して挿入](https://i.gyazo.com/30e283669b350b15fd7777950676f094.gif)

画像の保存先は設定で変更できます。このブログではNuxtのassets配下（`front/assets/images/article`）を指定しています。例外的にこのフォルダ以外に格納する際には、一度コピペしたあとに手動でパスを直しています。

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

`:`を入力すると一般的な絵文字入力で使われるUnicode絵文字が絵文字コード付きで入力補完されます。たとえば「😀」を入力したい場合は`:grinning:`の選択肢を選びます。

![絵文字を:で入力補完](https://i.gyazo.com/c31228fcd494bb11a29e771a86e950dc.gif)

さらにMacでは`⌘`+`i`、Windowsでは`Ctrl`+`i`でUnicode絵文字ピッカーが使えます。少しややこしいですが、絵文字コードで入力したい絵文字を検索して、そのままUnicode絵文字が入力できます。

![絵文字ピッカーで入力補完](https://i.gyazo.com/f25bf976d6d65999018cef03b76b518e.gif)

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

日付文字列をショートカットで入力できるようになります。対応するショートカットはMacでは`⌘`+`Shift`+`i`、Windowsでは`Ctrl`+`Shift`+`i`です。

![日付文字列をショートカット入力](https://i.gyazo.com/ef51096d03b00e46f6d5d787f93f9c2d.gif)

注意点としてショートカットキーの競合するとうまく動かなくなります。1つ前に説明した:emojisense:の絵文字Picker表示のショートカットと競合（`⌘`+`Shift`+`i`にも`⌘`+`i`と同じ絵文字Pickerが割り当てられている）するので、こちらを使いたい場合はVSCodeのショートカットキー設定から:emojisense:のキーバインドを削除またはしてください。

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

### 静的解析（lint）で誤りがないかチェックする

書いているマークダウンの構文に問題ないかもVSCodeの拡張機能でリアルタイムにチェックできます。

#### markdownlint

markdownlintを使えばeslintやstylelintのようにマークダウンの構文チェックができます。

::ba-link-card
---
type: external
link: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
imgFileName: markdownlint_480x252.png
---
::

問題がある場合、VSCodeのエディタ上で波線で警告されます。

インストールすればすぐ使えますが、デフォルトの構文チェックは厳しめに設定されています。そのため[markdownlintのRules](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md#md001)を見て`markdownlint.config`で設定を調整することをおすすめします。`.vscode/settings.json`に設定を書いておけば、プロジェクト固有の設定として有効になります。

このブログではNuxtのMDC（マークダウンにコンポーネント表記ができる特殊記述）を使っているため、特殊記述の影響で出る警告はすべて無効化しています。

```json [.vscode/settings.json]
{
  "markdownlint.config": {
    "heading-increment": false, // MD001: 見出しレベルが1つずつ増加されているか、MDCコンポーネントの影響で見出しの階層を正しく判定できないため
    "heading-style": false, // MD003: 見出しスタイルがMDCのコンポーネント記述と競合するため
    "blanks-around-headings": false, // MD022: 見出しを空白行で囲む必要があるスタイルが同じく競合するため
    "no-duplicate-heading": false, // MD024: 見出し判断されたコンポーネント名が重複するため見出しテキストの重複を許容
    "no-trailing-punctuation": false, // MD026: 見出しに.,;:が入ることを許容
    "no-bare-urls": false // MD034: コンポーネントの引数で指定するためURLそのままの表記を許容
  }
}

```

eslintやstylelintと同様に、markdownlintもhuskyを使ってプレコミット時に構文チェックすれば、不正なマークダウンがコミットされることを防ぐことができます。

## Markdownの見た目を速やかに確認する

### コマンドパレットから「Markdown:プレビューを横に」

単純にプレビューを表示する場合はVSCodeの基本機能で実現できます。

コマンドパレットから「Markdown:プレビューを横に（Markdown Open Preview to the Side）」を選択します。

![Markdown:プレビューを横に](article/markdown_preview_to_the_side.png)

プレビューの場合、ファイルを保存する前でもリアルタイムで更新されます。

![プレビューはリアルタイム反映](https://i.gyazo.com/954821775738de048fe99dc736bb9b31.gif)

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

Nuxt3（正確にはVite）の場合、HMR（Hot module replacement）と呼ばれるホットリロード機能が強力です。devモードでブログを立ち上げて、該当のページをWebブラウザで横に並べて表示しておけば、ファイル保存と同時に見た目が反映されます。

![HMRで見た目をすぐ確認](https://i.gyazo.com/17fb40373d9075d5dd8bc7a6e9c2fc3a.gif)

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
| 太字にする | `⌘`+`b` | 拡張機能で実現（Windowsでは`Ctrl`+`b`） |
| 見出し | 直接テキストで`#`を入力 | ショートカットは使わない |
| リスト | 直接テキストで`-`または`*`を入力 | 拡張機能で連続入力できる |
| リンク | テキスト選択状態でURLコピペ | 拡張機能で実現 |
| 画像の保存・挿入 | 画像ファイル開いてコピーして`⌘`+`alt`+`v` | 拡張機能で実現（Windowsでは`Ctrl`+`alt`+`v`） |
| 絵文字 | `:`で入力補完、または`⌘`+`i`で絵文字ピッカー | 拡張機能で実現（Windowsでは`Ctrl`+`i`） |
| 日付文字列 | `⌘`+`Shift`+`i` | 拡張機能で実現（Windowsでは`Ctrl`+`Shift`+`i`） |
| テーブル | スニペットでテーブル表記を挿入 | VSCodeのスニペットで実現 |
| コードブロック | スニペットコードブロック表記を挿入 | VSCodeのスニペットで実現 |
| 独自コンポーネント | スニペットでコンポーネント表記を挿入 | VSCodeのスニペットで実現 |
| 構文チェック | markdownlintを有効化して設定を調整 | 拡張機能で実現 |

### 「Markdownの見た目を速やかに確認する」のまとめ

| やりたい事 | 実現するための操作・機能 | 備考 |
| ------- | ------- | ------- |
| 簡易的に見た目を確認する | コマンドパレットから「Markdown:プレビューを横に」を呼び出す | devモードを起動している場合は使わない |
| 完全な見た目を確認する | Nuxtのdevモードでブログを立ち上げて該当ページを確認 | 見た目の更新はファイル保存のタイミング |

ショートカットはすぐに忘れてしまうので、思い出せなくなるたびに確認しながら更新しています。
