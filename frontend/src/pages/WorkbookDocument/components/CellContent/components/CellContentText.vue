<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref, toRefs, watch } from 'vue';

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
  <div class="wrapper-content-text">
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

<style lang="scss">
@import '@/theme/colors';
@import '@/theme/sizes';
@import '@/theme/markdown';

.wrapper-content-text {
  width: 100%;

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
</style>
