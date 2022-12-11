import '@/assets/styles/global.scss';
import '@/assets/styles/reset.scss';

import { app } from '@storybook/vue3';
import { VueQueryPlugin } from '@tanstack/vue-query';

// vue-queryの利用設定
app.use(VueQueryPlugin);

// processを再現
export const process = { client: true, server: false };

// Componentsのモック
import NuxtLinkStub from './components/NuxtLinkStub.vue';
import ClientOnlyStub from './components/ClientOnlyStub.vue';

// Nuxtのモック
import { useFetchDecorator, useLazyFetchDecorator, useStateDecorator } from './__mocks__/nuxtMock';
import { useAsyncArticlesSlugDecorator } from './__mocks__/articlesMock';

// コンポーネントをスタブ化
app.component('NuxtLink', NuxtLinkStub);
app.component('ClientOnly', ClientOnlyStub);

export const decorators = [useFetchDecorator, useLazyFetchDecorator, useStateDecorator, useAsyncArticlesSlugDecorator];
