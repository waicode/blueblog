import { Article } from '@/store/article';
import AppPagenation from '@/components/app/Pagenation.vue';

const sampleArticles: Article[] = [];
for (let i = 0; i < 20; i++) {
  sampleArticles.push({
    id: i + 1,
    slug: `test${i}`,
    title: `テストタイトル${i}`,
    description: `テスト説明${i}`,
    icon: 'tabler:calendar-event',
    category: 'フロントエンド',
    tags: ['フロントエンド', 'サーバレス'],
    createdAt: '2021-07-25T09:49:35.000Z',
    updatedAt: '2021-07-25T09:49:35.000Z',
  });
}

export default {
  title: '@components/app/Pagenation',
  component: AppPagenation,
  args: {
    pageSize: 5,
    articles: sampleArticles,
  },
  argTypes: {
    articles: { control: { type: 'object' } },
    pageSize: { control: { type: 'number' } },
  },
};

const Template = (args) => ({
  components: { AppPagenation },
  setup() {
    return { args };
  },
  template: `
    <AppPagenation v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
