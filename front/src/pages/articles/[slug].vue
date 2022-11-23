<script setup lang="ts">
import { useArticlesSlugPage } from '@/composables/pages/articles/slug';

const route = useRoute();
const slug = route.params.slug as string;

// 記事を取得
const article = useArticlesSlugPage(slug);

const runtimeConfig = useRuntimeConfig();
const pageUrl = computed(() => `${runtimeConfig.public.baseUrl}${unref(article)._path}`);
const title = computed(() => unref(article).title ?? '');
const description = computed(() => unref(article).description);

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

useHead(useMetaDescription(title, description));
</script>

<template>
  <div class="BaPageArticlesSlug">
    <transition name="fade">
      <AppShareButtonsMenu
        v-show="isButtonsMenuActive"
        class="BaPageArticlesSlug__ShareButtonsMenu"
        :page-url="pageUrl"
        :title="title ? title : ''"
      />
    </transition>
    <BaArticleTop class="BaPageArticlesSlug__ArticleTop" :article="article" />
    <ContentDoc class="BaPageArticlesSlug__Content" />
    <AppShareButtons class="BaPageArticlesSlug__ShareButtons" :page-url="pageUrl" :title="title ? title : ''" />
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
