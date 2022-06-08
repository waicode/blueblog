import { defineComponent } from "vue";
import useCss from "../composables/useCss.ts";
import useId from "../composables/useId.ts";
import useWebFont from "../composables/useWebFont.ts";

// TODO: composablesの自動読み込みをここで対応する
export const decorators = [
  (story, context) => {
    return defineComponent({
      components: { story },
      setup() {
        return {};
      },
      template: "<story />",
    });
  },
];
