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
      viewBox="0 0 18.2 13"
    >
      <path
        d="
          M 17.85 0.3
          a 1 1 0 0 1 0 1.4
          l -11 11
          a 1 1 0 0 1 -1.4 0
          l -5 -5
          a 1 1 0 1 1 1.4 -1.4
          l 4.3 4.29
          l 10.3 -10.3
          a 1 1 0 0 1 1.4 0
          Z
        "
      />
    </svg>
  </Icon>
</template>
