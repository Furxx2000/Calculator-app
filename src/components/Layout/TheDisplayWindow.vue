<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import { computed, ref } from "vue";
import {} from "./TheHeader.vue";

interface Props {
  inputVal: string;
}

const props = defineProps<Props>();
const { inputVal } = toRefs(props);
const val = computed(() => {
  return new Intl.NumberFormat("zh-TW", { maximumSignificantDigits: 7 }).format(
    +inputVal.value
  );
});
</script>

<template>
  <div class="bg text-white" type="text">{{ val }}</div>
</template>

<style lang="scss" scoped>
div {
  display: grid;
  align-items: center;
  appearance: none;
  outline: none;
  width: 100%;
  padding-inline: 1.6rem;
  padding-top: 0.5rem;
  font: inherit;
  font-size: 40px;
  border: 0;
  background-color: $screen-bg;
  border-radius: 8px;
  text-align: right;
}
</style>
