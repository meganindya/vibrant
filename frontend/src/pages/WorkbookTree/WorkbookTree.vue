<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import PageWorkbookTree from './components/WorkbookTree.vue';

import { workbookGetDocument, workbookGetNodes, workbookGetGraph } from '@/services';

const route = useRoute();
const router = useRouter();

// -----------------------------------------------------------------------------

function handlerNavigate(page) {
  if (page === 'catalog') {
    router.push({
      name: 'Catalog',
    });
  } else {
    if (
      (route.name === 'Workbook Tree' && page === 'tree') ||
      (route.name === 'Workbook Document' && page === 'document')
    )
      return;

    router.push({
      name: page === 'tree' ? 'Workbook Tree' : 'Workbook Document',
      params: {
        uuid: route.params.uuid,
      },
    });
  }
}

// -----------------------------------------------------------------------------

const data = ref();

async function dataLoad() {
  const [document, nodes, graph] = await Promise.all([
    workbookGetDocument().then(({ data }) => data),
    workbookGetNodes().then(({ data }) => data),
    workbookGetGraph().then(({ data }) => data),
  ]);
  data.value = {
    document,
    nodes,
    graph,
  };
}

onMounted(() => dataLoad());
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <PageWorkbookTree @navigate="handlerNavigate" :data="data" />
</template>
