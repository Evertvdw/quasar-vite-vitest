import IndexPage from 'pages/IndexPage.vue';
import { Pinia } from 'pinia';
import { getRouter } from 'vue-router-mock';

// If you really want to call a preFetch hook in a unit test you must call the preFetch function yourself like the example below
// I don't know how to pass in the actual Pinia store instance here

installQuasar();

describe('preFetch example', () => {
  test('should call the prefetch function', async () => {
    const router = getRouter();
    if (IndexPage.preFetch) {
      await IndexPage.preFetch({
        currentRoute: router.currentRoute.value,
        urlPath: '',
        previousRoute: router.currentRoute.value,
        store: {} as Pinia,
        redirect: () => null,
        publicPath: '',
      });
    }

    mount(IndexPage, {});
  });
});
