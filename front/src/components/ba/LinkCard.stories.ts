import BaLinkCard from '@/components/ba/LinkCard.vue';
import { LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardComposable';

export default {
  title: '@components/ba/LinkCard',
  component: BaLinkCard,
  args: {
    type: LINK_CARD_TYPE_MAP.EXTERNAL,
    link: 'https://mujiota.com/1372/bulletproof-coffee/',
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: Object.values(LINK_CARD_TYPE_MAP),
    },
  },
};

const Template = (args) => ({
  components: { BaLinkCard },
  setup() {
    return { args };
  },
  template: `
    <BaLinkCard v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  useFetch: {
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
  useFetch: {
    data: `
    <head>
      <meta property="og:title" content="完全無欠コーヒーを5年以上飲み続けて確信した効果とおすすめの作り方">
      <meta property="og:description" content="朝は大の苦手だったのに、完全無欠コーヒーを飲むようになってからは午前中から集中して仕事に取り組めるようになりました。完全無欠コーヒーの効果や作り方を、長年の経験にもとづいて誰よりも詳しく書いたつもりです。">
      <meta property="og:image" content="https://mujiota.com/_nuxt/img/bulletproof-coffee.19bb6f2.jpg">
    </head>
    `,
  },
};

export const Related = Template.bind({});
Related.args = {
  type: LINK_CARD_TYPE_MAP.RELATED,
  article: {
    id: 123,
    slug: 'storybook123',
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
Related.parameters = {};

export const Qiita = Template.bind({});
Qiita.args = {
  type: LINK_CARD_TYPE_MAP.QIITA,
  link: 'https://qiita.com/cheez921/items/41b744e4e002b966391a',
};
Qiita.parameters = {
  useFetch: {
    data: `
    <head>
      <meta property="og:title" content="【ES6】 JavaScript初心者でもわかるPromise講座 - Qiita">
      <meta property="og:image" content="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&amp;w=1200&amp;mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUUzJTgwJTkwRVM2JUUzJTgwJTkxJTIwSmF2YVNjcmlwdCVFNSU4OCU5RCVFNSVCRiU4MyVFOCU4MCU4NSVFMyU4MSVBNyVFMyU4MiU4MiVFMyU4MiU4RiVFMyU4MSU4QiVFMyU4MiU4QlByb21pc2UlRTglQUMlOUIlRTUlQkElQTcmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWNiZjA4ODFjNzdlOTA1NGFhOTRkOWNhNDE5YWY1MTkw&amp;mark-x=142&amp;mark-y=112&amp;blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwY2hlZXo5MjEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTk2MDAwM2EwZGM0MTMwMWUzMzkwZmU4ZGZkMTZhZGU5&amp;blend-x=142&amp;blend-y=491&amp;blend-mode=normal&amp;s=81358f9fc0d0027190ee4726c2ef590f">
      <meta property="og:description" content="

はじめに

Promiseって...難しくないですか？？？
3ヶ月くらい前の私は、Promiseをほとんど理解できてないのにasync/awaitとか使っちゃってたし、様々な記事を読み漁ってもなかなか理解できず、Promiseの正...">
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
  useFetch: {
    data: `
    <head>
    <meta property="og:title" content="Webブラウザのレンダリングの仕組みを理解する">
    <meta property="og:image" content="https://res.cloudinary.com/zenn/image/upload/s--9EpDAbl5--/co_rgb:222%2Cg_south_west%2Cl_text:notosansjp-medium.otf_37_bold:oreo2990%2Cx_203%2Cy_98/c_fit%2Cco_rgb:222%2Cg_north_west%2Cl_text:notosansjp-medium.otf_70_bold:Web%25E3%2583%2596%25E3%2583%25A9%25E3%2582%25A6%25E3%2582%25B6%25E3%2581%25AE%25E3%2583%25AC%25E3%2583%25B3%25E3%2583%2580%25E3%2583%25AA%25E3%2583%25B3%25E3%2582%25B0%25E3%2581%25AE%25E4%25BB%2595%25E7%25B5%2584%25E3%2581%25BF%25E3%2582%2592%25E7%2590%2586%25E8%25A7%25A3%25E3%2581%2599%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vemVubi9pbWFnZS9mZXRjaC9zLS11UHFTbWtwcy0tL2NfbGltaXQlMkNmX2F1dG8lMkNmbF9wcm9ncmVzc2l2ZSUyQ3FfYXV0byUyQ3dfNzAvaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzdlZWE4N2IyOGEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/v1627274783/default/og-base_z4sxah.png">
    </head>
    `,
  },
};
