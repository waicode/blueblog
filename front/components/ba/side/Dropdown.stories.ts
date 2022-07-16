import BaSideDropdown from '@/components/ba/side/Dropdown.vue';

export default {
  title: '@components/ba/side/Dropdown',
  component: BaSideDropdown,
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
  components: { BaSideDropdown },
  setup() {
    return { args };
  },
  template: `
    <BaSideDropdown v-bind="args" />
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
