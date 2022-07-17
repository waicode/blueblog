import BaSideText from '@/components/ba/side/Text.vue';
import AppText from '@/components/app/Text.vue';

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
  components: { BaSideText, AppText },
  setup() {
    return { args };
  },
  template: `
    <BaSideText v-bind="args">
      <AppText :type="TEXT_SIZE.SIDE_DESCRIPTION">${'ここにテキストを入力します。'.repeat(10)}</AppText>
    </BaSideText>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
