import { Ref, ref, unref, computed, watch, onMounted, onUnmounted } from 'vue';

import { formatGoogleFontQuery, arrayToEnumObject, keyEnumObject, KeyTypeOf, ValueTypeOf } from '@/utils/util';

/**
 * フォント種別の定数
 */
export const FONT_TYPE_MAP = arrayToEnumObject(['Advent Pro', 'Vibur']);

/**
 * フォント種別の型
 */
export type FontType = ValueTypeOf<typeof FONT_TYPE_MAP>;

/**
 * フォント太さマップ
 */
export const FONT_WEIGHT_MAP = {
  weight400: '400',
  weight600: '600',
} as const;

/**
 * フォント太さマップ キーの定数
 */
export const FONT_WEIGHT_TYPE = keyEnumObject(FONT_WEIGHT_MAP);

/**
 * フォント太さマップ キーの型
 */
export type FontWeightKeyType = KeyTypeOf<typeof FONT_WEIGHT_MAP>;

/**
 * フォント太さマップ 値の型
 */
export type FontWeightValueType = ValueTypeOf<typeof FONT_WEIGHT_MAP>;

/**
 * ## WebFontタグ埋め込み
 *
 * ライフサイクル期間に特定のWebフォントをインポートするためのlinkタグを埋め込む。
 * ライフサイクル期間に限定したCSSの適用には別途composablesで実装している`useCSS`を使うこと。
 * 渡す文字列はサニタイズされず、そのまま処理されるので要注意。
 *
 * @param webFontName Webフォント名
 *
 * @example
 * ```
 * <script setup lang="ts">
 * import useWebFont from '@/composables/useWebFont'
 * const webFont = ref("Advent Pro")
 *
 * // 適用したいWebフォント名（半角スペース区切り）を指定する。
 * // 例： Advent Pro
 * useWebFont(webFont)
 * </script>
 *
 * // 以下のタグがheadに埋め込まれる。
 * // <link href='http://fonts.googleapis.com/css?family=Advent+Pro' rel='stylesheet' type='text/css'>
 * ```
 */
export default (webFontName: Ref<string> | string, weight?: Ref<string> | string) => {
  const linkElement = ref();
  const wght = ref('');
  const hrefText = computed(
    () => `http://fonts.googleapis.com/css?family=${formatGoogleFontQuery(unref(webFontName))}${unref(wght)}`,
  );

  onMounted(() => {
    if (weight && unref(weight)) {
      wght.value = `:wght@${unref(weight)}`;
    }
    linkElement.value = document.createElement('link');
    linkElement.value.href = unref(hrefText);
    linkElement.value.rel = 'stylesheet';
    linkElement.value.type = 'text/css';
    document.head.append(linkElement.value);
  });

  watch(
    [hrefText],
    ([text]) => {
      if (linkElement.value) {
        linkElement.value.href = text;
      }
    },
    { immediate: true },
  );

  onUnmounted(() => {
    document.head.removeChild(linkElement.value);
  });
};
