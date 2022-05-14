import { computed, watch, onMounted, onUnmounted } from "vue";

/**
 * ## CSSタグ埋め込み
 *
 * ライフサイクル期間に特定のスタイルを埋め込む。
 * たとえば`props`や`context`の値に応じてスタイルを出し分けることができる。
 * コンポーネントから使う際には`useId`と併用して一意のclass名を付与して使うこと。
 * 渡す文字列はサニタイズされず、そのまま処理されるので要注意。
 *
 * @param cssFunc CSS文字列を返却する関数
 *
 * @example
 * ```
 * <script setup lang="ts">
 * import useCss from '@/composables/useCss'
 * import useId from '@/composables/useId'
 *
 * interface PropType {
 *   color?: "white" | "gray" | "black";
 * }
 *
 * withDefaults(defineProps<PropType>(), {
 *   color: "white",
 * });
 *
 * // 1. インスタンス固有のIDを発行。
 * const id = useId();
 * // 2. BEMのようにコンポーネント名のclassをつくりidをmodifierとして使用。
 * const className = `MyComponent--${id}`
 * // 3. 適用したいCSS文字列を返却する関数を引数に指定。
 * useCss(() =>
 *   // 2のクラス名を埋め込むことでインスタンスのライフサイクルで一意となる。
 *   `.${className} .MyComponent__SomeElement {
 *     background-color: ${props.color};
 *   }`
 * )
 * </script>
 * ```
 */
export default (cssFunc: () => string) => {
  const style = computed(cssFunc);
  const styleElement = ref();

  onMounted(() => {
    styleElement.value = document.createElement("style");
    document.head.append(styleElement.value);
  });

  watch(
    [style],
    ([text]) => {
      if (styleElement.value) {
        styleElement.value.innerHTML = text;
      }
    },
    { immediate: true }
  );

  onUnmounted(() => {
    document.head.removeChild(styleElement.value);
  });
};
