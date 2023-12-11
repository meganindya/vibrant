<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref, toRefs, watch } from 'vue';

import { IconTimes } from '@/icons';

import markdownToHtml from '@wcj/markdown-to-html';

const props = defineProps({
  edit: {
    type: Boolean,
    default: false,
  },

  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'l1',
  },
});

const { edit, text, type } = toRefs(props);

const emit = defineEmits(['remove']);

// -----------------------------------------------------------------------------

const content = ref('');

onMounted(() => {
  const level =
    {
      l1: 1,
      l2: 2,
      l3: 3,
    }[type.value] + 1;

  content.value = markdownToHtml(
    `${[...new Array(level).keys()].map(() => '#').join('')} ${text.value.trim()}`,
  );
});

// -----------------------------------------------------------------------------

const textInternal = ref('');

onMounted(() => {
  textInternal.value = text.value;
});

watch(text, () => {
  textInternal.value = text.value;
});
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div :class="['wrapper']">
    <button v-if="edit" class="btn btn-times" @click="() => emit('remove')">
      <IconTimes class="btn-icon" />
    </button>

    <template v-if="!edit">
      <div :class="['content', 'markdown-body', `header-${type}`]" v-html="content"></div>
    </template>

    <template v-else>
      <input
        type="text"
        :class="['edit', 'content', 'markdown-body', `header-${type}`]"
        v-model="text"
      />
    </template>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';

.wrapper {
  position: relative;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background-color: #f3f3f3;

  font-family: 'Inter', sans-serif;

  * {
    background-color: #f3f3f3;
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

  .content {
    margin: 0;

    &.header-l1 {
      text-transform: uppercase;
      color: #424ca5;

      :deep(h2) {
        margin: 0;
        border-bottom: none !important;
        padding-bottom: 0;
        color: #424ca5;
      }
    }

    &.header-l2 {
      color: #5e6ceb;

      :deep(h3) {
        margin: 0;
        border-bottom: none !important;
        padding-bottom: 0;
        color: #5e6ceb;
      }
    }

    &.header-l3 {
      font-style: italic;

      :deep(h4) {
        margin: 0;
        border-bottom: none !important;
        padding-bottom: 0;
        font-style: italic;
      }
    }

    &.edit {
      margin: 0;
      padding: 0;
      border: none;
      outline: none;

      &.header-l1 {
        font-size: 24px;
        font-weight: bold;
      }

      &.header-l2 {
        font-size: 18.72px;
        font-weight: bold;
      }

      &.header-l3 {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
