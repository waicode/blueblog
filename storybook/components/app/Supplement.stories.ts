import { Meta, StoryFn } from '@storybook/vue3';
import AppSupplement from '@/components/app/Supplement.vue';
import { SUPPLEMENT_TYPE } from '@/components/app/SupplementConst';

export default {
  title: '@components/app/Supplement',
  component: AppSupplement,
  args: {
    type: SUPPLEMENT_TYPE.NORMAL,
    title: '補足説明のタイトル',
    default: 'ここにテキストを入力します。'.repeat(10),
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: SUPPLEMENT_TYPE,
    },
    title: {
      control: { type: 'text' },
    },
    default: { control: { type: 'text' } },
  },
} as Meta<typeof AppSupplement>;

const Template: StoryFn<typeof AppSupplement> = (args) => ({
  components: { AppSupplement },
  setup() {
    return { args: { ...args }, slotValue: args.default };
  },
  template: `
    <AppSupplement v-bind="args">{{ slotValue }}</AppSupplement>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
