<script setup lang="ts">
import { DATE_TEXT_TYPE_MAP } from '@/components/app/DateTextComposable';
import { LinkCardType, LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardComposable';
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';
import useOgp from '@/composables/useOgp';
import { Article } from '@/components/ba/ArticleComposable';
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
   * 未設定の場合はリンクからOGPの`title`を調べて見つかればそれを適用する。
   */
  title?: string;

  /**
   * 説明
   *
   * 外部リンクの場合に設定する。
   * 未設定の場合はリンクからOGPの`description`を調べて見つかればそれを適用する。
   */
  description?: string;

  /**
   * リンク
   *
   * 外部リンク、Qiita、Zennの場合は必須。
   */
  link?: string;

  /**
   * 画像ファイル名
   *
   * 外部リンクの場合に設定する。
   * 未設定の場合はリンクからOGP画像を調べて見つかればそれを適用する。
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
}

const props = defineProps<LinkCardPropType>();

const linkDomain = ref('');

switch (props.type) {
  case LINK_CARD_TYPE_MAP.EXTERNAL:
    linkDomain.value = getUrlFqdn(props.link);
    break;
  case LINK_CARD_TYPE_MAP.RELATED:
    linkDomain.value = 'archt.blue';
    break;
  case LINK_CARD_TYPE_MAP.QIITA:
    linkDomain.value = 'qiita.com';
    break;
  case LINK_CARD_TYPE_MAP.ZENN:
    linkDomain.value = 'zenn.dev';
    break;
  default:
}

const { article, title, description, link } = toRefs(props);

const linkTitle = ref('');
const linkDescription = ref('');
const linkImage = ref(undefined);

linkTitle.value = title.value;
linkDescription.value = description.value;

const ogp = useOgp(link);
if (ogp.value) {
  if (props.type === LINK_CARD_TYPE_MAP.RELATED) {
    linkTitle.value = article.value?.title;
    linkDescription.value = article.value?.description;
  } else if (props.link) {
    if (ogp.value.title) {
      linkTitle.value = title.value ?? ogp.value.title;
    }
    if (ogp.value.description) {
      linkDescription.value = description.value ?? ogp.value.description;
    }
    if (ogp.value.imageUrl) {
      linkImage.value = ogp.value.imageUrl;
    }
  }
}

const className = computed(() =>
  bemx('BaLinkCard', {
    type: props.type,
  }),
);
</script>

<template>
  <ClientOnly>
    <div :class="className">
      <AppLink :href="link" target="_blank" rel="nofollow noopener">
        <div class="BaLinkCard__Wrapper">
          <div v-if="props.type === LINK_CARD_TYPE_MAP.RELATED && props.article" class="BaLinkCard__LinkImage">
            <AppEyeCatchImage :icon="props.article.icon" />
          </div>
          <div v-else-if="imgFileName || linkImage" class="BaLinkCard__LinkImage">
            <AppImage v-if="imgFileName" :image-path="`link/${imgFileName}`" />
            <AppImage v-else :url="linkImage" />
          </div>
          <div v-else class="BaLinkCard__LinkImage"></div>
          <div class="BaLinkCard__Contents">
            <div class="BaLinkCard__TitleNoteWrapper">
              <div class="BaLinkCard__LinkTitle">
                <AppText :type="TEXT_SIZE.TITLE2" :color="TEXT_COLOR.NORMAL">{{ linkTitle }}</AppText>
              </div>
              <div class="BaLinkCard__LinkNote">
                <AppText :type="TEXT_SIZE.DESCRIPTION2" :color="TEXT_COLOR.NORMAL">{{ linkDescription }}</AppText>
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
                <AppText :type="TEXT_SIZE.DATE1" :color="TEXT_COLOR.NORMAL">{{ linkDomain }}</AppText>
              </div>
            </div>
            <img v-if="aspMeasurementImgLink" border="0" width="1" height="1" :src="aspMeasurementImgLink" alt="" />
          </div>
        </div>
      </AppLink>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
$card-bg-color: $white-color;
$card-border-color: $gray-f5-color;
$link-box-shadow-color: $gray-000-alpha-025-color;
$card-link-hover-color: $gray-66-color;
$card-link-hover-bg-color: $pale-blue-alpha-color;
$card-link-hover-label-color: $black-color;

$link-title-before-width: 64px;
$link-title-before-height: 22px;
$link-title-before-height-qiita: 20px;
$link-title-before-height-zenn: 16px;
$link-title-before-text-color: $white-color;
$link-title-before-bg-color-external: $black-color;
$link-title-before-bg-color-related: $main-blue-color;

.BaLinkCard {
  margin: $scale28 0;

  &__Wrapper {
    display: flex;
    gap: $scale16;
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
    @include phone {
      flex-direction: column;
    }
  }

  &__LinkImage {
    img {
      min-width: 240px;
      max-width: 240px;
      height: 100%;
      object-fit: cover;
      aspect-ratio: $aspect-ratio-191;
      border-top-left-radius: $border-radius4;
      border-bottom-left-radius: $border-radius4;
    }

    .AppEyeCatchImage {
      min-width: 240px;
      max-width: 240px;
      height: 100%;
      border-top-left-radius: $border-radius4;
      border-bottom-left-radius: $border-radius4;

      .AppEyeCatchImage__Bg {
        border-top-left-radius: $border-radius4;
        border-bottom-left-radius: $border-radius4;
      }
    }
    @include tablet {
      margin-top: $scale12;
      margin-left: $scale12;

      img {
        min-width: 200px;
        max-width: 200px;
        height: auto;
        border-radius: $border-radius2;
      }

      .AppEyeCatchImage {
        min-width: 200px;
        max-width: 200px;
        height: auto;
        border-radius: $border-radius2;
      }
    }
    @include phone {
      margin: 0 0 $scale12;

      img {
        min-width: 100%;
        max-width: 100%;
        border-radius: $border-radius4 $border-radius4 $border-radius1 $border-radius1;
      }

      .AppEyeCatchImage {
        min-width: 100%;
        max-width: 100%;
        border-radius: $border-radius4 $border-radius4 $border-radius1 $border-radius1;
      }
    }
  }

  &__Contents {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: $scale12 $scale16 $scale8 0;
    @include tablet {
      justify-content: start;
    }
    @include phone {
      padding: 0 $scale12 $scale8;
      justify-content: start;
    }
  }

  &__TitleNoteWrapper {
    @include tablet {
      margin-bottom: $scale12;
    }
    @include phone {
      margin-bottom: $scale12;
    }
  }

  &__LinkTitle {
    display: flex;
    margin-bottom: $scale12;

    &::before {
      display: block;
      width: $link-title-before-width;
      height: $link-title-before-height;
      flex: 0 0 $link-title-before-width;
      padding: $scale4;
      margin-right: $scale8;
      font-size: $font-size-10px;
      font-weight: $font-weight-700;
      transition: 0.3s ease-in-out;
    }
  }

  &--type-external,
  &--type-related {
    .BaLinkCard {
      &__LinkTitle {
        &::before {
          display: block;
          width: $link-title-before-width;
          height: $link-title-before-height;
          flex: 0 0 $link-title-before-width;
          padding: $scale4;
          margin-right: $scale8;
          font-size: $font-size-10px;
          font-weight: $font-weight-700;
          color: $link-title-before-text-color;
          text-align: center;
          border-radius: $border-radius2;
          transition: 0.3s ease-in-out;
        }
      }
    }
  }

  &--type-external {
    .BaLinkCard {
      &__LinkTitle {
        &::before {
          content: '外部リンク';
          background: $link-title-before-bg-color-external;
        }
      }
    }
  }

  &--type-related {
    .BaLinkCard {
      &__LinkTitle {
        &::before {
          content: '関連リンク';
          background: $link-title-before-bg-color-related;
        }
      }
    }
  }

  &--type-qiita,
  &--type-zenn {
    .BaLinkCard {
      &__LinkTitle {
        &::before {
          display: inline-block;
          content: '';
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
  }

  &--type-qiita {
    .BaLinkCard {
      &__LinkTitle {
        &::before {
          background-image: url('~/assets/images/shared/qiita-logo-background-color.png');
          height: $link-title-before-height-qiita;
          width: auto;
          margin-right: 0;
        }
      }
    }
  }

  &--type-zenn {
    .BaLinkCard {
      &__LinkTitle {
        &::before {
          background-image: url('~/assets/images/shared/zenn-logo.png');
          height: $link-title-before-height-zenn;
          width: auto;
          margin-top: $scale2;
          margin-right: $scale12;
        }
      }
    }
  }

  // &__LinkNote {
  // }

  &__Meta {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
