import { Meta, StoryFn } from '@storybook/vue3';
import BaLinkCard from '@/components/ba/LinkCard.vue';
import { LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardConst';

export default {
  title: '@components/ba/LinkCard',
  component: BaLinkCard,
  args: {
    type: LINK_CARD_TYPE_MAP.EXTERNAL,
    title: undefined,
    description: undefined,
    link: 'https://mujiota.com/1372/bulletproof-coffee/',
    imgFileName: undefined,
    aspMeasurementImgLink: undefined,
    article: undefined,
    articleSlug: undefined,
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: Object.values(LINK_CARD_TYPE_MAP),
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    link: {
      control: { type: 'text' },
    },
    imgFileName: {
      control: { type: 'text' },
    },
    aspMeasurementImgLink: {
      control: { type: 'text' },
    },
    article: {
      control: { type: 'object' },
    },
    articleSlug: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof BaLinkCard>;

const Template: StoryFn<typeof BaLinkCard> = (args) => ({
  components: { BaLinkCard },
  setup() {
    return { args };
  },
  template: `<BaLinkCard v-bind="args" />`,
});

const ogpValue = {
  title: undefined,
  type: undefined,
  description: undefined,
  imageUrl: undefined,
  emojiIcon: undefined,
};

const randamIdSample = 1;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  useState: {
    value: ogpValue,
  },
  useAsyncArticlesSlug: {
    data: {},
  },
  useLazyFetch: {
    data: `
    <head>
      <meta property="og:title" content="完全無欠コーヒーを5年以上飲み続けて確信した効果とおすすめの作り方">
      <meta property="og:description" content="朝は大の苦手だったのに、完全無欠コーヒーを飲むようになってからは午前中から集中して仕事に取り組めるようになりました。完全無欠コーヒーの効果や作り方を、長年の経験にもとづいて誰よりも詳しく書いたつもりです。">
      <meta property="og:image" content="https://mujiota.com/_nuxt/img/bulletproof-coffee.19bb6f2.jpg">
    </head>
    `,
  },
};

export const External = Template.bind({});
External.args = {};
External.parameters = {
  useState: {
    value: ogpValue,
  },
  useLazyFetch: {
    data: `
    <head>
      <meta property="og:title" content="完全無欠コーヒーを5年以上飲み続けて確信した効果とおすすめの作り方">
      <meta property="og:description" content="朝は大の苦手だったのに、完全無欠コーヒーを飲むようになってからは午前中から集中して仕事に取り組めるようになりました。完全無欠コーヒーの効果や作り方を、長年の経験にもとづいて誰よりも詳しく書いたつもりです。">
      <meta property="og:image" content="https://mujiota.com/_nuxt/img/bulletproof-coffee.19bb6f2.jpg">
    </head>
    `,
  },
};

export const RelatedArticle = Template.bind({});
RelatedArticle.args = {
  type: LINK_CARD_TYPE_MAP.RELATED,
  article: {
    _id: 123,
    _path: 'articles/storybook123',
    title: 'タイトルを書きます：最大文字数は40文字程度を目安にするのは2行以内にはおさめたいから',
    description:
      'キャプションを書きます。だいたい120文字くらいを目安に3行でおさまるボリュームで。ここが長すぎると一覧の高さが合わなくなってしまいます。キャプションは実際の本文の冒頭から取ってくるので、リード文を意識して書きます。',
    icon: 'tabler:calendar-event',
    category: 'フロントエンド',
    tags: ['フロントエンド', 'サーバレス'],
    createdAt: '2017-05-06T18:36:20.000Z',
    updatedAt: '2021-07-25T09:49:35.000Z',
  },
};
RelatedArticle.parameters = {
  useState: {
    value: randamIdSample,
  },
  useAsyncArticlesSlug: {
    data: {},
  },
  useLazyFetch: {
    data: '',
  },
};

export const RelatedArticleSlug = Template.bind({});
RelatedArticleSlug.args = {
  type: LINK_CARD_TYPE_MAP.RELATED,
  articleSlug: 'storybook123',
};
RelatedArticleSlug.parameters = {
  useState: {
    value: randamIdSample,
  },
  useAsyncArticlesSlug: {
    data: {
      _id: 123,
      _path: 'articles/storybook123',
      title: 'タイトルを書きます：最大文字数は40文字程度を目安にするのは2行以内にはおさめたいから',
      description:
        'キャプションを書きます。だいたい120文字くらいを目安に3行でおさまるボリュームで。ここが長すぎると一覧の高さが合わなくなってしまいます。キャプションは実際の本文の冒頭から取ってくるので、リード文を意識して書きます。',
      icon: 'tabler:calendar-event',
      category: 'フロントエンド',
      tags: ['フロントエンド', 'サーバレス'],
      createdAt: '2017-05-06T18:36:20.000Z',
      updatedAt: '2021-07-25T09:49:35.000Z',
    },
  },
  useLazyFetch: {
    data: '',
  },
};

export const Qiita = Template.bind({});
Qiita.args = {
  type: LINK_CARD_TYPE_MAP.QIITA,
  link: 'https://qiita.com/waicode/items/61ec0f9478fdb8a8e542',
};
Qiita.parameters = {
  useState: {
    value: ogpValue,
  },
  useLazyFetch: {
    data: `
    <head>
      <meta property="og:title" content="VSCodeでGitHub連携するQiita執筆環境ボイラープレート - Qiita">
      <meta property="og:image" content="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&amp;w=1200&amp;mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9VlNDb2RlJUUzJTgxJUE3R2l0SHViJUU5JTgwJUEzJUU2JTkwJUJBJUUzJTgxJTk5JUUzJTgyJThCUWlpdGElRTUlOUYlQjclRTclQUQlODYlRTclOTIlQjAlRTUlQTIlODMlRTMlODMlOUMlRTMlODIlQTQlRTMlODMlQTklRTMlODMlQkMlRTMlODMlOTclRTMlODMlQUMlRTMlODMlQkMlRTMlODMlODgmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTM4OGIyYzliYWVmNjkwODJjZmJlNTEyNTAxNzM2NzA0&amp;mark-x=142&amp;mark-y=112&amp;blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwd2FpY29kZSZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9MTQyZmU5ZTZiMWRmYmU3MmQxMGQ0MTlkOTVkMjVlYmU&amp;blend-x=142&amp;blend-y=491&amp;blend-mode=normal&amp;s=849a2666f2a84fb8e717fe6baa6fc685">
      <meta property="og:description" content="
        QiitaをGithubと連携してVSCodeで書くために
        Qiitaの記事投稿でもZennのように「Githubリポジトリと連携してVSCodeで書けたら便利だな」と思い、Qiita執筆環境のボイラープレート1を作成しました。

        ...">
    </head>
    `,
  },
};

export const Zenn = Template.bind({});
Zenn.args = {
  type: LINK_CARD_TYPE_MAP.ZENN,
  link: 'https://zenn.dev/oreo2990/articles/280d39a45c203e',
};
Zenn.parameters = {
  useState: {
    value: ogpValue,
  },
  useLazyFetch: {
    data: `
    <head>
      <meta property="og:title" content="VSCodeが導くZenn執筆環境ボイラープレート">
      <meta property="og:image" content="https://res.cloudinary.com/zenn/image/upload/s--JdxGLV4F--/co_rgb:222%2Cg_south_west%2Cl_text:notosansjp-medium.otf_37_bold:waicode%2Cx_203%2Cy_98/c_fit%2Cco_rgb:222%2Cg_north_west%2Cl_text:notosansjp-medium.otf_70_bold:VSCode%25E3%2581%258C%25E5%25B0%258E%25E3%2581%258FZenn%25E5%259F%25B7%25E7%25AD%2586%25E7%2592%25B0%25E5%25A2%2583%25E3%2583%259C%25E3%2582%25A4%25E3%2583%25A9%25E3%2583%25BC%25E3%2583%2597%25E3%2583%25AC%25E3%2583%25BC%25E3%2583%2588%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vemVubi9pbWFnZS9mZXRjaC9zLS03SzJwVmROVC0tL2NfbGltaXQlMkNmX2F1dG8lMkNmbF9wcm9ncmVzc2l2ZSUyQ3FfYXV0byUyQ3dfNzAvaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzZjMzlkMzhiNTMuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/v1627274783/default/og-base_z4sxah.png">
    </head>
    `,
  },
};
