<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import PageCatalog from './components/Catalog.vue';

import {
  workbookList,
  workbookCreate,
  workbookCopy,
  workbookShare,
  workbookDelete,
} from '@/services';

const router = useRouter();

// -----------------------------------------------------------------------------

const items = ref({
  owned: [],
  shared: [],
});

async function workbookListLoad() {
  const { data, error } = await workbookList();

  if (error) return;

  items.value = data;
}

onMounted(() => workbookListLoad());

// -----------------------------------------------------------------------------

async function handlerCopy(i, list) {
  await workbookCopy({ name: items.value[list][i].name });
  await workbookListLoad();
}

async function handlerShare(i, { name }) {
  await workbookShare({ workbook: items.value.owned[i].name, username: name });
  await workbookListLoad();
}

async function handlerDelete(i) {
  await workbookDelete({ name: items.value.owned[i].name });
  await workbookListLoad();
}

async function handlerCreate({ name }) {
  await workbookCreate({ name });
  await workbookListLoad();
}

// -----------------------------------------------------------------------------

function handlerOpen(i, list) {
  router.push({
    name: 'Workbook Tree',
    params: {
      uuid: items.value[list][i].uuid,
    },
  });
}
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <PageCatalog
    :items="items"
    @open="handlerOpen"
    @copy="handlerCopy"
    @share="handlerShare"
    @delete="handlerDelete"
    @create="handlerCreate"
  />
</template>
