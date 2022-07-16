import BaSideProfile from '@/components/ba/side/Profile.vue';

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
  components: { BaSideProfile },
  setup() {
    return { args };
  },
  template: `
    <BaSideProfile v-bind="args">ここに簡潔なプロフィールを書きます。だいたい3行くらいで書きます。そして詳しいプロフィールのリンクを貼ります。詳しいプロフィールはこちら。お問合せはこちらから。</BaSideProfile>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
