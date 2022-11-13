import { Meta, StoryFn } from '@storybook/vue3';
import AppImage from '@/components/app/Image.vue';

export default {
  title: '@components/app/Image',
  component: AppImage,
  args: {
    src: 'article/content_v1_v2_comparison.png',
    alt: '@nuxt/content feature comparison',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof AppImage>;

const Template: StoryFn<typeof AppImage> = (args) => ({
  components: { AppImage },
  setup() {
    return { args };
  },
  template: `
    <AppImage v-bind="args" />
  `,
});

export const Primary: StoryFn<typeof AppImage> = Template.bind({});
Primary.args = {};
