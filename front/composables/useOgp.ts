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
    const el = new DOMParser().parseFromString(data.value as string, 'text/html');
    const headEls = el.head.children;

    Array.from(headEls).map((val) => {
      // property名を取得
      const pro = val.getAttribute('property');
      if (!pro) return val;

      // contentの値を取得してコンソールに出力
      console.log(pro, val.getAttribute('content'));

      if (pro === 'og:title') {
        ogp.title = val.getAttribute('content');
      }

      if (pro === 'og:type') {
        ogp.type = val.getAttribute('content');
      }

      if (pro === 'og:description') {
        ogp.description = val.getAttribute('content');
      }

      if (pro === 'og:image') {
        ogp.imageUrl = val.getAttribute('content');
      }
      return val;
    });
  });

  return ogp;
};
