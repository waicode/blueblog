<script setup lang="ts">
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
import { TEXT_SIZE } from '@/components/app/TextComposable';
import { DATE_TEXT_TYPE_MAP } from '@/components/app/DateTextComposable';

interface ArticleTopPropType {
  /**
   * 記事情報
   */
  article: ArticleParsedContent;
}

defineProps<ArticleTopPropType>();
</script>

<template>
  <article class="BaArticleTop">
    <h1 class="BaArticleTop__PageTitle">
      <AppText :type="TEXT_SIZE.TITLE1">{{ article.title }}</AppText>
    </h1>
    <div class="BaArticleTop__Meta">
      <div class="BaArticleTop__Date">
        <span class="BaArticleTop__DatePublished" itemprop="createdAt" :content="article.createdAt">
          <AppDateText :date-time-text="article.createdAt" size="medium" />
        </span>
        <span
          v-if="article.updatedAt && article.updatedAt != article.createdAt"
          class="BaArticleTop__DateUpdated"
          itemprop="updatedAt"
          :content="article.updatedAt"
        >
          <AppDateText :type="DATE_TEXT_TYPE_MAP.UPDATED" :date-time-text="article.updatedAt" size="medium" />
        </span>
      </div>
      <!-- TODO: 約○分で読了のコンポーネントをつくって入れる -->
      <div v-if="article.tags" class="BaArticleTop__Tags">
        <AppTagLabel v-for="tag in article.tags" :key="`${article.id}-${tag}`" class="BaArticle__Tag">
          <AppText :type="TEXT_SIZE.TAG1">{{ tag }}</AppText>
        </AppTagLabel>
      </div>
    </div>
    <div class="BaArticleTop__Eyecatch">
      <AppEyeCatchImage :icon="article.icon" />
    </div>
    <div class="BaArticleTop__Description">
      <AppText :type="TEXT_SIZE.BODY1">{{ article.description }}</AppText>
    </div>
  </article>
</template>

<style lang="scss">
.BaArticleTop {
  &__PageTitle {
    margin-bottom: $scale16;
    @include tablet {
      margin-bottom: $scale4;
    }
  }

  &__Meta {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: $scale8;
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
    margin-top: $scale8;
  }

  &__Tag {
    &:not(:last-child) {
      margin-right: $scale8;
    }
  }

  &__Eyecatch {
    margin-bottom: $scale20;

    .AppEyeCatchImage {
      border-radius: $scale4;
    }
  }

  &__Description {
    margin-bottom: $scale52;
  }
}
</style>
