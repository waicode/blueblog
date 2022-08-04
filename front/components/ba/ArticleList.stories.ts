import BaArticleList from '@/components/ba/ArticleList.vue';

export default {
  title: '@components/ba/ArticleList',
  component: BaArticleList,
  args: {
    articles: [
      {
        title: 'タイトルを書きます：最大文字数は40文字程度を目安にするのは2行以内にはおさめたいから',
        description:
          'キャプションを書きます。だいたい120文字くらいを目安に3行でおさまるボリュームで。ここが長すぎると一覧の高さが合わなくなってしまいます。キャプションは実際の本文の冒頭から取ってくるので、リード文を意識して書きます。',
        icon: 'tabler:calendar-event',
        category: 'フロントエンド',
        tags: ['フロントエンド', 'サーバレス'],
        createdAt: '2017-05-06T18:36:20.000Z',
        updatedAt: '2021-07-25T09:49:35.000Z',
      },
      {
        title: 'タイトルを書きます：最大文字数は40文字程度を目安にするのは2行以内にはおさめたいから',
        description:
          'キャプションを書きます。だいたい120文字くらいを目安に3行でおさまるボリュームで。ここが長すぎると一覧の高さが合わなくなってしまいます。キャプションは実際の本文の冒頭から取ってくるので、リード文を意識して書きます。',
        icon: 'tabler:calendar-event',
        category: 'フロントエンド',
        tags: ['フロントエンド', 'サーバレス'],
        createdAt: '2017-05-06T18:36:20.000Z',
        updatedAt: '2021-07-25T09:49:35.000Z',
      },
    ],
  },
  argTypes: {
    articles: {
      control: { type: 'object' },
    },
  },
};

const Template = (args) => ({
  components: { BaArticleList },
  setup() {
    return { args };
  },
  template: `
    <BaArticleList v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
