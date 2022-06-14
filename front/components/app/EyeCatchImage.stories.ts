import AppEyeCatchImage from "@/components/app/EyeCatchImage.vue";

export default {
  title: "@components/app/EyeCatchImage",
  component: AppEyeCatchImage,
  args: {
    icon: "tabler:calendar-event",
    width: 884,
    height: 464,
  },
  argTypes: {
    icon: {
      control: { type: "text" },
    },
    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
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
