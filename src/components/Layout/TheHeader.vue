<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="title">calc</div>
    <BaseThemeControl />
  </header>
</template>

<style lang="scss" scoped>
.header {
  @include flex(1rem);
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
}

.title {
  font-size: $fs;
  color: $text-white;
}
</style>
