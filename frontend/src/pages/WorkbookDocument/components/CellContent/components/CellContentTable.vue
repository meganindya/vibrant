<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref, toRefs } from 'vue';

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

const { data } = toRefs(props);

// -----------------------------------------------------------------------------

const html = ref('');

onMounted(() => {
  html.value = markdownToHtml(data.value.md);
});
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper-content-text">
    <div class="content markdown-body" v-html="html"></div>
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
