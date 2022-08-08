<script setup lang="ts">
import { Icon } from '@iconify/vue';
import usePagenate from '@/composables/usePagenate';

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

const { targetArticles, targetPage, lastPageCount, setPage, goPreviousPage, goNextPage } = usePagenate<unknown>(
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
  <div class="AppPagination">
    <nav class="pagination is-large" role="navigation" aria-label="pagination">
      <a
        :disabled="targetPage === firstPageCount ? `disabled` : undefined"
        class="pagination-previous"
        @click="goPreviousPage()"
        ><Icon icon="fa6-solid:chevron-left"
      /></a>
      <a :disabled="targetPage === lastPageCount ? `disabled` : undefined" class="pagination-next" @click="goNextPage()"
        ><Icon icon="fa6-solid:chevron-right"
      /></a>
      <ul class="pagination-list">
        <li v-for="(pageNumber, index) in pageNumbers" :key="index">
          <a
            v-if="pageNumber && targetPage === pageNumber"
            class="pagination-link is-current"
            :aria-label="`Page ${pageNumber}`"
            aria-current="page"
            >{{ pageNumber }}</a
          >
          <a
            v-else-if="pageNumber && targetPage !== pageNumber"
            class="pagination-link"
            :aria-label="`Goto page ${pageNumber}}`"
            @click="setPage(pageNumber)"
            >{{ pageNumber }}</a
          >
          <span v-else class="pagination-ellipsis">&hellip;</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.AppPagination {
  // TODO: Pagination CSSのBEM化と変数化

  /* stylelint-disable selector-class-pattern */

  .pagination {
    &.is-large {
      font-size: 1.5rem;
    }
  }

  .pagination,
  .pagination-list {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .pagination-list {
    flex-wrap: wrap;

    li {
      list-style: none;
    }
  }

  .pagination-previous,
  .pagination-next,
  .pagination-link,
  .pagination-ellipsis {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;
    padding-top: calc(0.5em - 1px);
    padding-bottom: calc(0.5em - 1px);
    padding-left: 0.5em;
    padding-right: 0.5em;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    height: 2.5em;
    line-height: 1.5;
    font-size: 1em;
    text-align: center;
    vertical-align: top;
    user-select: none;

    &:focus,
    &:active {
      outline: none;
    }

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }

  .pagination-previous,
  .pagination-next,
  .pagination-link {
    border-color: #dbdbdb;
    color: #363636;
    min-width: 2.5em;

    &:hover {
      border-color: #b5b5b5;
      color: #363636;
    }

    &:focus {
      border-color: #485fc7;
    }

    &:active {
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
    }

    &[disabled] {
      background-color: #dbdbdb;
      border-color: #dbdbdb;
      box-shadow: none;
      color: #7a7a7a;
      opacity: 0.5;
    }
  }

  .pagination-previous,
  .pagination-next {
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
  }

  .pagination-link {
    &.is-current {
      background-color: #485fc7;
      border-color: #485fc7;
      color: #fff;
      pointer-events: none;
    }
  }

  .pagination-ellipsis {
    color: #b5b5b5;
    pointer-events: none;
  }

  @include desktopOnly {
    .pagination-list {
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: flex-start;
      order: 1;
    }
    .pagination-previous,
    .pagination-next,
    .pagination-link,
    .pagination-ellipsis {
      margin-bottom: 0;
      margin-top: 0;
    }
    .pagination-previous {
      order: 2;
    }
    .pagination-next {
      order: 3;
    }
    .pagination {
      justify-content: space-between;
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  @include tablet {
    .pagination {
      flex-wrap: wrap;
    }

    .pagination-previous,
    .pagination-next {
      flex-grow: 1;
      flex-shrink: 1;
    }

    .pagination-list {
      li {
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
  }

  /* stylelint-enable selector-class-pattern */
}
</style>
