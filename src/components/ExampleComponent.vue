<template>
  <div>
    <p>{{ title }}</p>
    <q-list>
      <q-item v-for="todo in todos" :key="todo.id" @click="increment" clickable>
        {{ todo.id }} - {{ todo.content }}
      </q-item>
    </q-list>

    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
  </div>
</template>

<script lang="ts" setup>
import { Todo, Meta } from './models';

const props = withDefaults(
  defineProps<{
    title: string;
    todos?: Todo[];
    meta: Meta;
    active?: boolean;
  }>(),
  {
    todos: () => [],
  }
);

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);
</script>
