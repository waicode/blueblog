import AppBlockquote from '@/components/app/Blockquote.vue';

export default {
  title: '@components/app/Blockquote',
  component: AppBlockquote,
  args: {
    citeText: '引用元の記事タイトル',
    citeUrl: 'https://mujiota.com/',
  },
  argTypes: {
    citeText: {
      control: { type: 'text' },
    },
    citeUrl: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  components: { AppBlockquote },
  setup() {
    return { args };
  },
  template: `
    <AppBlockquote v-bind="args">引用文を書きます。引用文を書きます。引用文を書きます。引用文を書きます。引用文を書きます。</AppBlockquote>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
