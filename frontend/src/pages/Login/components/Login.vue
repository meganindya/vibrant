<!-- == SCRIPT ============================================================= -->

<script setup>
import { ref, toRefs, watch } from 'vue';

import { IconLogo } from '@/icons';

const props = defineProps({
  error: {
    type: Boolean,
    default: false,
  },
});
const { error } = toRefs(props);

const emit = defineEmits(['submit']);

// -----------------------------------------------------------------------------

const username = ref('');
const password = ref('');

function handlerSubmit() {
  if (username.value.length === 0 || password.value.length === 0) return;

  emit('submit', username.value, password.value);
}

watch(error, (value) => {
  if (value === true) {
    username.value = '';
    password.value = '';
  }
});
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="page">
    <div class="wrapper">
      <div class="logo">
        <IconLogo />
      </div>

      <form
        class="form-wrapper"
        @submit="
          (e) => {
            e.preventDefault();
            e.stopPropagation();
            handlerSubmit();
          }
        "
      >
        <p v-if="error" class="form-error vb-font-primary-label-md">
          {{ 'Invalid Username or Password' }}
        </p>

        <input
          type="text"
          placeholder="Username"
          class="input-text vb-font-primary-body-md"
          v-model="username"
        />

        <input
          type="password"
          placeholder="Password"
          class="input-text vb-font-primary-body-md"
          v-model="password"
        />

        <button class="btn-login vb-font-primary-body-md" @click="handlerSubmit">
          {{ 'Login' }}
        </button>
      </form>
    </div>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';

.page {
  display: grid;
  place-items: center;

  width: 100%;
  height: 100vh;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    padding-bottom: 192px;

    .icon {
      width: 48px;
      height: 48px;
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 32px;

      width: 256px;

      .form-error {
        margin: 0;
        padding: 8px 16px;
        border: 1px solid $--c-ui-danger;
        border-radius: 4px;

        text-align: center;
        color: $--c-ui-danger;
      }

      .input-text {
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

      .btn-login {
        margin: 0;
        padding: 0;
        border: none;
        outline: unset;
        background-color: unset;

        padding: 8px;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
        background-color: $--c-bg-brand;

        cursor: pointer;
        transition: background-color 0.25s ease;

        &:hover {
          background-color: darken(#0652dd, 10%);
        }

        &:focus-visible {
          outline: 2px solid #0652dd;
          outline-offset: 2px;
        }
      }
    }
  }
}
</style>
