import BaSubDropdown from '@/components/ba/sub/Dropdown.vue';

export default {
  title: '@components/ba/sub/Dropdown',
  component: BaSubDropdown,
  args: {
    title: '見出しテキスト',
    label: '項目を選択',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'object' },
    },
  },
};

const Template = (args) => ({
  components: { BaSubDropdown },
  setup() {
    return { args };
  },
  template: `
    <BaSubDropdown v-bind="args" />
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
