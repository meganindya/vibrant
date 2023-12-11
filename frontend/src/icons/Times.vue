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
      viewBox="0 0 14 14"
    >
      <path
        d="
          M 13.66 0.33
          a 1 1 0 0 1 0 1.4
          l -12 12
          a 1 1 0 0 1 -1.4 -1.4
          l 12 -12
          a 1 1 0 0 1 1.4 0
          Z
          M 0.33 0.33
          a 1 1 0 0 1 1.4 0
          l 12 12
          a 1 1 0 0 1 -1.4 1.4
          l -12 -12
          a 1 1 0 0 1 0 -1.4
          Z
        "
      />
    </svg>
  </Icon>
</template>
