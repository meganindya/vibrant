<!-- == SCRIPT ============================================================= -->

<script setup>
import { toRefs } from 'vue';

import { IconCheck, IconTimes } from '@/icons';
import CellContentText from './components/CellContentText.vue';
import CellContentTable from './components/CellContentTable.vue';
import CellContentTrivia from './components/CellContentTrivia.vue';
import CellContentImage from './components/CellContentImage.vue';
import CellContentImageText from './components/CellContentImageText.vue';

const props = defineProps({
  edit: {
    type: Boolean,
    default: false,
  },
  mark: {
    type: Boolean,
    default: false,
  },

  type: {
    type: String,
    default: undefined,
  },
  data: {
    type: Object,
    default: undefined,
  },
});

const { edit, mark, type, data } = toRefs(props);

// -----------------------------------------------------------------------------

const emit = defineEmits(['mark', 'remove']);
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper">
    <button v-if="!edit" class="btn btn-check" @click="() => emit('mark')">
      <IconCheck class="btn-icon" v-if="mark" />
    </button>

    <button v-if="edit" class="btn btn-times" @click="() => emit('remove')">
      <IconTimes class="btn-icon" />
    </button>

    <template v-if="type === 'text'">
      <CellContentText :edit="edit" :data="data" />
    </template>
    <template v-if="type === 'table'">
      <CellContentTable :edit="edit" :data="data" />
    </template>
    <template v-if="type === 'trivia'">
      <CellContentTrivia :edit="edit" :data="data" />
    </template>
    <template v-if="type === 'image'">
      <CellContentImage :edit="edit" :data="data" />
    </template>
    <template v-if="type === 'image-text'">
      <CellContentImageText :edit="edit" :data="data" />
    </template>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';
@import '@/theme/sizes';

.wrapper {
  position: relative;

  width: 100%;
  padding: 16px;
  border: 1px solid $--c-border-pale;
  border-radius: $--s-border-radius-md;

  background-color: #fff !important;

  .btn {
    width: 24px;
    height: 24px;

    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: unset;

    border: 2px solid $--c-border-pale;
    border-radius: 50%;
    background-color: $--c-bg-white;

    cursor: pointer;

    .btn-icon {
      width: 100%;
      height: 100%;
      padding: 4px;

      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }

    &.btn-check {
      position: absolute;
      top: -8px;
      left: -8px;

      :deep(svg) {
        width: 100%;
        height: 100%;

        path {
          fill: $--c-ui-success;
        }
      }
    }

    &.btn-times {
      position: absolute;
      top: -8px;
      right: -8px;

      :deep(svg) {
        width: 100%;
        height: 100%;

        path {
          fill: $--c-ui-danger;
        }
      }
    }
  }

  .icon {
    flex-grow: 0;
    flex-shrink: 0;

    width: 32px;
    height: 32px;
  }
}
</style>
