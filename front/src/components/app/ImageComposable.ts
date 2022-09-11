/**
 * 文字列がassets配下の画像パスかどうかを判定
 *
 * @param str 文字列
 * @returns 判定結果
 */
export const isAssetImageSrcPath = (str: string) => /^(article|item|link|shared)\/.*$/.test(str);
