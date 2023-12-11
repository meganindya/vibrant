<!-- == SCRIPT ============================================================= -->

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  edit: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => ({
      url: '',
    }),
  },
});

const { data } = toRefs(props);
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="wrapper-content-image">
    <img :src="data.url" />
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';
@import '@/theme/sizes';

.wrapper-content-image {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
