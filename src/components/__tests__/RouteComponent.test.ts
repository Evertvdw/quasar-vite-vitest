import RouteComponent from 'components/RouteComponent.vue';
import { getRouter } from 'vue-router-mock';

// Documentation: https://github.com/posva/vue-router-mock

installQuasar();

describe('router examples', () => {
  test('should have router defined', async () => {
    const wrapper = mount(RouteComponent);
    const router = getRouter();
    expect(router.currentRoute.value.fullPath).toBe('/');
    expect(wrapper.text()).toContain('/');
    const btn = wrapper.find('button');
    await btn.trigger('click');
    expect(wrapper.text()).toContain('/hoi');
    expect(router.currentRoute.value.fullPath).toBe('/hoi');
    await router.push('/test');
    expect(wrapper.text()).toContain('/test');
  });
});
