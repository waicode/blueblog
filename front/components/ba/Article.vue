<script setup lang="ts">
import { Article } from '@/store/article';
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';
import { DATE_TEXT_TYPE_MAP } from '@/components/app/DateTextComposable';
import useMediaQuery from '@/composables/useMediaQuery';
import { tabletMediaQuery, phoneMediaQuery } from '@/utils/util';
import {
  EYE_CATCH_WIDTH_DESKTOP,
  EYE_CATCH_WIDTH_PHONE,
  EYE_CATCH_WIDTH_TABLET,
} from '@/components/ba/ArticleComposable';

interface ArticlePropType {
  /**
   * 記事情報
   *
   */
  article: Article;
}

defineProps<ArticlePropType>();

// タブレット画面幅以下かどうか
const isTabletMedia = useMediaQuery(tabletMediaQuery);

// スマホ画面幅以下かどうか
const isPhoneMedia = useMediaQuery(phoneMediaQuery);

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
    <NuxtLink :to="`/articles/${article.slug}/`">
      <div class="BaArticle__Wrapper">
        <div class="BaArticle__FirstContents">
          <div class="BaArticle__Eyecatch">
            <AppEyeCatchImage :icon="article.icon" :width="eyeCatchImageWidth" />
          </div>
          <h2 v-if="isTabletMedia && !isPhoneMedia" class="BaArticle__Title">
            <AppText :type="TEXT_SIZE.TITLE1" :color="TEXT_COLOR.NORMAL">{{ article.title }}</AppText>
          </h2>
        </div>
        <div class="BaArticle__SecondContents">
          <h2 v-if="!isTabletMedia || isPhoneMedia" class="BaArticle__Title">
            <AppText :type="TEXT_SIZE.TITLE1" :color="TEXT_COLOR.NORMAL">{{ article.title }}</AppText>
          </h2>
          <div class="BaArticle__Description">
            <p>
              <AppText :type="TEXT_SIZE.DESCRIPTION1" :color="TEXT_COLOR.NORMAL">{{ article.description }}</AppText>
            </p>
          </div>
          <div class="BaArticle__Meta">
            <div class="BaArticle__Date">
              <span class="BaArticle__DatePublished" itemprop="createdAt" :content="article.createdAt">
                <AppDateText :date-time-text="article.createdAt" />
              </span>
              <span
                v-if="article.updatedAt != article.createdAt"
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

  &__Title {
    color: $text;
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

  &__Tags {
    display: flex;
    padding-left: 0;
    margin-top: $scale8;
  }

  &__Tag {
    &:not(:last-child) {
      margin-right: $scale8;
    }
  }
}
</style>
