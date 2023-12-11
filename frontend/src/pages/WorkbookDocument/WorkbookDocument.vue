<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import PageWorkbookDocument from './components/WorkbookDocument.vue';

import {
  workbookGetDocument,
  workbookGetNodes,
  workbookGetNotes,
  workbookNoteAdd,
  workbookNoteSave,
  workbookNoteRemove,
  workbookContentMark,
  workbookContentRemove,
  workbookHeaderRemove,
} from '@/services';

const route = useRoute();
const router = useRouter();

// -----------------------------------------------------------------------------

const data = ref();

async function dataLoad() {
  const [document, nodes, notes] = await Promise.all([
    workbookGetDocument().then(({ data }) => data),
    workbookGetNodes().then(({ data }) => data),
    workbookGetNotes().then(({ data }) => data),
  ]);

  data.value = {
    document,
    nodes,
    notes,
  };
}

onMounted(() => dataLoad());

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

async function handlerNoteAdd() {
  await workbookNoteAdd();
  await dataLoad();
}

async function handlerNoteSave(i, note) {
  await workbookNoteSave(i, note);
  await dataLoad();
}

async function handlerNoteRemove(i) {
  await workbookNoteRemove(i);
  await dataLoad();
}

// -----------------------------------------------------------------------------

async function handlerContentMark(uuid) {
  await workbookContentMark(uuid);
  await dataLoad();
}

async function handlerContentRemove(uuid) {
  await workbookContentRemove(uuid);
  await dataLoad();
}

async function handlerHeaderRemove(uuid) {
  await workbookHeaderRemove(uuid);
  await dataLoad();
}
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <PageWorkbookDocument
    :data="data"
    @navigate="handlerNavigate"
    @note-add="handlerNoteAdd"
    @note-save="handlerNoteSave"
    @note-remove="handlerNoteRemove"
    @content-mark="handlerContentMark"
    @content-remove="handlerContentRemove"
    @header-remove="handlerHeaderRemove"
  />
</template>
