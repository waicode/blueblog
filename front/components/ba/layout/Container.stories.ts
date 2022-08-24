import BaLayoutContainer from '@/components/ba/layout/Container.vue';
import BaLayoutMain from '@/components/ba/layout/Main.vue';
import BaLayoutSub from '@/components/ba/layout/Sub.vue';
import AppImage from '@/components/app/Image.vue';

export default {
  title: '@components/ba/layout/Container',
  component: BaLayoutContainer,
};

const Template = (args) => ({
  components: { BaLayoutContainer, BaLayoutMain, BaLayoutSub, AppImage },
  setup() {
    return { args };
  },
  template: `
    <BaLayoutContainer v-bind="args">
      <BaLayoutMain>
        <p>キャプションを書きます。だいたい120文字くらいを目安に3行でおさまるボリュームで。ここが長すぎると一覧の高さが合わなくなってしまいます。キャプションは実際の本文の冒頭から取ってくるので、リード文を意識して書きます。</p>
        <h2>見出し2のテキストはこちら</h2>
        <p>ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。</p>
        <h3>見出し3のテキストはこちら</h3>
        <p>ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。</p>
        <h4>見出し4のテキストはこちら</h4>
        <h5>見出し5のテキストはこちら</h5>
        <p>ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。</p>
        <ul>
          <li>これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストですこれはリストです。これはリストです。これはリストです。これはリストです。</li>
          <li>これはリストです。これはリストです。これはリストです。これはリストです。</li>
          <li>これはリストです。これはリストです。これはリストです。これはリストです。</li>
          <li>これはリストです。これはリストです。これはリストです。これはリストです。</li>
        </ul>
        <p>ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。ブログ記事の本文を書きます。</p>
        <ol>
          <li>これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストです。これはリストですこれはリストです。これはリストです。これはリストです。これはリストです。</li>
          <li>これはリストです。これはリストです。これはリストです。これはリストです。</li>
          <li>これはリストです。これはリストです。これはリストです。これはリストです。</li>
          <li>これはリストです。これはリストです。これはリストです。これはリストです。</li>
        </ol>
        <AppImage imagePath="article/content_v1_v2_comparison.png" />
        <table>
          <tr>
            <th>ヘッダー1</th>
            <th>ヘッダー2</th>
            <th>ヘッダー3</th>
            </tr>
          <tr>
            <td>ここにテキストが入ります。</td>
            <td>ここにテキストが入ります。</td>
            <td>ここにテキストが入ります。</td>
          </tr>
          <tr>
            <td>ここにテキストが入ります。</td>
            <td>ここにテキストが入ります。</td>
            <td>ここにテキストが入ります。</td>
          </tr>
        </table>
      </BaLayoutMain>
      <BaLayoutSub />
    </BaLayoutContainer>
  `,
});

export const Primary = Template.bind({});
Primary.args = {};
