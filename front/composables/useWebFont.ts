import { computed, watch, onMounted, onUnmounted } from "vue";

/**
 * ## WebFontタグ埋め込み
 *
 * ライフサイクル期間に特定のWebフォントをインポートするためのlinkタグを埋め込む。
 * ライフサイクル期間に限定したCSSの適用には別途composablesで実装している`useCSS`を使うこと。
 * 渡す文字列はサニタイズされず、そのまま処理されるので要注意。
 *
 * @param hrefFunc href文字列を返却する関数
 *
 * @example
 * ```
 * <script setup lang="ts">
 * import useWebFont from '@/composables/useWebFont'
 *
 * // 適用したいWebフォントのhrefを関数で指定する。
 * useWebFont(() =>
 *   "http://fonts.googleapis.com/css?family=Henny+Penny|Nova+Script|Griffy|Shojumaru|Metal+Mania|Stalinist+One"
 * )
 * </script>
 *
 * // 以下のタグがheadに埋め込まれる。
 * // <link href='http://fonts.googleapis.com/css?family=Henny+Penny|Nova+Script|Griffy|Shojumaru|Metal+Mania|Stalinist+One' rel='stylesheet' type='text/css'>
 * ```
 */
export default (hrefFunc: () => string) => {
  const href = computed(hrefFunc);
  const linkElement = ref();

  onMounted(() => {
    linkElement.value = document.createElement("link");
    linkElement.value.rel = "stylesheet";
    linkElement.value.type = "text/css";
    linkElement.value.href = href;
    document.head.append(linkElement.value);
  });

  watch(
    [href],
    ([text]) => {
      if (linkElement.value) {
        linkElement.value.href = text;
      }
    },
    { immediate: true }
  );

  onUnmounted(() => {
    document.head.removeChild(linkElement.value);
  });
};
