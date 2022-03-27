import QPageComponent from 'components/QPageComponent.vue';

installQuasar();

describe('qpage example', () => {
  test('should not give an error', async () => {
    mount(QPageComponent);
  });
});
