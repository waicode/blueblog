import BaSideProfile from '@/components/ba/side/Profile.vue';
import AppText from '@/components/app/Text.vue';

export default {
  title: '@components/ba/side/Profile',
  component: BaSideProfile,
  args: {
    title: 'Author : waicode',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  components: { BaSideProfile, AppText },
  setup() {
    return { args };
  },
  template: `
    <BaSideProfile v-bind="args">
      <AppText :type="TEXT_SIZE.SIDE_DESCRIPTION">ここに簡潔なプロフィールを書きます。だいたい3行くらいで書きます。そして詳しいプロフィールのリンクを貼ります。詳しいプロフィールはこちら。お問合せはこちらから。</AppText>
    </BaSideProfile>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
