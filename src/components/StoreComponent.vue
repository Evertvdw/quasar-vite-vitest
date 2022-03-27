<template>
  <div>
    {{ counter }}
    <q-btn :ripple="false" @click="store.increment"> Increment </q-btn>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from 'src/stores/example-store';

const store = useCounterStore();

const counter = computed(() => store.counter);
</script>
