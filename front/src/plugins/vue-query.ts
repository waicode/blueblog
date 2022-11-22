import { VueQueryPlugin, VueQueryPluginOptions, QueryClient, dehydrate, hydrate } from '@tanstack/vue-query';

export default defineNuxtPlugin((nuxtApp) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 } },
  });
  const options: VueQueryPluginOptions = { queryClient };
  nuxtApp.vueApp.use(VueQueryPlugin, options);

  if (process.server) {
    nuxtApp.hooks.hook('app:rendered', () => {
      // eslint-disable-next-line no-param-reassign
      nuxtApp.payload.state.vueQueryState = dehydrate(queryClient);
    });
  }

  if (process.client) {
    nuxtApp.hooks.hook('app:created', () => {
      hydrate(queryClient, nuxtApp.payload.state.vueQueryState);
    });
  }
});
