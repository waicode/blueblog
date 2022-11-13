import { Meta, StoryFn } from '@storybook/vue3';
import AppShareButtonsMenu from '@/components/app/ShareButtonsMenu.vue';
import useCss from '@/composables/useCss';

export default {
  title: '@components/app/ShareButtonsMenu',
  component: AppShareButtonsMenu,
  args: {
    pageUrl: 'https://mujiota.com/1372/bulletproof-coffee/',
    title: '完全無欠コーヒーを5年以上飲み続けて確信した効果とおすすめの作り方',
  },
  argTypes: {
    pageUrl: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof AppShareButtonsMenu>;

const Template: StoryFn<typeof AppShareButtonsMenu> = (args) => ({
  components: { AppShareButtonsMenu },
  setup() {
    useCss(
      () => `
        body {
          background: #4B73FF;
        }
      `,
    );
    return { args };
  },
  template: `
    <AppShareButtonsMenu v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
