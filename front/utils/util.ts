import { UnionToIntersection, ScreamingSnakeCase } from 'type-fest';
import { upperCase } from 'upper-case';
import { snakeCase } from 'change-case';
import { format } from 'date-fns';
import DomParser from 'dom-parser';

type UnionToObjectUnion<X extends string> = X extends string ? { [key in ScreamingSnakeCase<X>]: X } : never;
type UnionToEnumObject<X extends string> = UnionToIntersection<UnionToObjectUnion<X>>;

/**
 * 入力テキストを大文字スネークケースに変換
 *
 * キャメルケース・パスカルケース・スネークケースに対応。
 *
 * @param value 変換したいテキスト
 * @returns 大文字スネークケースに変換された文字列
 *
 * @example
 * ```
 * upperSnakeCase('myTestString' === 'MY_TEST_STRING') // true
 * upperSnakeCase('MyTestString' === 'MY_TEST_STRING') // true
 * upperSnakeCase('my_test_string' === 'MY_TEST_STRING') // true
 *
 * ```
 */
export const upperSnakeCase = <T extends string>(value: T): ScreamingSnakeCase<T> =>
  upperCase(snakeCase(value)) as ScreamingSnakeCase<T>;

/**
 * 入力テキストを`__`区切りの大文字スネークケースに変換
 *
 * キャメルケース・パスカルケース・スネークケースに対応。
 *
 * @param value 変換したいテキスト
 * @returns 大文字スネークケースに変換された文字列
 *
 * @example
 * ```
 * upperSnakeDoubleCase('myTestString' === 'MY__TEST__STRING') // true
 * upperSnakeDoubleCase('MyTestString' === 'MY__TEST__STRING') // true
 * upperSnakeDoubleCase('My Test String' === 'MY__TEST__STRING') // true
 * upperSnakeDoubleCase('my_test_string' === 'MY__TEST__STRING') // true
 *
 * ```
 */
export const upperSnakeDoubleCase = <T extends string>(value: T) => upperCase(snakeCase(value, { delimiter: '__' }));

/**
 * 指定オブジェクトのKeyの型
 *
 * オブジェクトの中のvalueに、さらにオブジェクトが内包されている場合は使えないので注意。
 * 代わりに`keyEnumObject(object)`と`ValueTypeOf<T>`を組み合わせて型情報をつくること。
 */
export type KeyTypeOf<T> = keyof T;

/**
 * 指定オブジェクトのValueの型
 */
export type ValueTypeOf<T> = T[keyof T];

/**
 * stringキーを持つ定数オブジェクトからキー情報の定数オブジェクトを生成
 *
 * @param arg stringのキーを持つ定数オブジェクト
 * @returns オブジェクトのキーから生成された定数オブジェクト
 * @example
 * ```
 * const ALERT_INFO_MAP = {
 *   error: { icon: mdiAlertCircle },
 *   warning: { icon: mdiAlert },
 * } as const
 *
 * const ALERT_TYPE_MAP = keyEnumObject(ALERT_INFO_MAP)
 *
 * // このとき、以下のように出力される
 * // ALERT_TYPE_MAP = {
 * //   ERROR: 'error',
 * //   WARNING: 'warning'
 * // }
 * ``` */
export const keyEnumObject = <T extends Record<string, unknown>>(
  arg: Readonly<T>,
): keyof T extends string ? UnionToEnumObject<keyof T> : never =>
  Object.fromEntries(Object.keys(arg).map((key) => [upperSnakeCase(key), key])) as unknown as keyof T extends string
    ? UnionToEnumObject<keyof T>
    : never;

/**
 * 文字配列から定数オブジェクトを生成
 *
 * @param args stringの配列
 * @returns 文字配列から生成した定数オブジェクト
 *
 * @example
 * ```
 * const ALERT_TYPE_MAP = arrayToEnumObject(['error', 'warning'])
 *
 * // このとき、以下のように出力される
 * // ALERT_TYPE_MAP = {
 * //   ERROR: 'error',
 * //   WARNING: 'warning'
 * // }
 *
 * // 半角スペースを含む場合は`ScreamingSnakeCase`の仕様に合わせて以下のように出力される
 * // LOGO_FONT_TYPE_MAP = {
 * //   ADVENT__PRO: '"Advent Pro"',
 * // }
 *```
 */
export const arrayToEnumObject = <T extends string>(args: Readonly<T[]>): UnionToEnumObject<T> =>
  args.reduce(
    (draft, value) => ({
      ...draft,
      [value.match(/ /g) ? upperSnakeDoubleCase(value) : upperSnakeCase(value)]: value,
    }),
    {},
  ) as unknown as UnionToEnumObject<T>;

type StringKeyBemRecord = Record<string, string | number | boolean | undefined | null>;
type BemModifierRecord = string | StringKeyBemRecord | (string | StringKeyBemRecord)[];

/**
 * BEM Classの配列生成
 *
 * clsxのような記述でclassの記述を行うユーティリティ。
 *
 * https://www.npmjs.com/package/clsx
 *
 * @param groupAndElement - GroupName または GroupName__ElementName を文字列
 * @param modifiers modifierの配列
 * @returns BEM Classの配列
 *
 * @example
 * ```
 * const hasMod4 = true;
 * const hasMod5 = false;
 * const mod6Value = 'value6'
 *
 * const classNames = bemx(
 *   // 第1引数で GroupName または GroupName__ElementName
 *   'GroupName__ElementName',
 *   // 第2引数以下で付与するModifierを列挙
 *   'mod1', // 文字列を直接指定
 *   ['mod2', 'mod3'] // 文字列の配列
 *   { mod4: hasMod4 , mod5: hasMod5 }, // オブジェクト形式の場合valueのboolean値でつけ外し可能
 *   {
 *     mod6 : mod6Value, // valueがstringの場合は --key-value形式のmodifierの付与が可能
 *     mod7: 0, // 数値は文字列のように出力
 *     mod8: '', // 空文字とundefinedはmodifierがつかない（falseと同じ扱い）
 *     mod9: undefined
 *   }
 * )
 * // このとき、以下のように出力される
 * // classNames = [
 * //  'GroupName__ElementName',
 * //  'GroupName__ElementName--mod1',
 * //  'GroupName__ElementName--mod2',
 * //  'GroupName__ElementName--mod3',
 * //  'GroupName__ElementName--mod4',
 * //  'GroupName__ElementName--mod6-value6',
 * //  'GroupName__ElementName--mod7-0',
 * // ]
 * ```
 */
export const bemx = (groupAndElement: string, ...modifiers: BemModifierRecord[]): string[] => [
  groupAndElement,
  ...modifiers
    .flat()
    .flatMap((v1) => {
      if (typeof v1 === 'string') {
        return v1 ? [v1] : [];
      }
      if (typeof v1 === 'object') {
        return Object.entries(v1).flatMap(([k, v]) => {
          if ((typeof v === 'string' && v.length > 0) || typeof v === 'number') {
            return [`${k}-${v}`];
          }

          if (v) {
            return [`${k}`];
          }
          return [];
        });
      }
      return [v1];
    })
    .map((m) => `${groupAndElement}--${m}`),
];

const charCodeFromTo = (from: string, to: string): number[] => {
  const codeFrom = from.charCodeAt(0);
  const codeTo = to.charCodeAt(0);
  const length = Math.abs(codeTo - codeFrom) + 1;
  const delta = codeTo > codeFrom ? 1 : -1;
  return Array.from({ length }).map((_, index) => codeFrom + index * delta);
};

/**
 * 開始文字と終了文字を指定し、指定文字コード範囲の文字配列を返却
 *
 * @param from 開始文字
 * @param to 終了文字
 * @returns 指定文字コード範囲の文字配列
 */
export const charFromTo = (from: string, to: string): string[] =>
  charCodeFromTo(from, to).map((ch) => String.fromCharCode(ch));

const azAZ09 = [...charFromTo('a', 'z'), ...charFromTo('A', 'Z'), ...charFromTo('0', '9')];

/**
 * a-z,A-Z,0-9で構成されるランダム文字列を生成
 *
 * @param length 文字列長
 * @returns ランダム文字列
 */
export const randomString = (length = 10): string =>
  Array.from({ length })
    .map(() => azAZ09[Math.floor(Math.random() * azAZ09.length)])
    .join('');

/**
 * ファイルパスからファイル名を取得
 *
 * `/`で区切られた最後の要素の`.`より前のテキストを取得する。
 *
 * @param path ファイルパス
 * @returns ファイル名
 *
 * @example
 * ```
 * const path = 'abc/def/xyz/file1.jpg'
 * const fileName = getFileName(path) // file1
 * ```
 */
export const getFileName = (path: string) => path.split('/').reverse()[0].split('.')[0];

/**
 * URLからFQDN（完全修飾ドメイン名）を取得
 *
 * @params url ホスト名・ドメイン名を含むURL文字列
 * @returns ホスト名・ドメイン名が連結されたFQDN文字列
 *
 * @example
 * ```
 * const url = 'https://sample.archt.blue/aaa/bbb'
 * const fqdnName = getUrlFqdn(url) // sample.archt.blue
 * ```
 */
export const getUrlFqdn = (url: string) => url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];

/**
 * 文字列が数字かどうかを判定
 *
 * 0以上のゼロ埋めなし整数の場合は`true`を返却する。
 *
 * @param str 文字列
 * @returns 判定結果
 */
export const isNumerical = (str: string) => /^([1-9]\d*|0)$/.test(str);

/**
 * 文字列が半角英数字記号のみかどうかを判定
 *
 * 0以上のゼロ埋めなし整数の場合は`true`を返却する。
 *
 * @param str 文字列
 * @returns 判定結果
 */
export const isHalfWidthAlphanumericSymbols = (str: string) => /^[a-zA-Z0-9!-/:-@¥[-`{-~ ]*$/.test(str);

/**
 * 文字列が年月の形式（YYYYMM）かどうかを判定
 *
 * 正しい形式なら`true`を返却する。
 *
 * @param yyyy 年（ゼロ埋めあり4桁）の文字列
 * @param mm 月（ゼロ埋めあり2桁）の文字列
 * @returns 判定結果
 */
export const isYyyyMm = (yyyy: string, mm: string) => /^[0-9]{4}$/.test(yyyy) && /^(0[1-9]|1[0-2])$/.test(mm);

/**
 * GoogleFontのクエリ文字列用フォーマット
 *
 * クエリ文字列に指定するために` `（半角スペース）を`+`に置換する。
 * 連続する半角スペースは1つにまとめたうえで置換する。
 *
 * @param fontNameWithSpace 半角スペース区切りのWebフォント文字列
 * @returns プラス区切りのWebフォント文字列
 */
export const formatGoogleFontQuery = (fontNameWithSpace: string) =>
  fontNameWithSpace ? fontNameWithSpace.replace(/ +/g, ' ').replace(' ', '+') : '';

/**
 * ISO8601形式の日時文字列をyyyy-MM-dd形式の日付文字列に変換する
 *
 * `date-fns`の`format`で使えるパターン文字列は以下を参照
 *
 * https://date-fns.org/v2.28.0/docs/format
 *
 * @param datetimeStr ISO8601形式の日時文字列（例：2022-05-22T13:50:40+09:00）
 * @returns yyyy-MM-dd形式の日付文字列（例：2022-05-22）
 */
export const formatDate = (datetimeStr: string) => {
  return format(new Date(Date.parse(datetimeStr)), 'yyyy-MM-dd');
};

/**
 * タブレット画面幅以下であるかを判定するためのメディアクエリ
 *
 * @returns メディアクエリ
 */
export const tabletMediaQuery = () => '(max-width: 879px)';

/**
 * スマホ画面幅以下であるかを判定するためのメディアクエリ
 *
 * @returns メディアクエリ
 */
export const phoneMediaQuery = () => '(max-width: 579px)';

/**
 * 文字列をパースしてHTMLドキュメントに変換
 *
 * @param data HTMLドキュメントの文字列
 * @returns 構文解析されたHTMLドキュメント
 */
export const domParseFromString = (data: string) => {
  const parser = new DomParser();
  return parser.parseFromString(data);
};

/**
 * HTML要素のproperty属性値を取得
 *
 * @param el HTML要素
 * @returns property属性値
 */
export const getAttributeProperty = (el: Element) => el.getAttribute('property');

/**
 * HTML要素のcontent属性値を取得
 *
 * @param el HTML要素
 * @returns content属性値
 */
export const getAttributeContent = (el: Element) => el.getAttribute('content');
