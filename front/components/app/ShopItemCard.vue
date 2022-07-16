<script setup lang="ts">
import { useRuntimeConfig } from '#app';
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';
import {
  ShopItemCardType,
  EC_MALL_ASP_TYPE_MAP,
  EcMallAspType,
  BookAspType,
  SHOP_ITEM_CARD_TYPE_MAP,
  BOOK_ASP_TYPE_MAP,
} from '@/components/app/ShopItemCardComposable';
import { bemx } from '@/utils/util';

interface ShopItemCardPropType {
  /**
   * 商品カード種別
   *
   * 商品（`goods`）または書籍（`books`）を指定する。
   * デフォルトは商品となる。
   *
   * `goods` | `book`
   */
  type?: ShopItemCardType;

  /**
   * タイトル
   *
   * 商品名を指定する。
   */
  title: string;

  /**
   * 画像ファイル名
   *
   * 商品の画像ファイル名を指定する。
   * 画像は`assets/images/item/${type}`に事前に格納すること。
   */
  imgFileName: string;

  /**
   * 販売店名
   */
  shopName?: string;

  /**
   * 著者名
   */
  authorName?: string;

  /**
   * Amazon商品ID
   */
  amazonItemId?: string;

  /**
   * Kindle商品ID
   */
  kindleItemId?: string;

  /**
   * 楽天商品ID
   */
  rakutenItemId?: string;

  /**
   * Kobo商品ID
   */
  koboItemId?: string;

  /**
   * 検索用キーワード
   *
   * 商品IDの指定が無い場合はキーワードの検索結果で代替する。
   * 商品カード種別が商品（`goods`）の場合のみ対応。
   * Yahooが検索対応のみなので、原則、商品カードは検索用キーワードも一緒に指定する。
   * 書籍は検索対応がないため、それぞれの商品IDを必ず指定すること。
   */
  searchKeyword?: string;

  /**
   * 商品タイトル・商品画像リンクのASP
   *
   * 商品の場合はAmazon、楽天、ヤフーのいずれかを、
   * 書籍の場合はAmazon、Kindle、楽天、Koboのいずれかを指定する。
   * デフォルトはAmazon（`amazon`）。
   */
  mainAspType?: EcMallAspType | BookAspType;
}

const props = withDefaults(defineProps<ShopItemCardPropType>(), {
  type: SHOP_ITEM_CARD_TYPE_MAP.GOODS,
  mainAspType: EC_MALL_ASP_TYPE_MAP.AMAZON,
});

const runtimeConfig = useRuntimeConfig();

const amazonItemUrl = computed(
  () => `https://www.amazon.co.jp/dp/${props.amazonItemId}?tag=${runtimeConfig.public.amazonTrackingId}&language=ja_JP`,
);
const rakutenProductUrl = computed(
  () =>
    `https://hb.afl.rakuten.co.jp/hgc/${runtimeConfig.public.rakutenAffiliateId}/mujiota?pc=https://product.rakuten.co.jp/product/-/${props.rakutenItemId}/&m=http://m.product.rakuten.co.jp/product/${props.rakutenItemId}/`,
);
const amazonSearchUrl = computed(
  () =>
    `https://www.amazon.co.jp/s?k=${props.searchKeyword}&__mk_ja_JP=カタカナ&tag=${runtimeConfig.public.amazonTrackingId}`,
);
const rakutenSearchUrl = computed(
  () =>
    `https://hb.afl.rakuten.co.jp/hgc/${runtimeConfig.public.rakutenAffiliateId}/mujiota?pc=https://search.rakuten.co.jp/search/mall/${props.searchKeyword}/?v=2&scid=af_pc_ich_link_urltxt&sc2id=af_101_0_0&m=http://m.rakuten.co.jp/`,
);
const yahooSearchUrl = computed(
  () =>
    `//ck.jp.ap.valuecommerce.com/servlet/referral?sid=${runtimeConfig.public.yahooValueCommerceSid}&pid=${runtimeConfig.public.yahooValueCommercePid}&vc_url=http://search.shopping.yahoo.co.jp/search?p=${props.searchKeyword}&vcptn=mujiota`,
);
const yahooAspImgUrl = computed(
  () =>
    `//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=${runtimeConfig.public.yahooValueCommerceSid}&pid=${runtimeConfig.public.yahooValueCommercePid}`,
);

const amazonBookUrl = computed(
  () => `https://www.amazon.co.jp/exec/obidos/asin/${props.amazonItemId}/${runtimeConfig.public.amazonTrackingId}/`,
);

const kindleUrl = computed(
  () => `https://www.amazon.co.jp/exec/obidos/ASIN/${props.kindleItemId}/${runtimeConfig.public.amazonTrackingId}/`,
);

const rakutenBookUrl = computed(
  () =>
    `https://hb.afl.rakuten.co.jp/hgc/${runtimeConfig.public.rakutenAffiliateId}/mujiota?pc=http://books.rakuten.co.jp/rb/${props.rakutenItemId}/?scid=af_ich_link_urltxt&m=http://m.rakuten.co.jp/ev/book/`,
);
const koboUrl = computed(
  () =>
    `http://hb.afl.rakuten.co.jp/hgc/${runtimeConfig.public.rakutenAffiliateId}/mujiota?pc=https://books.rakuten.co.jp/rk/${props.koboItemId}/?scid=af_ich_link_urltxt&m=http://m.rakuten.co.jp/ev/book/`,
);

const titleLink = computed(() => {
  if (props.type === SHOP_ITEM_CARD_TYPE_MAP.GOODS) {
    switch (props.mainAspType) {
      case EC_MALL_ASP_TYPE_MAP.AMAZON: {
        return unref(amazonItemUrl) || unref(amazonSearchUrl);
      }
      case EC_MALL_ASP_TYPE_MAP.RAKUTEN: {
        return unref(rakutenProductUrl) || unref(rakutenSearchUrl);
      }
      case EC_MALL_ASP_TYPE_MAP.YAHOO: {
        return unref(yahooSearchUrl);
      }
      default:
        return unref(amazonItemUrl) || unref(rakutenProductUrl) || unref(amazonSearchUrl);
    }
  } else if (props.type === SHOP_ITEM_CARD_TYPE_MAP.BOOK) {
    switch (props.mainAspType) {
      case BOOK_ASP_TYPE_MAP.AMAZON: {
        return unref(amazonBookUrl);
      }
      case BOOK_ASP_TYPE_MAP.KINDLE: {
        return unref(kindleUrl);
      }
      case BOOK_ASP_TYPE_MAP.RAKUTEN: {
        return unref(rakutenBookUrl);
      }
      case BOOK_ASP_TYPE_MAP.KOBO: {
        return unref(koboUrl);
      }
      default:
        return unref(amazonBookUrl) || unref(kindleUrl) || unref(rakutenBookUrl) || unref(koboUrl);
    }
  }
});

const className = computed(() =>
  bemx('AppShopItemCard', {
    type: props.type,
  }),
);
</script>

<template>
  <div :class="className">
    <div class="AppShopItemCard__Wrapper">
      <div v-if="imgFileName" class="AppShopItemCard__ItemImage">
        <a :href="titleLink" target="_blank" rel="nofollow noopener">
          <AppImage :image-path="`item/${type}/${imgFileName}`" />
        </a>
      </div>
      <div class="AppShopItemCard__Contents">
        <div class="AppShopItemCard__TitleWrapper">
          <div class="AppShopItemCard__Title">
            <a :href="titleLink" target="_blank" rel="nofollow noopener"
              ><AppText :type="TEXT_SIZE.TITLE2" :color="TEXT_COLOR.NORMAL">{{ title }}</AppText></a
            >
          </div>
          <div v-if="shopName" class="AppShopItemCard__ShopName">
            <AppText :type="TEXT_SIZE.DESCRIPTION2" :color="TEXT_COLOR.NORMAL">{{ shopName }}</AppText>
          </div>
          <div v-else-if="authorName" class="AppShopItemCard__AuthorName">
            <AppText :type="TEXT_SIZE.DESCRIPTION2" :color="TEXT_COLOR.NORMAL">{{ authorName }}</AppText>
          </div>
        </div>
        <div v-if="type === SHOP_ITEM_CARD_TYPE_MAP.GOODS" class="AppShopItemCard__SearchGoodsLinks">
          <div v-if="amazonItemId || searchKeyword" class="AppShopItemCard__ShopLinkAmazon">
            <a :href="amazonItemId ? amazonItemUrl : amazonSearchUrl" target="_blank" rel="noopener"
              ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">Amazon で探す</AppText></a
            >
          </div>
          <div v-if="rakutenItemId || searchKeyword" class="AppShopItemCard__ShopLinkRakuten">
            <a :href="rakutenItemId ? rakutenProductUrl : rakutenSearchUrl" target="_blank" rel="noopener"
              ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">楽天市場 で探す</AppText></a
            >
          </div>
          <div v-if="searchKeyword" class="AppShopItemCard__ShopLinkYahoo">
            <a :href="yahooSearchUrl" target="_blank" rel="noopener"
              ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">Yahoo! で探す</AppText></a
            >
            <span>
              <img :src="yahooAspImgUrl" height="1" width="1" border="0" />
            </span>
          </div>
        </div>

        <div v-else-if="type === SHOP_ITEM_CARD_TYPE_MAP.BOOK" class="AppShopItemCard__SearchBookLinks">
          <div v-if="kindleItemId" class="AppShopItemCard__ShopLinkKindle">
            <a :href="kindleUrl" target="_blank" rel="noopener"
              ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">Kindle で探す</AppText></a
            >
          </div>
          <div v-if="amazonItemId" class="AppShopItemCard__ShopLinkAmazonBook">
            <a :href="amazonBookUrl" target="_blank" rel="noopener"
              ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">Amazon で探す</AppText></a
            >
          </div>
          <div v-if="koboItemId" class="AppShopItemCard__ShopLinkKobo">
            <a :href="koboUrl" target="_blank" rel="noopener"
              ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">楽天kobo で探す</AppText></a
            >
          </div>
          <div v-if="rakutenItemId" class="AppShopItemCard__ShopLinkRakutenBook">
            <a :href="rakutenBookUrl" target="_blank" rel="noopener"
              ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">楽天市場 で探す</AppText></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$item-card-bg-color: $white-color;
$item-card-border-color: $gray-f5-color;
$item-card-box-shadow-color: $gray-000-alpha-025-color;

$item-card-button-box-shadow-color: $gray-051-alpha-050-color;
$rakuten-button-color: $rakuten-red-color;
$amazon-button-color: $amazon-yellow-color;
$yahoo-button-color: $yahoo-blue-color;

.AppShopItemCard {
  margin: $scale28 0;

  &__Wrapper {
    display: flex;
    gap: $scale16;
    background: $item-card-bg-color;
    border: $border-width1 solid $item-card-border-color;
    border-radius: $border-radius4;
    box-shadow: 0 0 2px $item-card-box-shadow-color;
    transition: 0.3s ease-in-out;
    @include phone {
      gap: $scale8;
    }
  }

  &__ItemImage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    padding: $scale16;
    img {
      max-width: 120px;
      height: auto;
    }
    @include tablet {
      width: 200px;
      img {
        max-width: 100px;
      }
    }
    @include phone {
      width: 160px;
      img {
        max-width: 80px;
      }
    }
  }
  &__Contents {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: $scale12 $scale16 $scale8 0;
  }

  &__TitleWrapper {
    margin-bottom: $scale28;
    @include tablet {
      margin-bottom: $scale12;
    }
  }

  &--type-book {
    .AppShopItemCard {
      &__TitleWrapper {
        margin-bottom: $scale24;
        @include tablet {
          margin-bottom: $scale12;
        }
      }
    }
  }

  &__Title {
    display: flex;
    margin-bottom: $scale8;
    font-weight: $font-weight-700;
  }

  &__SearchGoodsLinks,
  &__SearchBookLinks {
    display: flex;
    @include tablet {
      flex-direction: column;
    }
  }

  &__SearchBookLinks {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__ShopLinkAmazon,
  &__ShopLinkRakuten,
  &__ShopLinkYahoo,
  &__ShopLinkAmazonBook,
  &__ShopLinkRakutenBook,
  &__ShopLinkKindle,
  &__ShopLinkKobo {
    flex: 1;

    a {
      display: block;
      text-align: center;
      border-radius: $border-radius4;
      box-shadow: 0px 1px 2px $item-card-button-box-shadow-color;
    }
  }

  &__ShopLinkAmazon,
  &__ShopLinkRakuten,
  &__ShopLinkYahoo {
    min-width: 33%;
    padding: $scale8;

    @include tablet {
      min-width: 100%;
      padding: $scale4;
    }

    a {
      width: 100%;
      padding: $scale12;
      @include tablet {
        padding: $scale8;
      }
    }
  }

  &__ShopLinkAmazonBook,
  &__ShopLinkRakutenBook,
  &__ShopLinkKindle,
  &__ShopLinkKobo {
    min-width: 50%;
    padding: $scale4;
    a {
      width: 100%;
      padding: $scale8;
      @include tablet {
        padding: $scale6;
      }
    }
  }

  &__ShopLinkRakuten,
  &__ShopLinkRakutenBook,
  &__ShopLinkKobo {
    a {
      background-color: $rakuten-button-color;
      border: $border-width2 solid $rakuten-button-color;
    }
  }
  &__ShopLinkAmazon,
  &__ShopLinkAmazonBook,
  &__ShopLinkKindle {
    a {
      background-color: $amazon-button-color;
      border: $border-width2 solid $amazon-button-color;
    }
  }
  &__ShopLinkYahoo {
    a {
      background-color: $yahoo-button-color;
      border: $border-width2 solid $yahoo-button-color;
    }
    img {
      display: none;
    }
  }
}
</style>
