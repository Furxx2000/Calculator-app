<script setup lang="ts">
import {} from "./BaseKey.vue";
import { reactive } from "vue";

interface themeControl {
  curTheme: number;
  theme: string[];
}

const themeSelector = reactive<themeControl>({
  curTheme: 0,
  theme: ["flex-start", "center", "flex-end"],
});

function changeTheme(): void {
  const themeSelect = document.querySelector(".bar") as HTMLDivElement;
  if (themeSelector.curTheme === 2) themeSelector.curTheme = 0;
  else themeSelector.curTheme++;
  themeSelect.style.justifyContent =
    themeSelector.theme[themeSelector.curTheme];
}
</script>

<template>
  <div class="theme-control">
    <h4 class="text-white uppercase">theme</h4>
    <div class="theme--panel">
      <div class="number">
        <span class="text-white">1</span>
        <span class="text-white">2</span>
        <span class="text-white">3</span>
      </div>
      <div class="bar bg-keypad">
        <div @click="changeTheme"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-control {
  @include flex(2rem);

  h4 {
    font-size: 12px;
    letter-spacing: 1.75px;
  }

  .theme--panel {
    width: 80px;

    .number {
      @include flex(0.5rem);
      justify-content: space-between;
      padding-inline: 0.5rem;
      @include fontSize($fs-200);
    }
  }
}
.bar {
  @include flex(0);
  width: 100%;
  border-radius: 24px;
  align-items: center;
  padding: 5px 5px;
  transition: all 0.5s ease-out;

  & > * {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: $bg-key-red;
  }
}
</style>
