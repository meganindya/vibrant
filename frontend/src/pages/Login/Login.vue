<!-- == SCRIPT ============================================================= -->

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import PageLogin from './components/Login.vue';

import { login } from '@/services';

const router = useRouter();

// -----------------------------------------------------------------------------

const error = ref(false);

async function handlerSubmit(username, password) {
  const { error: err } = await login({ username, password });

  if (err) {
    error.value = true;

    return;
  }

  router.push({
    name: 'Catalog',
  });
}
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <PageLogin :error="error" @submit="handlerSubmit" />
</template>
