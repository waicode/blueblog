import { Ref } from 'vue';
import { CheerioAPI } from 'cheerio';
import { useLazyFetch } from '#app';
import { domParseFromString } from '@/utils/util';

export const OG_TITLE = 'og:title';
export const OG_TYPE = 'og:type';
export const OG_DESCRIPTION = 'og:description';
export const OG_IMAGE = 'og:image';

const getMetaContent = ($: CheerioAPI, property: string) => $(`head meta[property="${property}"]`).attr('content');
const getZennEmoji = ($: CheerioAPI) => $('span[class^="Emoji_nativeEmoji__"]').text();

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
    const $ = domParseFromString(data.value as string);

    ogp.value.title = getMetaContent($, 'og:title');
    ogp.value.type = getMetaContent($, 'og:type');
    ogp.value.description = getMetaContent($, 'og:description');
    ogp.value.imageUrl = getMetaContent($, 'og:image');

    if (unref(link).includes('zenn.dev')) {
      const zennEmoji = getZennEmoji($);
      if (zennEmoji) {
        // Zennの絵文字があれば取得
        ogp.value.emojiIcon = zennEmoji;
      }
    }
  }

  return ogp;
};
