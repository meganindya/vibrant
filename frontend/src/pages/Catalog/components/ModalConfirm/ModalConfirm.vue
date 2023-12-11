<!-- == SCRIPT ============================================================= -->

<script setup>
const emit = defineEmits(['action']);
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper">
    <div class="content">
      <p class="vb-font-primary-body-md">
        {{ 'Are you sure?' }}
      </p>
    </div>

    <div class="control">
      <button
        class="control-btn control-btn-submit vb-font-primary-label-md"
        @click="() => emit('action', 'submit')"
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
    p {
      margin: 0;
      color: $--c-fg-brand;
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
