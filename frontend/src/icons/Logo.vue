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
      viewBox="0 0 64 64"
    >
      <path
        d="
          M 0 0
          l 32 64
          l 2.5 -5
          l -29.5 -59
          Z
        "
        fill="#0652DD"
      />
      <path
        d="
          M 9 0
          l 27.5 55
          l 2.5 -5
          l -25 -50
          Z
        "
        fill="#009432"
      />

      <path
        d="
          M 41 46
          l -2.5 -5
          l 20.5 -41
          l 5 0
          Z
        "
        fill="#009432"
      />
      <path
        d="
          M 36.5 37
          l -2.5 -5
          l 16 -32
          l 5 0
          Z
        "
        fill="#0652DD"
      />

      <path
        d="
          M 41 0
          l 5 0
          l -14 28
          l -14 -28
          l 5 0
          l 9 18
          Z
        "
        fill="#ED4C67"
      />
    </svg>
  </Icon>
</template>
