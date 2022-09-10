import AppEyeCatchImage from '@/components/app/EyeCatchImage.vue';
import { randomString } from '@/utils/util';

export default {
  title: '@components/app/EyeCatchImage',
  component: AppEyeCatchImage,
  args: {
    icon: 'tabler:brand-docker',
    width: '400px',
  },
  argTypes: {
    icon: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    iconRatio: {
      control: { type: 'number' },
    },
    aspectRatio: {
      control: { type: 'number' },
    },
  },
};

const Template = (args) => ({
  components: { AppEyeCatchImage },
  setup() {
    return { args };
  },
  template: `
    <AppEyeCatchImage v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  useState: {
    value: randomString(),
  },
};
