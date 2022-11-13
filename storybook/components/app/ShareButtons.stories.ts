import { Meta, StoryFn } from '@storybook/vue3';
import AppShareButtons from '@/components/app/ShareButtons.vue';

export default {
  title: '@components/app/ShareButtons',
  component: AppShareButtons,
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
} as Meta<typeof AppShareButtons>;

const Template: StoryFn<typeof AppShareButtons> = (args) => ({
  components: { AppShareButtons },
  setup() {
    return { args };
  },
  template: `
    <AppShareButtons v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
