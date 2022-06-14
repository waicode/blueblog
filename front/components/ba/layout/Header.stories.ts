import BaLayoutHeader from "@/components/ba/layout/Header.vue";
import useCss from "@/composables/useCss";

export default {
  title: "@components/ba/layout/Header",
  component: BaLayoutHeader,
};

const Template = (args) => ({
  components: { BaLayoutHeader },
  setup() {
    useCss(
      () => `
        body {
          background: linear-gradient(180deg, #4b73ff 10%, #7cf7ff 100%);
        }
      `
    );
    return { args };
  },
  template: `
    <BaLayoutHeader v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
