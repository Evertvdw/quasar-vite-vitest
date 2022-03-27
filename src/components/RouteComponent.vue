<template>
  <div>
    {{ $route.fullPath }}
    <q-btn :ripple="false" @click="$router.push('/hoi')"> Router push </q-btn>
  </div>
</template>

<script lang="ts" setup></script>
