import BaLinkCard from '@/components/ba/LinkCard.vue';
import { LINK_CARD_TYPE_MAP } from '@/components/ba/LinkCardComposable';

export default {
  title: '@components/ba/LinkCard',
  component: BaLinkCard,
  args: {
    type: LINK_CARD_TYPE_MAP.EXTERNAL,
    title: '完全無欠コーヒーを5年以上飲み続けて確信した効果とおすすめの作り方',
    note: '朝は大の苦手だったのに、完全無欠コーヒーを飲むようになってからは午前中から集中して仕事に取り組めるようになりました。完全無欠コーヒーの効果や作り方を、長年の経験にもとづいて誰よりも詳しく書いたつもりです。',
    link: 'https://mujiota.com/1372/bulletproof-coffee/',
    imgFileName: 'bulletproof-coffee.jpg',
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
