import { onMounted } from "vue";
import { LOGO_FONT_TYPE } from "./logoComposable";
import DbeLogo from "./logo.vue";
import useCss from "@/composables/useCss";

export default {
  title: "dbe/logo",
  component: DbeLogo,
  argTypes: {
    font: {
      control: { type: "inline-radio" },
      options: Object.values(LOGO_FONT_TYPE),
    },
  },
};

const Template = (args) => ({
  components: { DbeLogo },
  setup() {
    useCss(
      () => `
        #root {
            background: #4B73FF;
        }
      `
    );
    return {
      args,
    };
  },
  template: `
    <DbeLogo :font="font" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  font: LOGO_FONT_TYPE.ADVENT__PRO,
};
