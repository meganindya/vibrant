<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref, toRefs, watch } from 'vue';

import { IconBulb } from '@/icons';

import markdownToHtml from '@wcj/markdown-to-html';

const props = defineProps({
  edit: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => ({
      md: '',
    }),
  },
});

const { edit, data } = toRefs(props);

// -----------------------------------------------------------------------------

const html = ref('');

onMounted(() => {
  html.value = markdownToHtml(data.value.md);
});

const content = ref('');

watch(edit, (value) => {
  if (value === false) return;

  content.value = data.value.md;
});

// -----------------------------------------------------------------------------

const textareaElem = ref();

function textareaResize() {
  textareaElem.value.style.height = `${textareaElem.value.scrollHeight}px`;
}

watch(content, () => setTimeout(() => textareaResize()));
onMounted(() => {
  if (edit.value === false) return;
  setTimeout(() => textareaResize());
});
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper-content-trivia wrapper-info">
    <div class="icon">
      <IconBulb />
    </div>

    <template v-if="!edit">
      <div class="content markdown-body" v-html="html"></div>
    </template>

    <template v-else>
      <textarea
        class="content textarea vb-font-primary-body-lg"
        v-model="content"
        ref="textareaElem"
        @input="textareaResize"
      />
    </template>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';
@import '@/theme/sizes';
@import '@/theme/markdown';

.wrapper-content-trivia {
  width: 100%;
  padding: 8px;

  &.wrapper-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    border: unset;
    background-color: #fccd72 !important;

    * {
      background-color: unset !important;
    }

    .icon {
      flex-grow: 0;
      flex-shrink: 0;

      width: 32px;
      height: 32px;

      :deep(svg) {
        width: 100%;
        height: 100%;

        path {
          fill: white;
        }
      }
    }

    .content {
      flex-grow: 0;
      flex-shrink: 1;
      width: 100%;
    }

    textarea {
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      background-color: unset;

      width: 100%;
      resize: none;
    }
  }
}
</style>
