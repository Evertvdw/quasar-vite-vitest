<template>
  <q-page class="row items-center justify-evenly">
    <RouteComponent />
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import RouteComponent from 'components/RouteComponent.vue';

export default defineComponent({
  preFetch() {
    console.log('preFetch IndexPage called');
  },
  name: 'IndexPage',
  components: { RouteComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>
