<!-- == SCRIPT ============================================================= -->

<script setup>
import { toRefs } from 'vue';

import { Navbar } from '@/components';
import Tree from './Tree/Tree.vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      document: {
        headers: {},
        content: {},
      },
      nodes: {
        headers: {},
        content: {},
        tree: [],
      },
      graph: {
        nodes: {},
        edges: {
          level1: [],
          level2: [],
          level3: [],
          level4: [],
        },
      },
    }),
  },
});

const { data } = toRefs(props);

const emit = defineEmits(['navigate']);
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="page">
    <div class="navbar-wrapper">
      <Navbar :show-btns="true" @navigate="(page) => emit('navigate', page)" />
    </div>

    <div class="content-wrapper">
      <div class="content-inner-wrapper">
        <Tree :data="data" />
      </div>
    </div>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';

.page {
  position: relative;

  width: 100%;
  height: 100vh;
  font-family: 'Inter', sans-serif;

  .navbar-wrapper {
    position: absolute;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .content-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;

    display: grid;
    place-items: center;

    .content-inner-wrapper {
      width: 960px;
      margin: 0 auto;
      padding: 16px;
    }
  }
}
</style>
