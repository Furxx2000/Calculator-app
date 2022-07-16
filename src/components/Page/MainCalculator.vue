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
  lastOperator: string;
  storedVal: number[];
}

const inputVal = reactive<input>({
  curVal: "",
  lastOperator: "",
  storedVal: [],
});

function getKey(val: string) {
  if (val === "+" || val === "-" || val === "x" || val === "/") {
    inputVal.storedVal.push(+inputVal.curVal);
    inputVal.curVal = "";
    inputVal.lastOperator = val;
    return;
  }
  if (val === "del") {
    inputVal.curVal = "";
    return;
  }
  if (val === "reset") {
    inputVal.curVal = "";
    inputVal.lastOperator = "";
    inputVal.storedVal = [];
    return;
  }
  if (val === "=") {
    if (
      !inputVal.curVal ||
      !inputVal.lastOperator ||
      (inputVal.curVal === "0" && inputVal.storedVal[0] === 0)
    )
      return;
    calculate(+inputVal.curVal, inputVal.lastOperator);
    inputVal.curVal = inputVal.storedVal[0].toString().slice(0, 12);
    inputVal.lastOperator = "";
    inputVal.storedVal = [];
    return;
  }

  if (
    inputVal.curVal.length === 10 ||
    (inputVal.curVal === "0" && val !== ".") ||
    (inputVal.curVal.includes(".") && val === ".")
  )
    return;

  inputVal.curVal += val;
}

function calculate(val: number, operator: string): void {
  if (operator === "+") {
    inputVal.storedVal[0] += val;
  } else if (operator === "-") {
    inputVal.storedVal[0] -= val;
  } else if (operator === "x") {
    inputVal.storedVal[0] *= val;
  } else if (operator === "/") {
    inputVal.storedVal[0] /= val;
  }
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
