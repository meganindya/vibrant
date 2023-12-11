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
      viewBox="0 0 14.66 14.66"
    >
      <path
        d="
          M 2 1.33
          a 0.67 0.67 0 0 0 -0.67 0.67
          v 6
          a 0.67 0.67 0 0 0 0.67 0.66
          h 0.66
          a 0.67 0.67 0 1 1 0 1.34
          h -0.66
          a 2 2 0 0 1 -2 -2
          v -6
          a 2 2 0 0 1 2 -2
          h 6
          a 2 2 0 0 1 2 2
          v 0.66
          a 0.67 0.67 0 0 1 -1.34 0
          v -0.66
          a 0.67 0.67 0 0 0 -0.66 -0.67
          h -6
          Z
          M 6.66 6
          c -0.37 0 -0.66 0.3 -0.66 0.66
          v 6
          c 0 0.37 0.3 0.67 0.66 0.67
          h 6
          c 0.37 0 0.67 -0.3 0.67 -0.67
          v -6
          c 0 -0.36 -0.3 -0.66 -0.67 -0.66
          h -6
          Z
          M 4.66 6.66
          c 0 -1.1 0.9 -2 2 -2
          h 6
          a 2 2 0 0 1 2 2
          v 6
          a 2 2 0 0 1 -2 2
          h -6
          a 2 2 0 0 1 -2 -2
          v -6
          Z
        "
      />
    </svg>
  </Icon>
</template>
