---
title: プロフィール
description: キャリアや個人の活動、趣味・好きなモノについて書いてます。
icon: tabler:letter-a
createdAt: '2022-08-13T17:49:00.000+09:00'
---

## キャリア

Net Protectionsでアーキテクトをしています。Net ProtectionsはCreditTech×ティール型組織で「つぎのアタリマエをつくる」ことを目指し、「後払い決済」という新しい仕組みをつくり上げてきたBNPL市場のリーディングカンパニーです。

::ba-link-card
---
type: external
link: https://corp.netprotections.com/
---
::

このブログではフロントエンドとサーバレスを中心に書いてますが、キャリアにおけるIT経験はかなり雑食です。

Java製独自ミドルウェアに疲弊して、スマホアプリの個人開発をしながらRailsに出会ったときめきは束の間。一人目エンジニアとして決済システムの立ち上げを経験して、その後はフルスタック解体工事とIT組織開発の道へ。

現在は、BtoC向け事業を中心に開発プロジェクト推進及びフォローをしながら、TechとBusinessの垣根がない開発組織とアーキテクチャを目指して日々奮闘しています。

以下、これまでの歩みをもう少し詳しく書いていきます。

### 新卒で大手ITコンサル（SIer）へ入社

#### 2009-2011

大学卒業後に大手ITコンサルのフューチャーアーキテクト株式会社へ入社し、在籍期間中に小売流通系の2つのプロジェクトに参画しました。最初のプロジェクトでは企画・要件定義、次いで設計・開発・保守運用と、2つのプロジェクトを通じてシステム開発の全工程を経験することができました。

扱う言語はJava。この時代によくあった話ですが、COBOLで書かれた基幹システムを刷新した直後のタイミングでの参画でした。翌日までに遅延なく大量データを配信できるか、すわわち、夜間処理のパフォーマンスが肝だったのでOracle（PL/SQLを含む）をいかに上手く扱うかもとても重要でした。

振り返ってみて、特に保守運用を経験したことで**システムを「実際に使う・使い続ける」という視点で資産としてシステムをどのように構築すべきか**という視点が身に付いたように思います。

ただ、技術的には独自ミドルウェア多いがゆえに構造的に介入できる余地がほとんど無く、表面的な改善部分にしか手を出せない環境に物足りなさも感じていました。

当時はオープンソース移行期であり、商用でもOSS活用が当たり前に使われ始める過渡期でした。しかしながら社会人になって間もないタイミングだった自分は、そんな流れを肌で感じているわけもなく「システム開発ってこんなものなのか」とモチベーションが著しく下がってしまっていた時期でもありました。

### Net Protections

#### 2011-2013

##### IT部門の「何でも屋」として奔走

参画初期は業務部門とシステム部門の架け橋的な役割を担いながら、IT部門の「何でも屋」として奔走していた3年間でした。事業を理解するために、最初の1年はセールスやカスタマーサポートの部門にも籍を置き、営業活動や電話対応も行っていました。

ITが関わる業務の改善プロジェクトを遂行をはじめ、インフラ（クラウド）、セキュリティ、社内IT環境整備など、比較的幅広い分野で仕事をしてきました。

このとき、仕事でコードは一切書かなくなってしまいましたが、**その反動で技術への学習欲が高まり週末はRailsやSwiftで個人開発**をしていました。

#### 2012-2013

##### ポイント会員事業のリニューアル

ポイント会員事業をリニューアルするプロジェクトにアプリケーションやインフラ構成を検討するシステム担当として参画。ゲーム・商品交換・懸賞など、後払い決済を使うと貯まるポイントを楽しく使える新機能を約1年かけてリリースしました。

#### 2012-2014

##### クレジットカード決済事業のPCIDSS準拠

開発PMとしてPCIDSS準拠のプロジェクトに参画。まずはじめにGAP分析をして、そのあとはセキュリティ観点で足りない部分をひたすら潰していく過酷なプロジェクトでした。

過去の通例に基づきストレートに準拠しようとすると、構造上または運用上かなり厳しくなるケースもありました。そのため、スコープを意図的に限定するための刷新や、代替手段を模索しながら、アプリ構成・システムアーキテクチャ・セキュリティ基準に加え、社内施設・制度等も見直して、**運用設計を含め約1年半かけて準拠を達成**しました。

セキュリティの知識が身に付いたので、[情報セキュリティスペシャリスト](https://www.jitec.ipa.go.jp/1_11seido/sc_28.html)（現在の国家資格である情報処理安全確保支援士の前身）の資格もせっかくなので取得しました。

#### 2014-2015, 2016-2017

##### BtoC向けカードレス決済「atone」の立ち上げ

クレジットカード不要で誰でも便利にお得に使える会員登録制の後払いサービス「atone」の立ち上げにシステム統括の立場で参画。**一人目エンジニアとして決済をゼロからつくるシステム開発**を行いました。

::ba-link-card
---
type: external
link: https://atone.be/
---
::

当時は過渡期でしたが、インフラはアプリケーションレイヤーを含め積極的にクラウドネイティブで構築。品質強化のためCI/CDの取り組みにも力を入れつつ、スピード重視でフルスタックフレームワークで開発し、事業横断活用を見据えて譲れない部分はサービス化しました。

諸事情により、完成したシステムが目の前にある中で事業が一時停止になるというショッキングな事件が起こりましたが、結果的には再稼働し実質的には約2年の歳月をかけてサービスをローンチしました。（このあたりの顛末については追って詳しく書こうと思います）

#### 2015-2016

##### NP後払いairの自動連携APIサービス「air link」の開発推進

atoneの事業推進が一時ストップしているときに、NP後払いairの開発PMとして自動連携サービス「air link」を約半年かけて構築・リリースしました。NP後払いairとは訪問サービス向け後払いサービスです。導入企業様向けのREST APIをJava/Springで開発しました。

#### 2018-20XX

現在はBizとTechが垣根なく融合した組織・アーキを目指し、会社全体のIT組織設計やアーキテクチャづくりに中有力しています。その傍らで、BtoC向けの事業を中心に開発プロジェクト推進やそのフォローを継続して実施しています。

## 個人の活動

### スマホアプリ開発

#### 2013

##### 文字のロゴが作成できるアプリ

文字を入力して、色を指定すると文字ロゴが作成できる簡単なアプリを開発しました。

::app-capture
---
src: article/mojilogo.png
alt: mojilogo
---
::

結婚前に一人暮らしをしていた頃は、家具・家電の9割は無印良品で揃える「MUJIラー」でした。「無印良品みたいなロゴが簡単につくれたらいいな」が開発動機です。まだSwiftが出てくる前で、Objective-Cを使って開発しました。

新しいバージョンへの保守が継続できず、現在は公開を停止しています。

#### 2015

##### iOSリマインダー連携Todoアプリ

iOSリマインダーベースのTODO管理アプリを個人で開発しました。

::app-capture
---
src: article/nalavender.png
alt: nalavender
---
::

開発した時期は前述のatoneがストップしたタイミングでした。ストップする前まではローンチに向けてひたすらTODOと格闘していたのに、急にやることがなくなってエネルギー余ってしまい、その持て余した推進力で一気に完成させました。Swiftを使って開発しています。ありがたいことにライフハッカーでも紹介していただきました。

::ba-link-card
---
type: external
link: https://www.lifehacker.jp/article/160404naravender/
description: 「ナラベンダー」はリマインダーを優先度順に並び替えられるTODO管理アプリです。iOS標準の「リマインダー」アプリと連携して利用することができますよ。リマインダーアプリ内に登録されているタスクに優先度をつけて管理することができます。
---
::

同様の理由で、現在は公開を停止しています。

### 個人ブログ

#### 2010-20XX

##### mujiota.com

2010年から運営している生活ネタ中心の個人ブログです。ドメインの由来は前述の通りで、MUJIへの偏愛ぶりがここにも現れています。

::ba-link-card
---
type: external
link: https://mujiota.com/
---
::

最初はMovable Typeで構築しましたが、当時CMS（Contents Management System）はMovable TypeからWordpressにスタンダードが変わりつつあるタイミングで、1年待たずにWordpressに乗り換えました。

2017年を最後に記事は書けていませんが、2021年にVue2/Nuxt2に移行してデザインを刷新し、コードもGithub管理に切り替えました。せっかく見た目を刷新したので、気がむいたら何か書こうかなと思いつつ、もう1年近く重い腰が上がっていません。

## 趣味・好きなモノ

### サウナ

プライベートでは、サウナをこよなく愛する2児の父。よいロウリュを温度と湿度の関係で導くことができる[サウナ・スパプロフェッショナル](https://sauna.or.jp/professional/)の資格を保有しています。

サウナにハマったきっかけは体調を崩したこと。首を曲げて姿勢が悪い状態でディスプレイを凝視するデスクワークを続けてきた結果、顔の左側、首がら頭にかけての神経がおかしな状態になってしまい、仕事に影響が出る状態に。

そんな中で、第3次サウナブームが始まりかけていた2018年。医者に勧められてサウナを試してみたところ、これがドハマりしました。

サウナのおかげで体調が少しずつ良くなっていくのを実感しながら、当時は北関東を中心に色々なサウナ施設を渡り歩き、時には新幹線にも乗って遠征して、サウナの魅力を堪能していました。

::app-photo
---
src: article/sauna_shikiji.jpeg
alt: サウナしきじ
caption: 静岡・聖地と呼ばれる「サウナしきじ」
---
::

::app-photo
---
src: article/sauna_mt_fuji.jpeg
alt: ホテルマウント富士
caption: 富士山を眺めて外気浴「ホテルマウント富士」
---
::

::app-photo
---
src: article/sauna_yanagiyu.jpeg
alt: 柳湯
caption: 徒歩2分のホームサウナ「柳湯」
---
::

最近は昔ほど遠征しなくなりましたが、徒歩1分の銭湯サウナに17.5度の水風呂がある幸せを噛みしめながら、週3くらいのペースで通ってます。

### クラフトビール

サウナが好きになってから、ますます好きになったのがクラフトビールです。

コロナのせいもありますが、もっぱら缶で宅飲み。冷蔵庫にストックしておいて、サウナあがりにプシュッと一杯やるのが至福の時間です。ビール市場全体は冷え込んでいますが、クラフトビールだけは右肩上がり。流行もあって、最近では近所の酒屋やスーパーでも豊富な種類の缶ビールが揃ってます。

お気に入りの銘柄をいくつか載せておきます。

::app-shop-item-card
---
title: 伊勢角屋麦酒 ペールエール 缶 350ml
imgFileName: isekado_paleale_can_350ml_500x500.png
shopName: 伊勢角屋麦酒
searchKeyword: 伊勢角屋麦酒 ペールエール 缶
---
::

::app-shop-item-card
---
title: 暁ブルワリー ドラゴンアイ サン 缶 350ml
imgFileName: akatsuki_brewery_dragoneye_sun_can_350ml_500x500.png
shopName: 暁ブルワリー
searchKeyword: 暁ブルワリー ドラゴンアイ サン 缶
---
::

::app-shop-item-card
---
title: バラストポイント スカルピン IPA 缶 355ml
imgFileName: ballastpoint_sculpin_ipa_can_355ml_500x500.png
shopName: バラストポイント
searchKeyword: バラストポイント スカルピン IPA 缶
---
::

### 自作キーボード

DIYは昔から好きでした。隙間やニッチなニーズをピタッと埋める、ちょっとした家具を作れるからです。

その中でも、特に一時期ハマっていたのが自作キーボード。自作に求めたのは**タイピングする手に可能な限り負荷をかけない押し心地**です。自作キーボードに手を出す前は、キースイッチ品質の高さで知られているHHKBを愛用していました。

HHKBの[静電容量無接点の押し心地](https://www.pfu.fujitsu.com/hhkeyboard/hhkbpro/leaflet.html)を超えることを目指して、数多くのスイッチとグリスの組み合わせを試しました。
そして、ついに巡り合ったのが「OUTEMU Silent フォレスト キースイッチ 5Pin/62g (5PCs)」というスイッチです。

::app-capture
---
src: article/outemu_silent_switch_forest_5pin_62g.jpeg
alt: OUTEMU Silent フォレスト キースイッチ 5Pin/62g (5PCs)
caption: OUTEMU Silent フォレスト キースイッチ 5Pin/62g (5PCs)
---
::

<div class="ContentProseTable--align-center">

| タイプ | 押下圧 | 固定方法 |
| ------- | ------- | ------- |
| タクタイル | 約62g | プレートマウント（5ピン） |

</div>

押下圧は62gでHHKBの45gと比較すると、重く見えるかもしれません。ですがここにグリスを塗って調整することで、タッチ感がHHKBに近づいていきます。指が自然に押し戻される、あの感じにかなり近くなります。

このスイッチを使って組み立てた「Choco60」というHHKB配列の分割キーボードを愛用しています。

::app-photo
---
src: article/choco60_instagram.jpeg
alt: Choco60
caption: HHKB配列でそのまま分割した「Choco60」
---
::

いまは全く同じキーボード基盤とスイッチで2個作って使い回してます。求めていたキーボードを手に入れてからは満足してしまい、最近は新しいキーボード作りはやっていません。

## その他のSNSアカウント

* キャリアの詳細は[Wantedlyのプロフィール](https://www.wantedly.com/id/yaizawa)にも詳しく書いています。
* Twitterは[@waicode37](https://twitter.com/waicode37)でつぶやいてます。
* このブログのソースコードはGithubは[waicode](https://github.com/waicode)で公開しています。

この技術ブログの[コンセプトの詳細はこちら](/about)をご覧ください。