import BaLayoutSub from '@/components/ba/layout/Sub.vue';

export default {
  title: '@components/ba/layout/Sub',
  BaLayoutSub,
};

const Template = (args) => ({
  components: { BaLayoutSub },
  setup() {
    return { args };
  },
  template: `<BaLayoutSub v-bind="args" />`,
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  useState: {
    value: [
      {
        title: 'コンポーネントのサンプル',
        description:
          'ブログ上でコンポーネントの実際の表示を確認するためのページです。記事ファイルに記述可能なコンポーネントはすべて載せています。',
        icon: 'tabler:components',
        category: 'フロントエンド',
        tags: ['フロントエンド'],
        createdAt: '2022-08-14T13:12:00.000+09:00',
      },
      {
        title: 'Markdownのブログ記事をVSCodeで効率よく書くための備忘録',
        description:
          '「VSCodeでいかに効率良くマークダウンの記事を書くか」はこのブログの生産性に大きく関わるので、Markdownファイル(.md)を快適に見る・書くためのTipsをまとめます。',
        icon: 'tabler:markdown',
        category: '開発環境',
        tags: ['開発環境'],
        createdAt: '2022-08-27T17:41:00+09:00',
      },
    ],
  },
};
