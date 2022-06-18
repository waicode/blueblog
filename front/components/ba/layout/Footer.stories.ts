import BaLayoutFooter from '@/components/ba/layout/Footer.vue';
import { FONT_TYPE_MAP, FONT_WEIGHT_MAP } from '@/composables/useWebFont';
import useCss from '@/composables/useCss';

export default {
  title: '@components/ba/layout/Footer',
  component: BaLayoutFooter,
  args: {
    font: FONT_TYPE_MAP.ADVENT__PRO,
    weight: FONT_WEIGHT_MAP.weight400,
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
};

const Template = (args) => ({
  components: { BaLayoutFooter },
  setup() {
    useCss(
      () => `
        body {
          background: linear-gradient(180deg, #4b73ff 10%, #7cf7ff 100%);
        }
      `,
    );
    return { args };
  },
  template: `
    <BaLayoutFooter v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
