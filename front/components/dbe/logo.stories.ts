import DbeLogo from "./logo.vue";
import { LOGO_FONT_TYPE_MAP, LOGO_FONT_WEIGHT_MAP } from "./logoComposable";
import useCss from "@/composables/useCss";

export default {
  title: "@component/dbe/logo",
  component: DbeLogo,
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

const Template = (args, { argTypes }) => ({
  components: { DbeLogo },
  props: Object.keys(argTypes),
  setup() {
    useCss(
      () => `
        body {
            background: #4B73FF;
        }
      `
    );
    return args;
  },
  template: `
    <DbeLogo v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  font: LOGO_FONT_TYPE_MAP.ADVENT__PRO,
  weight: LOGO_FONT_WEIGHT_MAP.weight600,
};
