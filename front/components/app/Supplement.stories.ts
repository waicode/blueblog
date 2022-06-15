import AppSupplement from "@/components/app/Supplement.vue";
import { SUPPLEMENT_TYPE } from "@/components/app/SupplementComposable";

export default {
  title: "@components/app/Image",
  component: AppSupplement,
  args: {
    type: SUPPLEMENT_TYPE.NORMAL,
    title: "補足説明のタイトル",
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: SUPPLEMENT_TYPE,
    },
    title: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { AppSupplement },
  setup() {
    return { args };
  },
  template: `
    <AppSupplement v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
