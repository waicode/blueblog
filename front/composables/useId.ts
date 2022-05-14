import { onUnmounted } from "vue";
import { randomString } from "../utils/util";

/**
 * 貸出済のランダム文字列のSet。
 * 重複使用をチェックする際に利用する。
 */
const lendStrings = new Set<string>();

/**
 * ## ID文字列の生成
 *
 * アプリケーション内で重複しないランダムな文字列を提供する。
 * コンポーネントがunmountされるまで重複されないことを保証する。
 *
 * @returns `a-z,A-Z,0-9`の範囲で構成されたランダム文字列
 */
export default () => {
  let id = randomString();
  while (lendStrings.has(id)) {
    id = randomString();
  }
  lendStrings.add(id);
  onUnmounted(() => {
    lendStrings.delete(id);
  });
  return id;
};
