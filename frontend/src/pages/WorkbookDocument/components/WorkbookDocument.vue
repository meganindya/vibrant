<!-- == SCRIPT ============================================================= -->

<script setup lang="ts">
import { ref, toRefs } from 'vue';

import { Navbar } from '@/components';
import WorkbookDocumentList from './WorkbookDocumentList/WorkbookDocumentList.vue';
import Beads from './Beads/Beads.vue';
import Notes from './Notes/Notes.vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => undefined,
  },
});

const { data } = toRefs(props);

const emit = defineEmits([
  'navigate',
  'noteAdd',
  'noteSave',
  'noteRemove',
  'contentMark',
  'contentRemove',
  'headerRemove',
]);

// -----------------------------------------------------------------------------

const edit = ref(false);

// -----------------------------------------------------------------------------

const documentListElem = ref();
const scrollPos = ref(0);

function handlerFind(uuid) {
  const top = document.getElementById(`node-${uuid}`)?.getBoundingClientRect().top || 0;
  scrollPos.value = scrollPos.value + top;

  documentListElem.value.scroll({
    top: scrollPos.value,
    behavior: 'smooth',
  });
}
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="page">
    <div class="navbar-wrapper">
      <Navbar :show-btns="true" @navigate="(page) => emit('navigate', page)" />
    </div>

    <div class="beads-wrapper">
      <Beads :data="data" @find="handlerFind" />
    </div>

    <div class="notes-wrapper">
      <Notes
        :items="data"
        @add="() => emit('noteAdd')"
        @save="(i, note) => emit('noteSave', i, note)"
        @remove="(i) => emit('noteRemove', i)"
      />
    </div>

    <div class="content-wrapper" ref="documentListElem">
      <div class="content-inner-wrapper">
        <div class="wrapper-document">
          <div class="cell-list-wrapper">
            <WorkbookDocumentList
              :edit="edit"
              :data="data"
              @content-mark="(uuid) => emit('contentMark', uuid)"
              @content-remove="(uuid) => emit('contentRemove', uuid)"
              @header-remove="(uuid) => emit('headerRemove', uuid)"
            />
          </div>
        </div>
      </div>
    </div>

    <button class="btn-edit vb-font-primary-label-md" @click="() => (edit = !edit)">
      {{ edit ? 'Save' : 'Edit' }}
    </button>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';
@import '@/theme/sizes';

.page {
  position: relative;

  width: 100%;
  height: 100vh;
  font-family: 'Inter', sans-serif;

  .navbar-wrapper {
    position: absolute;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .beads-wrapper {
    position: absolute;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 56px;

    overflow-y: auto;
  }

  .notes-wrapper {
    position: absolute;
    z-index: 1000;
    top: 0;
    bottom: 0;
    right: 24px;

    overflow-y: auto;
  }

  .content-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;

    display: grid;
    place-items: center;

    .content-inner-wrapper {
      width: 960px;
      margin: 0 auto;
      padding: 16px;
    }
  }

  .btn-edit {
    position: absolute;
    top: 16px;
    left: 196px;

    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: unset;

    padding: 8px 16px;
    border-radius: $--s-border-radius-md;
    background-color: $--c-bg-grey;

    cursor: pointer;
  }
}

.wrapper-document {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  box-sizing: border-box;

  :deep(*) {
    box-sizing: border-box;
  }

  .cell-list-wrapper {
    width: 800px;
    margin: 0 auto;
    padding: 4px;
    background-color: #fcfcfc;
  }
}
</style>
