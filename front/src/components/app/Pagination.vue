<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';
import usePaginate from '@/composables/usePaginate';

interface PaginationPropType {
  /**
   * 記事一覧
   *
   * 記事情報のリスト。
   * ページング処理で分割されて表示される。
   */
  articles: Array<unknown>;

  /**
   * ページサイズ
   *
   * 1ページあたりの表示記事数。
   * デフォルトは5件。
   */
  pageSize?: number;

  /**
   * ページ表示幅の最大値
   *
   * `…`を含めたページ表示幅の最大値。
   * デフォルトは7ページ分の幅まで表示。
   * 7より小さい値が設定された場合は7に補正する。
   */
  max?: number;
}

const props = withDefaults(defineProps<PaginationPropType>(), {
  pageSize: 5,
  max: 7,
});

const emit = defineEmits([
  /**
   * ページ変更
   *
   * ページが変わったときに呼ばれる。
   * 該当ページのページサイズ分の記事一覧を親コンポーネントへ渡す。
   */
  'change-page',
]);

const firstPageCount = 1;
const { articles, pageSize } = toRefs(props);

const { targetArticles, targetPage, lastPageCount, setPage, goPreviousPage, goNextPage } = usePaginate<unknown>(
  articles,
  pageSize,
  firstPageCount,
);

watch(targetPage, () => {
  // ページが切り替わったら表示対象の記事一覧を返却
  emit('change-page', targetArticles);
});

const pageNumbers = computed(() => {
  const maxWidth = props.max < 7 ? 7 : props.max;
  if (unref(lastPageCount) <= maxWidth) {
    // 1, 2, 3, 4, 5, 6, 7
    return [...Array(unref(lastPageCount)).keys()].map((i) => i + 1);
  }
  if (targetPage.value < Math.ceil(maxWidth / 2)) {
    // 1, 2, 3, 4, 5, ..., 20
    return [...Array(maxWidth - 2).keys()].map((val) => val + 1).concat([undefined, unref(lastPageCount)]);
  }
  if (targetPage.value > unref(lastPageCount) - Math.ceil(maxWidth / 2)) {
    // 1, ..., 16, 17, 18, 19, 20
    return [firstPageCount, undefined].concat(
      [...Array(maxWidth - 2).keys()].map((val, _, array) => unref(lastPageCount) - array.length + val + 1),
    );
  }
  // 1, ..., 9, 10, 11, ..., 20
  return [firstPageCount, undefined]
    .concat(
      [...Array(maxWidth - 4).keys()].map((val, _, array) => targetPage.value - Math.ceil(array.length / 2) + val + 1),
    )
    .concat([undefined, unref(lastPageCount)]);
});
</script>

<template>
  <nav class="AppPagination" role="navigation" aria-label="pagination">
    <AppLink
      :disabled="targetPage === firstPageCount ? `disabled` : undefined"
      class="AppPagination__Previous"
      :tabindex="targetPage === firstPageCount ? undefined : `0`"
      @click="goPreviousPage()"
      ><AppText :type="TEXT_SIZE.PAGINATION1" :color="TEXT_COLOR.BLUE_BLACK"
        ><Icon icon="fa6-solid:chevron-left" /></AppText
    ></AppLink>
    <AppLink
      :disabled="targetPage === lastPageCount ? `disabled` : undefined"
      class="AppPagination__Next"
      :tabindex="targetPage === lastPageCount ? undefined : `0`"
      @click="goNextPage()"
      ><AppText :type="TEXT_SIZE.PAGINATION1" :color="TEXT_COLOR.BLUE_BLACK"
        ><Icon icon="fa6-solid:chevron-right" /></AppText
    ></AppLink>
    <ul class="AppPagination__List">
      <li v-for="(pageNumber, index) in pageNumbers" :key="index">
        <AppLink
          v-if="pageNumber && targetPage === pageNumber"
          class="AppPagination__Link AppPagination__Link--isCurrent"
          :aria-label="`${pageNumber}ページ`"
          aria-current="page"
          ><AppText :type="TEXT_SIZE.PAGINATION1" :color="TEXT_COLOR.WHITE">{{ pageNumber }}</AppText></AppLink
        >
        <AppLink
          v-else-if="pageNumber && targetPage !== pageNumber"
          class="AppPagination__Link"
          :aria-label="`${pageNumber}ページへ`"
          tabindex="0"
          @click="setPage(pageNumber)"
          ><AppText :type="TEXT_SIZE.PAGINATION1" :color="TEXT_COLOR.BLUE_BLACK">{{ pageNumber }}</AppText></AppLink
        >
        <span v-else class="AppPagination__Ellipsis"
          ><AppText :type="TEXT_SIZE.PAGINATION1" :color="TEXT_COLOR.LIGHT_GRAY">&hellip;</AppText></span
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
$pagination-height: 60px;
$pagination-link-min-width: $pagination-height;
$pagination-border-color: $gray-db-color;
$pagination-color: $black-color;
$pagination-hover-border-color: $gray-b5-color;
$pagination-link-current-bg-color: $main-blue-color;
$pagination-link-current-border-color: $pagination-link-current-bg-color;
$pagination-disabled-bg-color: $gray-db-color;
$pagination-disabled-border-color: $pagination-disabled-bg-color;

.AppPagination {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @include desktop-only {
    justify-content: space-between;
    margin-bottom: 0;
    margin-top: 0;
  }

  @include tablet {
    flex-wrap: wrap;
  }

  &__List {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    @include desktop-only {
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: flex-start;
      order: 1;
    }

    li {
      list-style: none;

      @include tablet {
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
  }

  &__Previous,
  &__Next,
  &__Link,
  &__Ellipsis {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: $scale6;
    padding: $scale12;
    border: $border-width1 solid transparent;
    border-radius: $border-radius4;
    box-shadow: none;
    height: $pagination-height;
    text-align: center;
    vertical-align: top;
    user-select: none;

    @include desktop-only {
      margin-bottom: 0;
      margin-top: 0;
    }

    &[disabled] {
      pointer-events: none;
    }
  }

  &__Previous,
  &__Next,
  &__Link {
    border-color: $pagination-border-color;
    color: $pagination-color;
    min-width: $pagination-link-min-width;

    &:hover {
      border-color: $pagination-hover-border-color;
      color: $pagination-color;
    }

    &:active {
      box-shadow: inset 0 1px 2px $gray-010-alpha-020-color;
    }

    &[disabled] {
      background-color: $pagination-disabled-bg-color;
      border-color: $pagination-disabled-border-color;
      box-shadow: none;
      opacity: $opacity-rate50;
    }
  }

  &__Previous,
  &__Next {
    padding-left: $scale20;
    padding-right: $scale20;
    white-space: nowrap;

    @include tablet {
      flex-grow: 1;
      flex-shrink: 1;
    }
  }

  &__Previous {
    @include desktop-only {
      order: 2;
    }
  }

  &__Next {
    @include desktop-only {
      order: 3;
    }
  }

  &__Link {
    &--isCurrent {
      background-color: $pagination-link-current-bg-color;
      border-color: $pagination-link-current-border-color;
      pointer-events: none;
    }
  }

  &__Ellipsis {
    pointer-events: none;
  }
}
</style>
