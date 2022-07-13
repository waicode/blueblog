<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Article } from '@/store/article';
import usePagenate from '@/composables/usePagenate';

interface PagenationPropType {
  /**
   * 記事一覧
   *
   * 記事情報のリスト。
   * ページング処理で分割されて表示される。
   */
  articles: Article[];

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

const props = withDefaults(defineProps<PagenationPropType>(), {
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
const currentPage = ref(firstPageCount);
const { articles, pageSize } = toRefs(props);

const lastPageCount = computed(() => Math.ceil(articles.value.length / pageSize.value));

const pageNumbers = computed(() => {
  const maxWidth = props.max < 7 ? 7 : props.max;
  if (unref(lastPageCount) <= maxWidth) {
    // 1, 2, 3, 4, 5, 6, 7
    return [...Array(unref(lastPageCount)).keys()].map((i) => i + 1);
  }
  if (currentPage.value < Math.ceil(maxWidth / 2)) {
    // 1, 2, 3, 4, 5, ..., 20
    return [...Array(maxWidth - 2).keys()].map((val) => val + 1).concat([undefined, unref(lastPageCount)]);
  }
  if (currentPage.value > unref(lastPageCount) - Math.ceil(maxWidth / 2)) {
    // 1, ..., 16, 17, 18, 19, 20
    return [firstPageCount, undefined].concat(
      [...Array(maxWidth - 2).keys()].map((val, _, array) => unref(lastPageCount) - array.length + val + 1),
    );
  }
  // 1, ..., 9, 10, 11, ..., 20
  return [firstPageCount, undefined]
    .concat(
      [...Array(maxWidth - 4).keys()].map((val, _, array) => currentPage.value - Math.ceil(array.length / 2) + val + 1),
    )
    .concat([undefined, unref(lastPageCount)]);
});

const changeNumber = (pageNumber: number) => {
  currentPage.value = pageNumber;
};

const goPreviousPage = () => {
  if (currentPage.value > 1) currentPage.value = currentPage.value - 1;
};

const goNextPage = () => {
  if (currentPage.value < unref(lastPageCount)) currentPage.value = currentPage.value + 1;
};

watch(currentPage, () => {
  const targetPosts = usePagenate(articles, pageSize, currentPage);
  emit('change-page', targetPosts);
});
</script>

<template>
  <div class="AppPagenation">
    <nav class="pagination is-large" role="navigation" aria-label="pagination">
      <a
        :disabled="currentPage === firstPageCount ? `disabled` : undefined"
        class="pagination-previous"
        @click="goPreviousPage"
        ><Icon icon="fa6-solid:chevron-left"
      /></a>
      <a :disabled="currentPage === lastPageCount ? `disabled` : undefined" class="pagination-next" @click="goNextPage"
        ><Icon icon="fa6-solid:chevron-right"
      /></a>
      <ul class="pagination-list">
        <li v-for="(pageNumber, index) in pageNumbers" :key="index">
          <a
            v-if="pageNumber && currentPage === pageNumber"
            class="pagination-link is-current"
            :aria-label="`Page ${pageNumber}`"
            aria-current="page"
            >{{ pageNumber }}</a
          >
          <a
            v-else-if="pageNumber && currentPage !== pageNumber"
            class="pagination-link"
            :aria-label="`Goto page ${pageNumber}}`"
            @click="changeNumber(pageNumber)"
            >{{ pageNumber }}</a
          >
          <span v-else class="pagination-ellipsis">&hellip;</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.AppPagenation {
  .pagination-link {
    &.is-current {
      pointer-events: none;
    }
  }
}
</style>
