<script setup>
import Icon from './Icon.vue';
</script>

<template>
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="$attrs.width || '16'"
      :height="$attrs.height || '16'"
      :fill="$attrs.fill || 'inherit'"
      viewBox="0 0 8 8"
    >
      <path
        d="
          M 4.62 0.62
          a 0.61 0.61 0 1 0 -1.24 0
          v 2.76
          h -2.76
          a 0.61 0.61 0 1 0 0 1.24
          h 2.76
          v 2.76
          a 0.61 0.61 0 1 0 1.24 0
          v -2.76
          h 2.76
          a 0.61 0.61 0 1 0 0 -1.24
          h -2.76
          v -2.76
          Z
        "
      />
    </svg>
  </Icon>
</template>
