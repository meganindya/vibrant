<!-- == SCRIPT ============================================================= -->

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['action']);

// -----------------------------------------------------------------------------

const name = ref('');
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper">
    <div class="content">
      <input type="text" placeholder="User Name" v-model="name" />
    </div>

    <div class="control">
      <button
        class="control-btn control-btn-submit vb-font-primary-label-md"
        @click="
          () => {
            if (name.length === 0) return;
            emit('action', 'submit', {
              name,
            });
          }
        "
      >
        {{ 'OK' }}
      </button>

      <button
        class="control-btn control-btn-cancel vb-font-primary-label-md"
        @click="() => emit('action', 'cancel')"
      >
        {{ 'Cancel' }}
      </button>
    </div>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';
@import '@/theme/sizes';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  width: 256px;
  padding: 16px;
  border-radius: $--s-border-radius-md;

  background-color: $--c-bg-white;

  .content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;

    input {
      border: none;
      outline: none;

      padding: 8px 16px;
      border-radius: 4px;
      outline: 1px solid #ccc;
      color: $--c-fg-brand;
      transition: all 0.25s ease;

      &:focus,
      &:focus-visible {
        outline: 1px solid $--c-bg-brand;
      }
    }
  }

  .control {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    .control-btn {
      margin: 0;
      padding: 0;
      border: none;
      outline: unset;
      background-color: unset;

      padding: 8px 16px;
      border-radius: $--s-border-radius-md;

      transition: all 0.25s ease;
      cursor: pointer;

      &.control-btn-submit {
        color: $--c-fg-white;
        background-color: $--c-bg-brand;

        &:hover {
          background-color: darken(#0652dd, 10%);
        }
      }

      &.control-btn-cancel {
        color: $--c-fg-black;
        background-color: $--c-bg-pale;

        &:hover {
          background-color: $--c-bg-grey;
        }
      }
    }
  }
}
</style>
