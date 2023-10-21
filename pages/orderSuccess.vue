<template>
  <div class="orderSuccess">
    <header>
      <h1>Order Success</h1>
      <a><NuxtLink to="/">Back</NuxtLink></a>
    </header>
    <br>
    <p>
      Thank you for your Order
    </p>
    <br>
    <a><NuxtLink to="/">Design another shirt</NuxtLink></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderSuccess',
});
</script>
