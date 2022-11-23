import { Meta, StoryFn } from '@storybook/vue3';
import BaSubProfile from '@/components/ba/sub/Profile.vue';
import AppText from '@/components/app/Text.vue';
import { TEXT_SIZE } from '@/components/app/TextConst';

export default {
  title: '@components/ba/sub/Profile',
  component: BaSubProfile,
  args: {
    title: 'Author : waicode',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof BaSubProfile>;

const Template: StoryFn<typeof BaSubProfile> = (args) => ({
  components: { BaSubProfile, AppText },
  setup() {
    return { args, TEXT_SIZE };
  },
  template: `
    <BaSubProfile v-bind="args">
      <AppText :type="TEXT_SIZE.SUB_DESCRIPTION1">ここに簡潔なプロフィールを書きます。だいたい3行くらいで書きます。そして詳しいプロフィールのリンクを貼ります。詳しいプロフィールはこちら。お問合せはこちらから。</AppText>
    </BaSubProfile>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
