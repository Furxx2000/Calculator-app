<template>
  <main class="calculator">
    <TheHeader />
    <TheDisplayWindow :inputVal="inputVal.curVal" />
    <TheKeypad @get-key="getKey" />
  </main>
</template>

<script setup lang="ts">
import {} from "./MainCalculator.vue";
import { reactive } from "vue";

interface input {
  curVal: string;
  storedVal: number[];
}

const inputVal = reactive<input>({
  curVal: "",
  storedVal: [],
});

function getKey(val: string) {
  if (val === "+") {
    inputVal.storedVal.push(+inputVal.curVal);
    inputVal.curVal = "";
    return;
  }
  if (val === "=") {
    inputVal.storedVal.push(+inputVal.curVal);
    let result: number = 0;
    inputVal.storedVal.forEach((v: number) => {
      result += v;
      console.log(result);
      inputVal.curVal = result.toString();
    });
    inputVal.storedVal = [];
    return;
  }
  if (val === "del") {
    inputVal.curVal = "";
    return;
  }
  if (val == "reset") {
    inputVal.curVal = "";
    inputVal.storedVal = [];
    return;
  }
  inputVal.curVal += val;
}
</script>

<style lang="scss" scoped>
.calculator {
  height: 100vh;
  margin: 0 auto;
  grid-template-rows: 1fr 2fr 9fr;
  @include container(2rem, 1.5rem, 40rem);
  @include grid(1.5rem);
  @include desktop {
    @include container(10rem, 1.5rem, 35rem);
  }
}
</style>
