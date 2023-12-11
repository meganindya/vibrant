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
      viewBox="0 0 14 18"
    >
      <path
        d="
          M 1 16
          c 0 1.1 0.9 2 2 2
          h 8
          a 2 2 0 0 0 2 -2
          v -12
          h -12
          v 12
          Z
          M 14 1
          h -3.5
          l -1 -1
          h -5
          l -1 1
          h -3.5
          v 2
          h 14
          v -2
          Z
        "
      />
    </svg>
  </Icon>
</template>
