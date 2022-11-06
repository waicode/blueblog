import "@/assets/styles/global.scss";
import "@/assets/styles/reset.scss";

import { app } from "@storybook/vue3";

// Componentsのモック
import NuxtLinkStub from "./components/NuxtLinkStub.vue";
import ClientOnlyStub from "./components/ClientOnlyStub.vue";

// Nuxtのモック
import {
  useFetchDecorator,
  useLazyFetchDecorator,
  useStateDecorator,
} from "./__mocks__/nuxtMock";

// コンポーネントをスタブ化
app.component("NuxtLink", NuxtLinkStub);
app.component("ClientOnly", ClientOnlyStub);

export const decorators = [
  useFetchDecorator,
  useLazyFetchDecorator,
  useStateDecorator,
];
