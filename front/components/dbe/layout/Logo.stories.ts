import DbeLayoutLogo from "./logo.vue";
import { LOGO_FONT_TYPE_MAP, LOGO_FONT_WEIGHT_MAP } from "./logoComposable";
import useCss from "@/composables/useCss";

export default {
  title: "@component/dbe/layout/Logo",
  component: DbeLayoutLogo,
  args: {
    font: LOGO_FONT_TYPE_MAP.ADVENT__PRO,
    weight: LOGO_FONT_WEIGHT_MAP.weight600,
  },
  argTypes: {
    font: {
      control: { type: "inline-radio" },
      options: Object.values(LOGO_FONT_TYPE_MAP),
    },
    weight: {
      control: { type: "inline-radio" },
      options: Object.values(LOGO_FONT_WEIGHT_MAP),
    },
  },
};

const Template = (args) => ({
  components: { DbeLayoutLogo },
  setup() {
    useCss(
      () => `
        body {
          background: #4B73FF;
        }
      `
    );
    return { args };
  },
  template: `
    <DbeLayoutLogo v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
