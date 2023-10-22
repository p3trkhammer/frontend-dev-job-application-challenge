<template>
  <div class="design">
    <header>
      <h1>Design your shirt</h1>
      <span>Price</span>
      <a><NuxtLink to="/checkout">Checkout</NuxtLink></a>
    </header>
    <br>
    <colorSelector></colorSelector>
    <br>
    <TShirt></TShirt>
    <br>
    <motive-selector></motive-selector>
    <br>
    <p>
      Design a shirt here
    </p>
    <br>
  </div>
</template>

<script setup lang="ts">



import MotiveSelector from "~/components/MotiveSelector.vue";
</script>

