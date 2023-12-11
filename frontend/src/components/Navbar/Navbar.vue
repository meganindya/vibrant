<!-- == SCRIPT ============================================================= -->

<script setup>
import { toRefs } from 'vue';

import { IconLogo, IconList, IconDocument, IconGraph } from '@/icons';

const props = defineProps({
  showBtns: {
    type: Boolean,
    default: false,
  },
});

const { showBtns } = toRefs(props);

const emit = defineEmits(['navigate']);
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper">
    <div class="sec sec-top">
      <div class="logo">
        <IconLogo />
      </div>

      <button v-if="showBtns" class="btn-icon" @click="() => emit('navigate', 'catalog')">
        <IconList />
      </button>
    </div>

    <div class="sec sec-mid">
      <button v-if="showBtns" class="btn-icon" @click="() => emit('navigate', 'tree')">
        <IconGraph />
      </button>
      <button v-if="showBtns" class="btn-icon" @click="() => emit('navigate', 'document')">
        <IconDocument />
      </button>
    </div>

    <div class="sec sec-bot">
      <div class="user">
        <div class="user-initials">AK</div>
      </div>
    </div>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 48px;

  box-sizing: border-box;
  height: 100%;
  padding: 16px 8px;
  background-color: white;

  box-shadow: 0 0 2px 4px #eee;

  .sec {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .logo {
    width: 32px;
    height: 32px;
  }

  .btn-icon {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: unset;

    width: 24px;
    height: 24px;

    cursor: pointer;

    :deep(svg) {
      path {
        fill: #0652dd;
      }
    }
  }

  .user {
    display: grid;
    place-items: center;

    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #0652dd;

    .user-initials {
      font-size: 12px;
      font-weight: bold;
      color: white;
    }
  }
}
</style>
