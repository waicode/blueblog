import { Meta, StoryFn } from '@storybook/vue3';
import AppShopItemCard from '@/components/app/ShopItemCard.vue';
import { SHOP_ITEM_CARD_TYPE_MAP } from '@/components/app/ShopItemCardComposable';

export default {
  title: '@components/app/ShopItemCard',
  component: AppShopItemCard,
  args: {
    title: 'DeLonghi kMix ドリップコーヒーメーカー ホワイト CMB6-WH',
    imgFileName: 'kmix_coffee_maker_500x500.png',
    shopName: 'DeLonghi',
    amazonItemId: 'B00243GLUY',
    rakutenItemId: '8965772ec67b8f5533146eda69344ed1',
    searchKeyword: 'kMix ドリップコーヒーメーカー ホワイト',
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: Object.values(SHOP_ITEM_CARD_TYPE_MAP),
    },
  },
} as Meta<typeof AppShopItemCard>;

const Template: StoryFn<typeof AppShopItemCard> = (args) => ({
  components: { AppShopItemCard },
  setup() {
    return { args };
  },
  template: `
    <AppShopItemCard v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};

export const Goods = Template.bind({});
Goods.args = {
  title: '明治 たけのこの里 70g×10個',
  imgFileName: 'take70_500x500.png',
  shopName: '明治',
  amazonItemId: 'B014NEL7JQ',
  rakutenItemId: '8f991847d6309f41278a08db7198e761',
  searchKeyword: '明治 たけのこの里',
};

export const Book = Template.bind({});
Book.args = {
  type: SHOP_ITEM_CARD_TYPE_MAP.BOOK,
  title: 'シリコンバレー式 自分を変える最強の食事',
  imgFileName: 'bpf_diet_500x500.png',
  shopName: 'デイヴ・アスプリー',
  amazonItemId: '4478039674',
  kindleItemId: 'B015S5545W',
  rakutenItemId: '13354097',
  koboItemId: '60f7b9a3c1723b328b923f2e27736eb8',
};
