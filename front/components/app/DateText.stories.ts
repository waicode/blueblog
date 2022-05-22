import DateText from "./DateText.vue";
import { DATE_TEXT_TYPE_MAP } from "./DateTextComposable";

export default {
  title: "@component/app/DateText",
  component: DateText,
  args: {
    type: DATE_TEXT_TYPE_MAP.CREATED,
    dateTimeText: "2022-05-22T13:50:40+09:00",
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: Object.values(DATE_TEXT_TYPE_MAP),
    },
    dateTimeText: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { DateText },
  setup() {
    return { args };
  },
  template: `
    <DateText v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};

export const Created = Template.bind({});
Created.args = {
  type: DATE_TEXT_TYPE_MAP.CREATED,
};

export const Updated = Template.bind({});
Updated.args = {
  type: DATE_TEXT_TYPE_MAP.UPDATED,
};
