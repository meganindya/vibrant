<!-- == SCRIPT ============================================================= -->

<script setup lang="ts"></script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <RouterView class="vb-theme"></RouterView>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss">
@import '@fontsource-variable/inter';

@import '@/theme/font.css';
@import '@/theme/colors.css';
@import '@/theme/layout.css';

*,
*::before,
*::after {
  box-sizing: border-box;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  margin: 0;

  line-height: 1.6;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  #app {
    position: relative;
    width: 100%;
  }
}
</style>
