<template>
  <div class="checkout">
    <header>
      <h1>Checkout</h1>
      <a><NuxtLink to="/">Back</NuxtLink></a>
    </header>
    <br>
    <p>
      This is your order
    </p>
    <p>
      Enter personal data
    </p>
    <br>
    <a><NuxtLink to="/orderSuccess">Buy</NuxtLink></a>
<!--    should not be a Router Link, but a button -> Post Method -> handling return Value -> Reroute to design page-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'checkout',
});
</script>
