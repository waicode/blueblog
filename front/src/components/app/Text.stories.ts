import AppText from '@/components/app/Text.vue';
import { LETTER_SPACING, LINE_HEIGHT, TEXT_COLOR, TEXT_SIZE, TEXT_WEIGHT } from '@/components/app/TextComposable';

export default {
  title: '@components/app/Text',
  component: AppText,
  args: {
    type: TEXT_SIZE.BODY1,
    default: 'テキスト',
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: Object.values(TEXT_SIZE),
    },
    height: {
      control: { type: 'inline-radio' },
      options: Object.values(LINE_HEIGHT),
    },
    spacing: {
      control: { type: 'inline-radio' },
      options: Object.values(LETTER_SPACING),
    },
    weight: {
      control: { type: 'inline-radio' },
      options: Object.values(TEXT_WEIGHT),
    },
    color: {
      control: { type: 'inline-radio' },
      options: Object.values(TEXT_COLOR),
    },
    underline: { control: { type: 'boolean' } },
    default: { control: { type: 'text' } },
  },
};

const Template = (args) => ({
  components: { AppText },
  setup() {
    const slotValue = args.default;
    // eslint-disable-next-line no-param-reassign
    delete args.default;
    return { args, slotValue };
  },
  template: `
      <AppText v-bind="args">{{ slotValue }}</AppText>`,
});

export const Primary = Template.bind({});
Primary.args = {};
