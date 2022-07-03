<script setup lang="ts">
import { DATE_TEXT_TYPE_MAP } from '@/components/app/DateTextComposable';
import { LinkCardType, LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardComposable';
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';
import { Article } from '@/store/article';
import { bemx, getUrlFqdn } from '@/utils/util';

interface LinkCardPropType {
  /**
   * リンクカード種別
   *
   * `external`（外部リンク） | `related`（関連リンク） | `qiita` | `zenn`
   */
  type: LinkCardType;

  /**
   * タイトル
   *
   * 外部リンクの場合は必須。
   */
  title?: string;

  /**
   * 説明
   *
   * 外部リンクの場合は必須。
   */
  note?: string;

  /**
   * リンク
   *
   * 外部リンクの場合は必須。
   */
  link?: string;

  /**
   * 画像ファイル名
   *
   * 外部リンクの場合は必須。
   */
  imgFileName?: string;

  /**
   * ASP測定用の画像リンク
   *
   * 外部リンクでアフィリエイトリンクを指定する場合、必要に応じて設定。
   * 測定用画像リンクが必要なASPの場合は、必ず指定すること。
   *
   */
  aspMeasurementImgLink?: string;

  /**
   * 記事情報
   *
   * 関連記事の場合は必須。
   */
  article?: Article;

  /**
   * 記事ID
   *
   * 関連記事、Qiita、Zennの場合は必須。
   * 対象記事を一意特定できるID文字列を指定する。
   */
  id?: string;
}

const props = defineProps<LinkCardPropType>();

const domain = ref('');

switch (props.type) {
  case LINK_CARD_TYPE_MAP.EXTERNAL:
    domain.value = getUrlFqdn(props.link);
    break;
  case LINK_CARD_TYPE_MAP.RELATED:
    domain.value = 'archt.blue';
    break;
  case LINK_CARD_TYPE_MAP.QIITA:
    domain.value = 'qiita.com';
    break;
  case LINK_CARD_TYPE_MAP.ZENN:
    domain.value = 'zenn.dev';
    break;
  default:
}

const className = computed(() =>
  bemx('BaLinkCard', {
    type: props.type,
  }),
);
</script>

<template>
  <div :class="className">
    <a :href="link" target="_blank" rel="nofollow noopener">
      <div class="BaLinkCard__Wrapper">
        <div class="BaLinkCard__LinkImage">
          <AppImage v-if="imgFileName" :path="`link/${imgFileName}`" />
        </div>
        <div class="BaLinkCard__Contents">
          <div class="BaLinkCard__TitleNoteWrapper">
            <div class="BaLinkCard__LinkTitle">
              <AppText :type="TEXT_SIZE.TITLE2" :color="TEXT_COLOR.NORMAL">{{ title }}</AppText>
            </div>
            <div class="BaLinkCard__LinkNote">
              <AppText :type="TEXT_SIZE.DESCRIPTION2" :color="TEXT_COLOR.NORMAL">{{ note }}</AppText>
            </div>
          </div>
          <div class="BaLinkCard__Meta">
            <div class="BaLinkCard__LinkDate">
              <div v-if="type === LINK_CARD_TYPE_MAP.RELATED && article">
                <div class="BaArticle__Date">
                  <span class="BaLinkCard__DatePublished" itemprop="createdAt" :content="article.createdAt">
                    <AppDateText :date-time-text="article.createdAt" />
                  </span>
                  <span
                    v-if="article.updatedAt != article.createdAt"
                    class="BaLinkCard__DateUpdated"
                    itemprop="updatedAt"
                    :content="article.updatedAt"
                  >
                    <AppDateText :type="DATE_TEXT_TYPE_MAP.UPDATED" :date-time-text="article.updatedAt" />
                  </span>
                </div>
              </div>
            </div>
            <div class="BaLinkCard__LinkDomain">
              <AppText :type="TEXT_SIZE.DATE1" :color="TEXT_COLOR.NORMAL">{{ domain }}</AppText>
            </div>
          </div>
          <img v-if="aspMeasurementImgLink" border="0" width="1" height="1" :src="aspMeasurementImgLink" alt="" />
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
$card-bg-color: $white-color;
$card-border-color: $gray-e0-color;
$link-box-shadow-color: $gray-ef-color;
$card-link-hover-color: $gray-66-color;
$card-link-hover-bg-color: $pale-blue-alpha-color;
$card-link-hover-label-color: $black-color;

$link-title-before-top: -2px;
$link-title-before-width: 64px;
$link-title-before-text-color: $white-color;
$link-title-before-bg-color-external: $black-color;
$link-title-before-bg-color-related: $main-blue-color;

.BaLinkCard {
  margin: $scale28 0;

  &__Wrapper {
    display: flex;
    background: $card-bg-color;
    border: $border-width1 solid $card-border-color;
    border-radius: $border-radius4;
    box-shadow: 0 0 2px $link-box-shadow-color;
    transition: 0.3s ease-in-out;
    &:hover {
      color: $card-link-hover-color;
      background: $card-link-hover-bg-color;
      .AppExternalLink__LinkTitle {
        &::before {
          background: $card-link-hover-label-color;
        }
      }
    }

    // TODO: ここから、type別のCSSもいれること
  }

  &__LinkImage {
    margin-right: $scale16;
    img {
      height: 100%;
      object-fit: cover;
      aspect-ratio: $aspect-ratio-191;
      border-top-left-radius: $border-radius4;
      border-bottom-left-radius: $border-radius4;
    }
  }

  &__Contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: $scale12 $scale16 $scale8 0;
  }

  // &__TitleNoteWrapper {
  // }

  &__LinkTitle {
    margin-bottom: $scale12;
    font-weight: $font-weight-700;
    &::before {
      position: relative;
      top: $link-title-before-top;
      display: inline-block;
      width: $link-title-before-width;
      padding: $scale4;
      margin-right: $scale8;
      font-size: $font-size-10px;
      font-weight: $font-weight-700;
      color: $link-title-before-text-color;
      text-align: center;
      content: '外部リンク';
      background: $link-title-before-bg-color-external;
      border-radius: $border-radius2;
      transition: 0.3s ease-in-out;
    }
  }
  // &__LinkNote {
  // }

  &__Meta {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: $text;
  }
  &__Date {
    display: flex;
    flex-wrap: nowrap;
    padding-right: 0;
  }
  &__DatePublished {
    margin-right: $scale12;
    @include phone {
      margin-right: $scale8;
    }
  }
  // &__LinkDomain {
  // }
}
</style>
