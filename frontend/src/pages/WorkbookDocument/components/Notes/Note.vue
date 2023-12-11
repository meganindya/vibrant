<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref, toRefs, watch } from 'vue';

import { IconTimes } from '@/icons';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
});

const { content } = toRefs(props);

const emit = defineEmits(['save', 'remove']);

// -----------------------------------------------------------------------------

const contentDirty = ref(false);
const contentInternal = ref('');

watch(content, (value) => {
  contentInternal.value = value;
});

onMounted(() => {
  contentInternal.value = content.value;
});

watch(contentInternal, (value) => {
  contentDirty.value = value !== content.value;
});

// -----------------------------------------------------------------------------

const textElem = ref();

function handlerResize() {
  textElem.value.style.height = `${textElem.value.scrollHeight}px`;
}

watch(contentInternal, () => setTimeout(() => handlerResize()));
onMounted(() => setTimeout(() => handlerResize()));
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper-note">
    <button class="btn btn-times" @click="() => emit('remove')">
      <IconTimes class="btn-icon" />
    </button>

    <textarea
      type="text"
      class="text vb-font-primary-body-md"
      v-model="contentInternal"
      ref="textElem"
      @input="handlerResize"
    />

    <button
      class="btn-save vb-font-primary-label-md"
      v-if="contentDirty"
      @click="() => emit('save', contentInternal)"
    >
      {{ 'Save' }}
    </button>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';
@import '@/theme/sizes';

.wrapper-note {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  box-sizing: border-box;
  width: 100%;
  padding: 16px;

  border: 1px solid $--c-border-pale;
  border-radius: $--s-border-radius-md;
  background-color: $--c-bg-white;

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

  .text {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: unset;

    color: $--c-fg-brand;
    resize: none;
  }

  .btn-save {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: unset;

    padding: 4px;
    border-radius: $--s-border-radius-md;
    color: $--c-fg-white;
    background-color: $--c-bg-dark;
  }
}
</style>
