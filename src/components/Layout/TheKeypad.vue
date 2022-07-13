<script setup lang="ts">
import {} from "./TheDisplayWindow.vue";

const emit = defineEmits(["get-key"]);

function keyClick(e: MouseEvent) {
  const buttonEl = e.currentTarget as HTMLDivElement;
  const action = buttonEl.textContent;
  emit("get-key", action);
}
</script>

<template>
  <section>
    <div class="seven" @click="keyClick"><p>7</p></div>
    <div class="eight" @click="keyClick"><p>8</p></div>
    <div class="nine" @click="keyClick"><p>9</p></div>
    <div class="delete uppercase" @click="keyClick"><p>del</p></div>
    <div class="four" @click="keyClick"><p>4</p></div>
    <div class="five" @click="keyClick"><p>5</p></div>
    <div class="six" @click="keyClick"><p>6</p></div>
    <div class="plus" @click="keyClick"><p>+</p></div>
    <div class="one" @click="keyClick"><p>1</p></div>
    <div class="two" @click="keyClick"><p>2</p></div>
    <div class="three" @click="keyClick"><p>3</p></div>
    <div class="minus" @click="keyClick"><p>-</p></div>
    <div class="dot" @click="keyClick"><p>.</p></div>
    <div class="zero" @click="keyClick"><p>0</p></div>
    <div class="slash" @click="keyClick"><p>/</p></div>
    <div class="multiply" @click="keyClick"><p>x</p></div>
    <div class="reset uppercase" @click="keyClick"><p>reset</p></div>
    <div class="equal" @click="keyClick"><p>=</p></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  @include container(1.5rem, 1.5rem, 100%);
  @include grid(0.8rem);
  @include desktop {
    @include container(2rem, 2rem, 100%);
    @include grid(1.5rem);
    row-gap: 2rem;
  }
  row-gap: 1.1rem;
  grid-template-areas:
    "seven eight nine delete" "four five six plus"
    "one two three minus" "dot zero slash multiply" "reset reset equal equal";
  background-color: $keypad-bg;
  border-radius: 8px;
}

section > div {
  position: relative;
  @include grid(0);
  font-size: $fs;
}

section > div > p {
  position: absolute;
  place-self: center;
  padding-top: 6px;
}

.seven {
  @include keyType-1(seven);
}

.eight {
  @include keyType-1(eight);
}

.nine {
  @include keyType-1(nine);
}

.delete {
  @include keyType-2(delete);
  font-size: 20px;
}

.four {
  @include keyType-1(four);
}

.five {
  @include keyType-1(five);
}

.six {
  @include keyType-1(six);
}

.plus {
  @include keyType-1(plus);
}

.one {
  @include keyType-1(one);
}

.two {
  @include keyType-1(two);
}

.three {
  @include keyType-1(three);
}

.minus {
  @include keyType-1(minus);
}

.dot {
  @include keyType-1(dot);
}

.zero {
  @include keyType-1(zero);
}

.slash {
  @include keyType-1(slash);
}

.multiply {
  @include keyType-1(multiply);
}

.reset {
  @include keyType-2(reset);
  font-size: 20px;
}

.equal {
  @include keyType-3(equal);
  font-size: 1.2rem;
}
</style>
