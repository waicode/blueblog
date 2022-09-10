import AppDropdown from '@/components/app/Dropdown.vue';

export default {
  title: '@components/app/Dropdown',
  component: AppDropdown,
  args: {
    label: '項目を選択',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'object' },
    },
  },
};

const Template = (args) => ({
  components: { AppDropdown },
  setup() {
    return { args };
  },
  template: `
    <AppDropdown v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { label: '項目1', count: 1, path: '/tags/item1' },
    { label: '項目2', count: 2, path: '/tags/item2' },
    { label: '項目3', count: 3, path: '/tags/item3' },
  ],
};

export const TagDropdown = Template.bind({});
TagDropdown.args = {
  label: 'タグを選択',
  items: [
    { label: 'フロントエンド', count: 7, path: '/tags/frontend' },
    { label: 'サーバレス', count: 8, path: '/tags/serverless' },
  ],
};

export const ArchiveDropdown = Template.bind({});
ArchiveDropdown.args = {
  label: '年月を選択',
  items: [
    { label: '2022年5月', count: 2, path: '/archives/2022/05' },
    { label: '2022年6月', count: 4, path: '/archives/2022/06' },
  ],
};
