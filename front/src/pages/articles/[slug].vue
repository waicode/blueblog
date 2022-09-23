<script setup lang="ts">
import { Ref } from 'vue';
import { ArticleParsedContent } from '@/components/ba/ArticleComposable';
const route = useRoute();
const slug = route.params.slug as string;

// 記事を取得
const queryResult = await useAsyncData(`articles/${slug}`, () =>
  queryContent<ArticleParsedContent>('articles', slug).findOne(),
);
const article = queryResult.data as Ref<ArticleParsedContent>;

if (!article.value) {
  // 該当記事がなければ404ページへ飛ばす
  notFound();
}

const runtimeConfig = useRuntimeConfig();
const pageUrl = ref(`${runtimeConfig.public.baseUrl}${article.value._path}`);
const title = ref(article.value.title);

const isButtonsMenuActive = ref(true);

const leaveYPosition = 400;
const scrollDisplayControl = () => {
  isButtonsMenuActive.value = unref(computed(() => window.scrollY <= leaveYPosition));
};

onMounted(() => {
  window.addEventListener('scroll', scrollDisplayControl);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollDisplayControl);
});

useHead(useMetaDescription(article.value.title, article.value.description));
</script>

<template>
  <div class="BaPageArticlesSlug">
    <transition name="fade">
      <AppShareButtonsMenu
        v-show="isButtonsMenuActive"
        class="BaPageArticlesSlug__ShareButtonsMenu"
        :page-url="pageUrl"
        :title="title"
      />
    </transition>
    <BaArticleTop class="BaPageArticlesSlug__ArticleTop" :article="article" />
    <ContentDoc class="BaPageArticlesSlug__Content" />
    <AppShareButtons class="BaPageArticlesSlug__ShareButtons" :page-url="pageUrl" :title="title" />
  </div>
</template>

<style lang="scss">
$share-button-menu-top: 232px;
$share-button-menu-transform-x: -108px;

.BaPageArticlesSlug {
  /* stylelint-disable */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0%;
  }
  /* stylelint-enable */

  &__ShareButtonsMenu {
    position: fixed;
    display: none;
    top: $share-button-menu-top;
    left: auto;
    transform: translateX($share-button-menu-transform-x);
    z-index: $z-index-10;
    @include desktop-only {
      display: block;
    }
  }

  // &__ArticleTop {
  // }

  &__Content {
    margin-bottom: $scale64;
  }

  &__ShareButtons {
    margin-bottom: $scale64;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
