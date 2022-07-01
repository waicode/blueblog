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
