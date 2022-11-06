import { Meta, StoryFn } from '@storybook/vue3';
import BaLogo from '@/components/ba/Logo.vue';
import { FONT_TYPE_MAP, FONT_WEIGHT_MAP } from '@/composables/useWebFont';
import useCss from '@/composables/useCss';
import { randomString } from '@/utils/util';

export default {
  title: '@components/ba/Logo',
  component: BaLogo,
  args: {
    font: FONT_TYPE_MAP.ADVENT__PRO,
    weight: FONT_WEIGHT_MAP.weight600,
  },
  argTypes: {
    font: {
      control: { type: 'inline-radio' },
      options: Object.values(FONT_TYPE_MAP),
    },
    weight: {
      control: { type: 'inline-radio' },
      options: Object.values(FONT_WEIGHT_MAP),
    },
  },
} as Meta<typeof BaLogo>;

const Template: StoryFn<typeof BaLogo> = (args) => ({
  components: { BaLogo },
  setup() {
    useCss(
      () => `
        #root {
          background: #4B73FF;
        }
      `,
    );
    return { args };
  },
  template: `
    <BaLogo v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  useState: {
    value: randomString(),
  },
};
