<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import {} from "./TheHeader.vue";

const props = defineProps({
  inputVal: String,
});
const { inputVal } = toRefs(props);
</script>

<template>
  <div class="bg text-white" type="text">{{ inputVal }}</div>
</template>

<style lang="scss" scoped>
div {
  appearance: none;
  outline: none;
  width: 100%;
  padding: 1rem 1.6rem;
  font: inherit;
  font-size: 40px;
  border: 0;
  background-color: $screen-bg;
  border-radius: 8px;
  text-align: right;
}
</style>
