import { app } from '@storybook/vue3';
import { defineComponent } from 'vue';
import NuxtLinkStub from './components/NuxtLinkStub.vue';
import useCss from '../composables/useCss.ts';
import useId from '../composables/useId.ts';
import useWebFont from '../composables/useWebFont.ts';

// NuxtLinkをスタブ化
app.component('NuxtLink', NuxtLinkStub);

// TODO: ここから　useFetchをモックする
// app.use(useFetch)

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
];
