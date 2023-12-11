<!-- == SCRIPT ============================================================= -->

<script setup>
const props = defineProps({
  // TODO: make this number type
  height: null,
  width: null,
});

// prettier-ignore
// eslint-disable-next-line semi
console.log();
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div
    class="icon"
    :style="{
      ...(props.width ? { width: `${props.width}px` } : {}),
      ...(props.height ? { height: `${props.height}px` } : {}),
    }"
  >
    <slot />
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss">
.icon {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  > * {
    width: 100%;
    height: 100%;
  }
}
</style>
