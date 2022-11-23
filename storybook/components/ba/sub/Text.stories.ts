import { Meta, StoryFn } from '@storybook/vue3';
import BaSubText from '@/components/ba/sub/Text.vue';
import AppText from '@/components/app/Text.vue';
import { TEXT_SIZE } from '@/components/app/TextConst';

export default {
  title: '@components/ba/sub/Text',
  component: BaSubText,
  args: {
    title: '見出しテキスト',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof BaSubText>;

const Template: StoryFn<typeof BaSubText> = (args) => ({
  components: { BaSubText, AppText },
  setup() {
    return { args, TEXT_SIZE };
  },
  template: `
    <BaSubText v-bind="args">
      <AppText :type="TEXT_SIZE.SUB_DESCRIPTION1">${'ここにテキストを入力します。'.repeat(10)}</AppText>
    </BaSubText>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
