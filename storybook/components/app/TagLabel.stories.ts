import { Meta, StoryFn } from '@storybook/vue3';
import AppTagLabel from '@/components/app/TagLabel.vue';
import { TEXT_SIZE } from '@/components/app/TextComposable';
import AppText from '@/components/app/Text.vue';

export default {
  title: '@components/app/TagLabel',
  component: AppTagLabel,
  args: {
    default: 'タグ名',
  },
  argTypes: {
    default: { control: { type: 'text' } },
  },
} as Meta<typeof AppTagLabel>;

const Template: StoryFn<typeof AppTagLabel> = (args) => ({
  components: { AppTagLabel, AppText },
  setup() {
    return { args: { ...args }, slotValue: args.default };
  },
  template: `
      <AppTagLabel v-bind="args"><AppText type="${TEXT_SIZE.TAG1}">{{ slotValue }}</AppText></AppTagLabel>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
