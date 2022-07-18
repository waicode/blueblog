import BaLayoutSub from '@/components/ba/layout/Sub.vue';

export default {
  title: '@components/ba/layout/Sub',
  BaLayoutSub,
};

const Template = (args) => ({
  components: { BaLayoutSub },
  setup() {
    return { args };
  },
  template: `<BaLayoutSub v-bind="args" />`,
});

export const Primary = Template.bind({});
Primary.args = {};
