import { Meta, StoryFn } from '@storybook/vue3';
import BaLayoutHeader from '@/components/ba/layout/Header.vue';
import useCss from '@/composables/useCss';
import { randomString } from '@/utils/util';

export default {
  title: '@components/ba/layout/Header',
  component: BaLayoutHeader,
} as Meta<typeof BaLayoutHeader>;

const Template: StoryFn<typeof BaLayoutHeader> = (args) => ({
  components: { BaLayoutHeader },
  setup() {
    useCss(
      () => `
        #root {
          background: linear-gradient(180deg, #4b73ff 10%, #7cf7ff 100%);
        }
      `,
    );
    return { args };
  },
  template: `
    <BaLayoutHeader v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  useState: {
    value: randomString(),
  },
};
