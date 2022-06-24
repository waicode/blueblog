import AppTagLabel from '@/components/app/TagLabel.vue';

export default {
  title: '@components/app/TagLabel',
  component: AppTagLabel,
  args: {
    default: 'タグ名',
  },
  argTypes: {
    default: { control: { type: 'text' } },
  },
};

const Template = (args) => ({
  components: { AppTagLabel },
  setup() {
    return { args: { ...args }, slotValue: args.default };
  },
  template: `
      <AppTagLabel v-bind="args">{{ slotValue }}</AppTagLabel>`,
});

export const Primary = Template.bind({});
Primary.args = {};
