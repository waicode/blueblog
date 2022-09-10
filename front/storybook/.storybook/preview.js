import '@/assets/styles/global.scss';
import '@/assets/styles/reset.scss';

import { app } from '@storybook/vue3';
import { defineComponent } from 'vue';
import NuxtLinkStub from './components/NuxtLinkStub.vue';
import ClientOnlyStub from './components/ClientOnlyStub.vue';
import { useFetchDecorator, useStateDecorator } from './__mocks__/nuxtMock';

// コンポーネントをスタブ化
app.component('NuxtLink', NuxtLinkStub);
app.component('ClientOnly', ClientOnlyStub);

// TODO: composablesの自動読み込みを対応する
export const decorators = [
  (story, context) => {
    return defineComponent({
      components: { story },
      setup() {
        return {};
      },
      template: '<story />',
    });
  },
  useFetchDecorator,
  useStateDecorator,
];
