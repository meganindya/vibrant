<!-- == SCRIPT ============================================================= -->

<script setup>
import { computed, toRefs } from 'vue';

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
    }),
  },
});

const { data } = toRefs(props);

const emit = defineEmits(['find']);

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
      mark: data.value.nodes.content[uuid],
    })),
    ...node.deps.headers.map((node) => flatten(node)).reduce((a, b) => [...a, ...b], []),
  ];

  return items;
}

const beads = computed(() => {
  const items = data.value.nodes.tree
    .map((node) => flatten(node))
    .reduce((a, b) => [...a, ...b], []);

  return items;
});
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper">
    <ul class="beads">
      <template v-for="({ uuid, type, info, mark }, i) in beads" :key="i">
        <li class="bead" :title="info" @click="() => emit('find', uuid)">
          <button :class="['bead-btn', mark && 'bead-btn-mark', `bead-btn-${type}`]"></button>
        </li>
      </template>
    </ul>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';
@import '@/theme/sizes';

.wrapper {
  position: relative;

  width: 100%;
  padding: 16px;
  border: 1px solid $--c-border-pale;
  border-radius: $--s-border-radius-md;

  background-color: #fff !important;

  .beads {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    margin: 0;
    padding: 0;
    list-style: none;

    .bead {
      position: relative;
      display: grid;
      place-items: center;

      width: 24px;
      height: 24px;

      &:not(&:last-child) {
        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          content: '';

          width: 4px;
          height: 32px;
          background-color: $--c-border-grey;
        }
      }

      .bead-btn {
        position: relative;
        z-index: 100;

        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: unset;

        border-radius: 50%;
        background-color: $--c-bg-white;
        cursor: pointer;

        &.bead-btn-ct {
          width: 12px;
          height: 12px;

          outline-offset: -2px;
          outline: 2px solid $--c-bg-dark;
        }

        &.bead-btn-l1 {
          width: 24px;
          height: 24px;

          outline-offset: -2px;
          outline: 2px solid rgb(72, 72, 212);
        }

        &.bead-btn-l2 {
          width: 20px;
          height: 20px;

          outline-offset: -2px;
          outline: 2px solid rgb(106, 176, 76);
        }

        &.bead-btn-l3 {
          width: 16px;
          height: 16px;

          outline-offset: -2px;
          outline: 2px solid rgb(240, 147, 43);
        }

        &.bead-btn-mark {
          &.bead-btn-ct {
            background-color: $--c-bg-dark;
          }

          &.bead-btn-l1 {
            background-color: rgb(72, 72, 212);
          }

          &.bead-btn-l2 {
            background-color: rgb(106, 176, 76);
          }

          &.bead-btn-l3 {
            background-color: rgb(240, 147, 43);
          }
        }
      }
    }
  }
}
</style>
