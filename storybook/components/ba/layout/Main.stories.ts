import { Meta, StoryFn } from '@storybook/vue3';
import BaLayoutMain from '@/components/ba/layout/Main.vue';
import ContentProseP from '@/components/content/ProseP.vue';
import ContentProseH2 from '@/components/content/ProseH2.vue';
import ContentProseH3 from '@/components/content/ProseH3.vue';
import ContentProseH4 from '@/components/content/ProseH4.vue';
import ContentProseH5 from '@/components/content/ProseH5.vue';
import ContentProseUl from '@/components/content/ProseUl.vue';
import ContentProseOl from '@/components/content/ProseOl.vue';
import ContentProseLi from '@/components/content/ProseLi.vue';
import ContentProseImg from '@/components/content/ProseImg.vue';
import ContentProseTable from '@/components/content/ProseTable.vue';
import ContentProseTr from '@/components/content/ProseTr.vue';
import ContentProseTh from '@/components/content/ProseTh.vue';
import ContentProseTd from '@/components/content/ProseTd.vue';

export default {
  title: '@components/ba/layout/Main',
  BaLayoutMain,
} as Meta<typeof BaLayoutMain>;

const Template: StoryFn<typeof BaLayoutMain> = (args) => ({
  components: {
    BaLayoutMain,
    ContentProseP,
    ContentProseH2,
    ContentProseH3,
    ContentProseH4,
    ContentProseH5,
    ContentProseUl,
    ContentProseOl,
    ContentProseLi,
    ContentProseImg,
    ContentProseTable,
    ContentProseTr,
    ContentProseTh,
    ContentProseTd,
  },
  setup() {
    return { args };
  },
  template: `
    <BaLayoutMain v-bind="args">
      <ContentProseP>キャプションを書きます。だいたい120文字くらいを目安に3行でおさまるボリュームで。ここが長すぎると一覧の高さが合わなくなってしまいます。キャプションは実際の本文の冒頭から取ってくるので、リード文を意識して書きます。</ContentProseP>
      <ContentProseH2>見出し2のテキストはこちら</ContentProseH2>
      <ContentProseP>ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。</ContentProseP>
      <ContentProseH3>見出し3のテキストはこちら</ContentProseH3>
      <ContentProseP>ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。</ContentProseP>
      <ContentProseH4>見出し4のテキストはこちら</ContentProseH4>
      <ContentProseH5>見出し5のテキストはこちら</ContentProseH5>
      <ContentProseP>ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。</ContentProseP>
      <ContentProseUl>
        <ContentProseLi>これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストですこれはリストです。これはリストです。これはリストです。これはリストです。</ContentProseLi>
        <ContentProseLi>これはリストです。これはリストです。これはリストです。これはリストです。</ContentProseLi>
        <ContentProseLi>これはリストです。これはリストです。これはリストです。これはリストです。</ContentProseLi>
        <ContentProseLi>これはリストです。これはリストです。これはリストです。これはリストです。</ContentProseLi>
      </ContentProseUl>
      <ContentProseP>ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。</ContentProseP>
      <ContentProseOl>
        <ContentProseLi>これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストですこれはリストです。これはリストです。これはリストです。これはリストです。</ContentProseLi>
        <ContentProseLi>これはリストです。これはリストです。これはリストです。これはリストです。</ContentProseLi>
        <ContentProseLi>これはリストです。これはリストです。これはリストです。これはリストです。</ContentProseLi>
        <ContentProseLi>これはリストです。これはリストです。これはリストです。これはリストです。</ContentProseLi>
      </ContentProseOl>
      <ContentProseImg src="article/choco60_instagram.jpeg" width="500"/>
      <ContentProseTable>
        <ContentProseTr>
          <ContentProseTh>ヘッダー1</ContentProseTh>
          <ContentProseTh>ヘッダー2</ContentProseTh>
          <ContentProseTh>ヘッダー3</ContentProseTh>
        </ContentProseTr>
        <ContentProseTr>
          <ContentProseTd>ここにテキストが入ります。</ContentProseTd>
          <ContentProseTd>ここにテキストが入ります。</ContentProseTd>
          <ContentProseTd>ここにテキストが入ります。</ContentProseTd>
        </ContentProseTr>
        <ContentProseTr>
          <ContentProseTd>ここにテキストが入ります。</ContentProseTd>
          <ContentProseTd>ここにテキストが入ります。</ContentProseTd>
          <ContentProseTd>ここにテキストが入ります。</ContentProseTd>
        </ContentProseTr>
      </ContentProseTable>
    </BaLayoutMain>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
