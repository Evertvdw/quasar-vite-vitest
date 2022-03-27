import ExampleComponent from 'components/ExampleComponent.vue';

installQuasar();

describe('example Component', () => {
  test('mount component with todos', async () => {
    mount(ExampleComponent, {
      props: {
        title: 'Hello',
        meta: {
          totalCount: 4,
        },
        todos: [
          { id: 1, content: 'Hallo' },
          { id: 2, content: 'Hoi' },
        ],
      },
    });
  });

  test('mount component without todos', async () => {
    mount(ExampleComponent, {
      props: {
        title: 'Hello',
        meta: {
          totalCount: 4,
        },
      },
    });
  });
});
