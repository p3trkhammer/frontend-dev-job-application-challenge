<template>
  <div class="design">
    <header>
      <h1>Design your shirt</h1>
      <span>Price</span>
      <a><NuxtLink to="/checkout">Checkout</NuxtLink></a>
    </header>
    <br>
    <p>
      Design a shirt here
    </p>
    <br>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'design',
});
</script>

