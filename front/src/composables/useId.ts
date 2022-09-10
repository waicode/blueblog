import { useState } from '#app';
import { randomString } from '@/utils/util';

/**
 * 貸出済のランダム文字列のSet
 *
 * 重複使用をチェックする際に利用する。
 */
const lendStrings = new Set<string>();

/**
 * ## ID文字列の生成
 *
 * アプリケーション内で重複しないランダムな文字列を提供する。
 * コンポーネントがunmountされるまで重複されないことを保証する。
 * useStateを使い、サーバサイドで生成したIDをクライアントでも利用する。
 *
 * @returns `a-z,A-Z,0-9`の範囲で構成されたランダム文字列
 */
export default (key: string) => {
  let randomId = randomString();
  while (lendStrings.has(randomId)) {
    randomId = randomString();
  }
  lendStrings.add(randomId);
  const id = useState<string>(key, () => randomId);
  return id;
};
