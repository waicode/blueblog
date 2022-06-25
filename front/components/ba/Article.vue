<script setup lang="ts">
import { Article } from '@/store/article';
import { DATE_TEXT_TYPE_MAP } from '@/components/app/DateTextComposable';

interface ArticlePropType {
  /**
   * 記事情報
   *
   */
  article: Article;
}

defineProps<ArticlePropType>();
</script>

<template>
  <article class="BaArticle">
    <NuxtLink :to="`/articles/${article.slug}/`">
      <div class="columns">
        <div class="AppArticle__Eyecatch column is-5-desktop is-4-tablet is-12-mobile">
          <AppEyeCatchImage :icon="article.icon" />
        </div>
        <div class="AppArticle__Contents column is-7-desktop is-8-tablet is-12-mobile">
          <h2 class="AppArticle__Title">
            <AppText>{{ article.title }}</AppText>
          </h2>
          <div class="AppArticle__Description">
            <p>
              <AppText>{{ article.description }}</AppText>
            </p>
          </div>
          <div class="AppArticle__Meta">
            <div class="AppArticle__Date">
              <span class="AppArticle__DatePublished" itemprop="createdAt" :content="article.createdAt">
                <AppDateText :dateTimeText="article.createdAt" />
              </span>
              <span
                v-if="article.updatedAt != article.createdAt"
                class="AppArticle__DateUpdated"
                itemprop="updatedAt"
                :content="article.updatedAt"
              >
                <AppDateText :type="DATE_TEXT_TYPE_MAP.UPDATED" :dateTimeText="article.updatedAt" />
              </span>
            </div>
            <div v-if="article.tags" class="AppArticle__Tags">
              <AppTagLabel v-for="tag in article.tags" :key="`${article.id}-${tag}`" class="AppArticle__Tag">
                <AppText>{{ tag }}</AppText>
              </AppTagLabel>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<style lang="scss">
$contents-min-height: 172px;

.AppArticle {
  height: auto;
  &__Eyecatch {
    height: auto;
    padding: $scale12;
    img {
      height: auto;
      max-height: 100%;
      vertical-align: top;
      border-radius: $border-width2;
    }
  }
  &__Contents {
    min-height: $contents-min-height;
  }
  &__Title {
    margin-bottom: $scale8;
    color: $text;
  }
  &__Description {
    margin-bottom: $scale12;
  }
  &__Meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $scale8;
    color: $text;
  }
  &__Date {
    display: flex;
    flex-wrap: nowrap;
    padding: $scale4;
    padding-right: 0;
    margin-left: $scale-minus6;
  }
  &__DatePublished {
    margin-right: $scale12;
  }
  &__Tags {
    display: flex;
    padding: $scale4;
    padding-left: 0;
    margin-left: $scale-minus4;
  }
  &__Tag {
    &:not(:last-child) {
      margin-right: $scale8;
    }
  }
}
</style>
