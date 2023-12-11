<!-- == SCRIPT ============================================================= -->

<script setup>
import { computed, toRefs } from 'vue';

import CellContent from '../CellContent/CellContent.vue';
import CellHeader from '../CellHeader/CellHeader.vue';

const props = defineProps({
  edit: {
    type: Boolean,
    default: false,
  },
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
    }),
  },
});

const { edit, data } = toRefs(props);

const emit = defineEmits(['contentMark', 'contentRemove', 'headerRemove']);

// -----------------------------------------------------------------------------

function flatten(node) {
  const items = [
    {
      uuid: node.uuid,
      type: `l${data.value.document.headers[node.uuid].level}`,
      info: data.value.document.headers[node.uuid].label,
      mark: data.value.nodes.headers[node.uuid],
    },
    ...node.deps.content.map((uuid) => ({
      uuid,
      type: 'ct',
      info: data.value.document.content[uuid],
      mark: data.value.nodes.content[uuid],
    })),
    ...node.deps.headers.map((node) => flatten(node)).reduce((a, b) => [...a, ...b], []),
  ];

  return items;
}

const items = computed(() => {
  const items = data.value.nodes.tree
    .map((node) => flatten(node))
    .reduce((a, b) => [...a, ...b], []);

  return items;
});
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <ul class="wrapper-list">
    <template v-for="({ uuid, type, info, mark }, i) in items" :key="i">
      <div :class="['cell-wrapper', `cw-${type}`]">
        <template v-if="type !== 'ct'">
          <CellHeader
            :id="`node-${uuid}`"
            :edit="edit"
            :type="type"
            :text="info"
            @remove="() => emit('headerRemove', uuid)"
          />
        </template>
        <template v-else>
          <CellContent
            :id="`node-${uuid}`"
            :edit="edit"
            :mark="mark"
            :type="info.type"
            :data="info.data"
            @mark="() => emit('contentMark', uuid)"
            @remove="() => emit('contentRemove', uuid)"
          />
        </template>
      </div>
    </template>
  </ul>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
.wrapper-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  width: 100%;
  margin: 0;
  padding: 0;

  .cell-wrapper {
    &.cw-l1 {
      padding-left: 0;
    }

    &.cw-l2 {
      padding-left: 16px;
    }

    &.cw-l3 {
      padding-left: 32px;
    }

    &.cw-ct {
      padding-left: 48px;
    }
  }
}
</style>
