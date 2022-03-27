import NotifyComponent from 'components/NotifyComponent.vue';
import { Notify } from 'quasar';

installQuasar({ plugins: { Notify } });

describe('notify example', () => {
  test('should call notify on click', async () => {
    expect(NotifyComponent).toBeTruthy();

    const wrapper = mount(NotifyComponent, {});
    const spy = vi.spyOn(wrapper.vm.$q, 'notify');
    expect(spy).not.toHaveBeenCalled();
    wrapper.trigger('click');
    expect(spy).toHaveBeenCalled();
  });
});
