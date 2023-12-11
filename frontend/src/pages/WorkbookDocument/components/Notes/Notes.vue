<!-- == SCRIPT ============================================================= -->

<script setup>
import { toRefs } from 'vue';

import { IconPlus } from '@/icons';
import Note from './Note.vue';

const props = defineProps({
  items: {
    type: Object,
    default: () => ({
      notes: [],
    }),
  },
});

const { items } = toRefs(props);

// -----------------------------------------------------------------------------

const emit = defineEmits(['add', 'save', 'remove']);
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper">
    <ul class="notes">
      <template v-for="({ content }, i) in items.notes" :key="i">
        <li class="note">
          <Note
            :content="content"
            @save="(note) => emit('save', i, note)"
            @remove="() => emit('remove', i)"
          />
        </li>
      </template>
    </ul>

    <button class="btn btn-plus" @click="() => emit('add')">
      <IconPlus class="btn-icon" />
    </button>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';
@import '@/theme/sizes';

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 256px;
  height: 100%;
  padding: 16px;

  background-color: $--c-bg-grey;

  .notes {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;

    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    .note {
      width: 100%;
    }
  }

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

    &.btn-plus {
      :deep(svg) {
        width: 100%;
        height: 100%;

        path {
          fill: $--c-ui-info;
        }
      }
    }
  }
}
</style>
