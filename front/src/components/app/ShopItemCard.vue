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
  amazonItemId?: string | number;

  /**
   * Kindle商品ID
   */
  kindleItemId?: string;

  /**
   * 楽天商品ID
   */
  rakutenItemId?: string | number;

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
  shopName: undefined,
  authorName: undefined,
  amazonItemId: undefined,
  kindleItemId: undefined,
  rakutenItemId: undefined,
  koboItemId: undefined,
  searchKeyword: undefined,
  mainAspType: EC_MALL_ASP_TYPE_MAP.AMAZON,
});

const runtimeConfig = useRuntimeConfig();

const amazonItemUrl = computed(() =>
  props.amazonItemId
    ? `https://www.amazon.co.jp/dp/${props.amazonItemId}?tag=${runtimeConfig.public.amazonTrackingId}&language=ja_JP`
    : undefined,
);
const rakutenProductUrl = computed(() =>
  props.rakutenItemId
    ? `https://hb.afl.rakuten.co.jp/hgc/${runtimeConfig.public.rakutenAffiliateId}/mujiota?pc=https://product.rakuten.co.jp/product/-/${props.rakutenItemId}/&m=http://m.product.rakuten.co.jp/product/${props.rakutenItemId}/`
    : undefined,
);
const amazonSearchUrl = computed(() =>
  props.searchKeyword
    ? encodeURI(
        `https://www.amazon.co.jp/s?k=${props.searchKeyword}&__mk_ja_JP=カタカナ&tag=${runtimeConfig.public.amazonTrackingId}`,
      )
    : undefined,
);
const rakutenSearchUrl = computed(() =>
  props.searchKeyword
    ? encodeURI(
        `https://hb.afl.rakuten.co.jp/hgc/${runtimeConfig.public.rakutenAffiliateId}/mujiota?pc=https://search.rakuten.co.jp/search/mall/${props.searchKeyword}/?v=2&scid=af_pc_ich_link_urltxt&sc2id=af_101_0_0&m=http://m.rakuten.co.jp/`,
      )
    : undefined,
);
const yahooSearchUrl = computed(() =>
  props.searchKeyword
    ? encodeURI(
        `//ck.jp.ap.valuecommerce.com/servlet/referral?sid=${runtimeConfig.public.yahooValueCommerceSid}&pid=${runtimeConfig.public.yahooValueCommercePid}&vc_url=http://search.shopping.yahoo.co.jp/search?p=${props.searchKeyword}&vcptn=mujiota`,
      )
    : undefined,
);
const yahooAspImgUrl = computed(
  () =>
    `//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=${runtimeConfig.public.yahooValueCommerceSid}&pid=${runtimeConfig.public.yahooValueCommercePid}`,
);

const amazonBookUrl = computed(() =>
  props.amazonItemId
    ? `https://www.amazon.co.jp/exec/obidos/asin/${props.amazonItemId}/${runtimeConfig.public.amazonTrackingId}/`
    : undefined,
);

const kindleUrl = computed(() =>
  props.kindleItemId
    ? `https://www.amazon.co.jp/exec/obidos/ASIN/${props.kindleItemId}/${runtimeConfig.public.amazonTrackingId}/`
    : undefined,
);

const rakutenBookUrl = computed(() =>
  props.rakutenItemId
    ? `https://hb.afl.rakuten.co.jp/hgc/${runtimeConfig.public.rakutenAffiliateId}/mujiota?pc=http://books.rakuten.co.jp/rb/${props.rakutenItemId}/?scid=af_ich_link_urltxt&m=http://m.rakuten.co.jp/ev/book/`
    : undefined,
);
const koboUrl = computed(() =>
  props.koboItemId
    ? `http://hb.afl.rakuten.co.jp/hgc/${runtimeConfig.public.rakutenAffiliateId}/mujiota?pc=https://books.rakuten.co.jp/rk/${props.koboItemId}/?scid=af_ich_link_urltxt&m=http://m.rakuten.co.jp/ev/book/`
    : undefined,
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
  <ClientOnly>
    <div :class="className">
      <div class="AppShopItemCard__Wrapper">
        <div v-if="imgFileName" class="AppShopItemCard__ItemImage">
          <AppLink :href="titleLink">
            <AppImage :src="`item/${type}/${imgFileName}`" />
          </AppLink>
        </div>
        <div class="AppShopItemCard__Contents">
          <div class="AppShopItemCard__TitleWrapper">
            <div class="AppShopItemCard__Title">
              <AppLink :href="titleLink"
                ><AppText :type="TEXT_SIZE.TITLE2" :color="TEXT_COLOR.NORMAL">{{ title }}</AppText></AppLink
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
              <AppLink :href="amazonItemId ? amazonItemUrl : amazonSearchUrl"
                ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">Amazon で探す</AppText></AppLink
              >
            </div>
            <div v-if="rakutenItemId || searchKeyword" class="AppShopItemCard__ShopLinkRakuten">
              <AppLink :href="rakutenItemId ? rakutenProductUrl : rakutenSearchUrl"
                ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">楽天市場 で探す</AppText></AppLink
              >
            </div>
            <div v-if="searchKeyword" class="AppShopItemCard__ShopLinkYahoo">
              <AppLink :href="yahooSearchUrl"
                ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">Yahoo! で探す</AppText></AppLink
              >
              <span>
                <img :src="yahooAspImgUrl" height="1" width="1" border="0" />
              </span>
            </div>
          </div>

          <div v-else-if="type === SHOP_ITEM_CARD_TYPE_MAP.BOOK" class="AppShopItemCard__SearchBookLinks">
            <div v-if="kindleItemId" class="AppShopItemCard__ShopLinkKindle">
              <AppLink :href="kindleUrl"
                ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">Kindle で探す</AppText></AppLink
              >
            </div>
            <div v-if="amazonItemId" class="AppShopItemCard__ShopLinkAmazonBook">
              <AppLink :href="amazonBookUrl"
                ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">Amazon で探す</AppText></AppLink
              >
            </div>
            <div v-if="koboItemId" class="AppShopItemCard__ShopLinkKobo">
              <AppLink :href="koboUrl"
                ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">楽天kobo で探す</AppText></AppLink
              >
            </div>
            <div v-if="rakutenItemId" class="AppShopItemCard__ShopLinkRakutenBook">
              <AppLink :href="rakutenBookUrl"
                ><AppText :type="TEXT_SIZE.BUTTON1" :color="TEXT_COLOR.WHITE">楽天市場 で探す</AppText></AppLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
$item-card-bg-color: $white-color;
$item-card-border-color: $gray-f5-color;
$item-card-box-shadow-color: $gray-000-alpha-025-color;

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
    box-shadow: 0 0 1px $item-card-box-shadow-color;
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
