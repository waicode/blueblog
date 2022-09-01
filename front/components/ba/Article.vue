<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { TEXT_SIZE } from '@/components/app/TextComposable';
import { DATE_TEXT_TYPE_MAP } from '@/components/app/DateTextComposable';
import { tabletMediaQuery, phoneMediaQuery } from '@/utils/util';
import {
  ArticleParsedContent,
  EYE_CATCH_WIDTH_DESKTOP,
  EYE_CATCH_WIDTH_PHONE,
  EYE_CATCH_WIDTH_TABLET,
} from '@/components/ba/ArticleComposable';

interface ArticlePropType {
  /**
   * 記事情報
   *
   */
  article: ArticleParsedContent;
}

defineProps<ArticlePropType>();

// タブレット画面幅以下かどうか
const isTabletMedia = useMediaQuery(tabletMediaQuery());

// スマホ画面幅以下かどうか
const isPhoneMedia = useMediaQuery(phoneMediaQuery());

/**
 * アイキャッチ画像の幅
 */
const eyeCatchImageWidth = ref(EYE_CATCH_WIDTH_DESKTOP);

watchEffect(() => {
  if (isPhoneMedia.value) {
    // より画面幅が狭いスマホ側を優先して更新
    eyeCatchImageWidth.value = EYE_CATCH_WIDTH_PHONE;
  } else if (isTabletMedia.value) {
    // スマホでなくタブレット幅の場合はこちら
    eyeCatchImageWidth.value = EYE_CATCH_WIDTH_TABLET;
  } else {
    // PCの場合は幅を戻す
    eyeCatchImageWidth.value = EYE_CATCH_WIDTH_DESKTOP;
  }
});
</script>

<template>
  <article class="BaArticle">
    <NuxtLink :to="article._path">
      <div class="BaArticle__Wrapper">
        <div class="BaArticle__FirstContents">
          <div class="BaArticle__Eyecatch">
            <AppEyeCatchImage :icon="article.icon" :width="eyeCatchImageWidth" />
          </div>
          <h2 v-if="isTabletMedia && !isPhoneMedia" class="BaArticle__Title">
            <AppText :type="TEXT_SIZE.TITLE1">{{ article.title }}</AppText>
          </h2>
        </div>
        <div class="BaArticle__SecondContents">
          <div class="BaArticle__TitleDescriptionWrapper">
            <h2 v-if="!isTabletMedia || isPhoneMedia" class="BaArticle__Title">
              <AppText :type="TEXT_SIZE.TITLE1">{{ article.title }}</AppText>
            </h2>
            <div class="BaArticle__Description">
              <p>
                <AppText :type="TEXT_SIZE.DESCRIPTION1">{{ article.description }}</AppText>
              </p>
            </div>
          </div>
          <div class="BaArticle__Meta">
            <div class="BaArticle__Date">
              <span class="BaArticle__DatePublished" itemprop="createdAt" :content="article.createdAt">
                <AppDateText :date-time-text="article.createdAt" />
              </span>
              <span
                v-if="article.updatedAt && article.updatedAt != article.createdAt"
                class="BaArticle__DateUpdated"
                itemprop="updatedAt"
                :content="article.updatedAt"
              >
                <AppDateText :type="DATE_TEXT_TYPE_MAP.UPDATED" :date-time-text="article.updatedAt" />
              </span>
            </div>
            <div v-if="article.tags" class="BaArticle__Tags">
              <AppTagLabel v-for="tag in article.tags" :key="`${article.id}-${tag}`" class="BaArticle__Tag">
                <AppText :type="TEXT_SIZE.TAG1">{{ tag }}</AppText>
              </AppTagLabel>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<style lang="scss">
.BaArticle {
  height: auto;

  &__Wrapper {
    display: flex;
    @include tablet {
      flex-direction: column;
    }
    @include phone {
      flex-direction: column;
    }
  }

  &__FirstContents {
    display: flex;
    @include tablet {
      margin-bottom: $scale12;
    }
    @include phone {
      margin-bottom: $scale16;
    }
  }

  &__Eyecatch {
    height: auto;
    margin-right: $scale32;
    @include phone {
      width: 100%;
      margin-right: 0;
    }

    .AppEyeCatchImage {
      height: auto;
      vertical-align: top;
      border-radius: $border-width2;
      width: 100%;
    }
  }

  &__SecondContents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__TitleDescriptionWrapper {
    display: flex;
    flex-direction: column;
    gap: $scale12;
    @include phone {
      gap: 0;
    }
  }

  &__Title {
    @include phone {
      margin-bottom: $scale12;
    }
  }

  &__Description {
    @include tablet {
      margin-bottom: $scale24;
    }
    @include phone {
      margin-bottom: $scale12;
    }
  }

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
    padding-top: $scale8;
  }

  &__DatePublished {
    margin-right: $scale12;
    @include phone {
      margin-right: $scale8;
    }
  }

  &__Tags {
    display: flex;
    padding-left: 0;
    padding-top: $scale8;
  }

  &__Tag {
    &:not(:last-child) {
      margin-right: $scale8;
    }
  }
}
</style>
