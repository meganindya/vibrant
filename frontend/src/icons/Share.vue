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
      viewBox="0 0 10.1 9"
    >
      <path
        d="
          M 5.715 0
          v 2.8281
          c -3.0797 0 -5.6934 2.5416 -5.6934 6.1719
          c 1.886 -2.6269 2.592 -3.3429 5.6934 -3.3429
          v 2.8281
          l 4.3614 -4.2442
          l -4.3614 -4.2411
          Z
        "
      />
    </svg>
  </Icon>
</template>
