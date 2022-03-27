<template>
  <q-btn @click="onClick"> Click me! </q-btn>
</template>

<script lang="ts" setup>
const $q = useQuasar();

function onClick() {
  $q.notify('Hello hai!');
}
</script>
