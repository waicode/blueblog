import { domParseFromString, getAttributeContent, getAttributeProperty } from '@/utils/util';

export const OG_TITLE = 'og:title';
export const OG_TYPE = 'og:type';
export const OG_DESCRIPTION = 'og:description';
export const OG_IMAGE = 'og:image';

/**
 * ## OGP情報の取得
 *
 * 引数のリンクからOGP情報をマウント時に非同期で取得する。
 * 取得できない項目はundefinedが設定される。
 *
 * open-graph-scraperの仕様については以下を参照。
 *
 * https://github.com/jshemas/openGraphScraper
 *
 * @returns OGP情報を格納するオブジェクト
 */
export default (link: string) => {
  console.log(link);

  const ogp = reactive({
    title: undefined,
    type: undefined,
    description: undefined,
    imageUrl: undefined,
  });

  onMounted(async () => {
    // TODO: Storybookで落ちないようにuseFetchをモックする
    const { data } = await useFetch(() => link);
    const doc = domParseFromString(data.value as string);
    const headEls = doc.head.children;

    Array.from(headEls).map((el: Element) => {
      const propertyName = getAttributeProperty(el);

      if (!propertyName) return el;

      switch (propertyName) {
        case OG_TITLE:
          ogp.title = getAttributeContent(el);
          break;
        case OG_TYPE:
          ogp.type = getAttributeContent(el);
          break;
        case OG_DESCRIPTION:
          ogp.description = getAttributeContent(el);
          break;
        case OG_IMAGE:
          ogp.imageUrl = getAttributeContent(el);
          break;
        default:
      }

      return el;
    });
  });

  return ogp;
};
