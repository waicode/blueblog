import AppImage from '@/components/app/Image.vue';

export default {
  title: '@components/app/Image',
  component: AppImage,
  args: {
    path: 'capture/content_v1_v2_comparison.png',
    alt: '@nuxt/content feature comparison',
  },
  argTypes: {
    path: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  components: { AppImage },
  setup() {
    return { args };
  },
  template: `
    <AppImage v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
