import BaSideText from '@/components/ba/side/Text.vue';

export default {
  title: '@components/ba/side/Text',
  component: BaSideText,
  args: {
    title: '見出しテキスト',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  components: { BaSideText },
  setup() {
    return { args };
  },
  template: `
    <BaSideText v-bind="args">${'ここにテキストを入力します。'.repeat(10)}</BaSideText>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
