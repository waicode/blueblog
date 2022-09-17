import "@/assets/styles/global.scss";
import "@/assets/styles/reset.scss";

import { app } from "@storybook/vue3";
import { defineComponent } from "vue";

// Componentsのモック
import NuxtLinkStub from "./components/NuxtLinkStub.vue";
import ClientOnlyStub from "./components/ClientOnlyStub.vue";

// Nuxtのモック
import { useFetchDecorator, useStateDecorator } from "./__mocks__/nuxtMock";

// Composablesの読み込み
import { notFound } from "@/composables/error";
import {
  TITLE_DEFAULT,
  DESCRIPTION_MAP,
  DESCRIPTION,
  useMetaDescription,
} from "@/composables/descriptions";
import { useArticlesState } from "@/composables/state";
import { default as useCss } from "@/composables/useCss";
import {
  default as useOgp,
  OG_TITLE,
  OG_TYPE,
  OG_DESCRIPTION,
  OG_IMAGE,
} from "@/composables/useOgp";
import { default as useId } from "@/composables/useId";
import { default as usePaginate } from "@/composables/usePaginate";
import { TAXONOMY_MAP, TAXONOMY, getTagSlug } from "@/composables/taxonomies";
import {
  default as useWebFont,
  FONT_TYPE_MAP,
  FONT_WEIGHT_MAP,
  FONT_WEIGHT_TYPE,
} from "@/composables/useWebFont";

// コンポーネントをスタブ化
app.component("NuxtLink", NuxtLinkStub);
app.component("ClientOnly", ClientOnlyStub);

export const decorators = [
  (story, context) => {
    return defineComponent({
      components: { story },
      setup() {
        return {
          useFetchDecorator,
          useStateDecorator,
          notFound,
          TITLE_DEFAULT,
          DESCRIPTION_MAP,
          DESCRIPTION,
          useMetaDescription,
          useArticlesState,
          useCss,
          useOgp,
          OG_TITLE,
          OG_TYPE,
          OG_DESCRIPTION,
          OG_IMAGE,
          useId,
          usePaginate,
          TAXONOMY_MAP,
          TAXONOMY,
          getTagSlug,
          useWebFont,
          FONT_TYPE_MAP,
          FONT_WEIGHT_MAP,
          FONT_WEIGHT_TYPE,
        };
      },
      template: "<story />",
    });
  },
];
