import { Ref } from 'vue';
import { useLazyFetch } from '#app';
import { domParseFromString, getAttributeContent, getAttributeProperty, unescapedHtml } from '@/utils/util';

export const OG_TITLE = 'og:title';
export const OG_TYPE = 'og:type';
export const OG_DESCRIPTION = 'og:description';
export const OG_IMAGE = 'og:image';

/**
 * OGP情報の型
 */
export type OgpType = {
  title?: string;
  type?: string;
  description?: string;
  imageUrl?: string;
  emojiIcon?: string;
};

/**
 * ## OGP情報の取得
 *
 * 引数のリンクからOGP情報をマウント時に非同期で取得する。
 * 取得できない項目はundefinedが設定される。
 *
 * @returns OGP情報を格納するオブジェクト
 */
export default (link: string | Ref<string>) => {
  const ogp = useState<OgpType>(unref(link), () => ({
    title: undefined,
    type: undefined,
    description: undefined,
    imageUrl: undefined,
    emojiIcon: undefined,
  }));

  const { data } = useLazyFetch(unref(link), { key: unref(link) });

  if (data.value) {
    const doc = domParseFromString(data.value as string);
    const headEls = doc.getElementsByTagName('head')[0].childNodes;

    Array.from(headEls).map((el: Element) => {
      const propertyName = getAttributeProperty(el);

      if (!propertyName) return el;

      switch (propertyName) {
        case OG_TITLE:
          ogp.value.title = unescapedHtml(getAttributeContent(el));
          break;
        case OG_TYPE:
          ogp.value.type = unescapedHtml(getAttributeContent(el));
          break;
        case OG_DESCRIPTION:
          ogp.value.description = unescapedHtml(getAttributeContent(el));
          break;
        case OG_IMAGE:
          ogp.value.imageUrl = unescapedHtml(getAttributeContent(el));
          break;
        default:
      }

      return el;
    });

    // TODO: Hydration node mismatcを消すところから

    if (unref(link).includes('zenn.dev')) {
      // TODO: like検索未対応、追って別ライブラリに変える
      const emojiIconEl = doc.getElementsByClassName('Emoji_nativeEmoji__')[0];
      if (emojiIconEl) {
        // Zennの絵文字があれば取得
        ogp.value.emojiIcon = emojiIconEl.nodeValue;
      }
    }
  }

  return ogp;
};
