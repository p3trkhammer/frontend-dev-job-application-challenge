<template>
  <div class="orderSuccess">

    <p>
      Thank you for your Order
    </p>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <NuxtLink to="/">Design another shirt</NuxtLink>
    </button>

  </div>
</template>

<style>
.orderSuccess {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  height: 80vh;
}

.orderSuccess p {
  text-align: center;
  margin: 0;
  color: darkgrey;
  font-size: 30px;
}
</style>

<script setup lang="ts">

</script>
