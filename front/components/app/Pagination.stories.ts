import AppPagination from '@/components/app/Pagination.vue';

const sampleArticles = [];
for (let i = 0; i < 20; i++) {
  sampleArticles.push({
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
  title: '@components/app/Pagination',
  component: AppPagination,
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
  components: { AppPagination },
  setup() {
    return { args };
  },
  template: `
    <AppPagination v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
