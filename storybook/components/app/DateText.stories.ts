import { Meta, StoryFn } from '@storybook/vue3';
import AppDateText from '@/components/app/DateText.vue';
import { DATE_TEXT_TYPE_MAP, DATE_SIZE_TYPE_MAP } from '@/components/app/DateTextConst';

export default {
  title: '@components/app/DateText',
  component: AppDateText,
  args: {
    dateTimeText: '2022-05-22T13:50:40+09:00',
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: Object.values(DATE_TEXT_TYPE_MAP),
    },
    size: {
      control: { type: 'inline-radio' },
      options: Object.values(DATE_SIZE_TYPE_MAP),
    },
    dateTimeText: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof AppDateText>;

const Template: StoryFn<typeof AppDateText> = (args) => ({
  components: { AppDateText },
  setup() {
    return { args };
  },
  template: `
    <AppDateText v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {};

export const Small = Template.bind({});
Small.args = {
  size: DATE_SIZE_TYPE_MAP.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  size: DATE_SIZE_TYPE_MAP.MEDIUM,
};

export const Created = Template.bind({});
Created.args = {
  type: DATE_TEXT_TYPE_MAP.CREATED,
};

export const Updated = Template.bind({});
Updated.args = {
  type: DATE_TEXT_TYPE_MAP.UPDATED,
};
