<template>
  <div class="orderSuccess">
    <div class="flex-child">
      <p>
        Thank you for your Order
      </p>
    </div>
    <div class="flex-child">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <NuxtLink to="/">Design another shirt</NuxtLink>
    </button>
    </div>
  </div>
</template>

<style>
.orderSuccess {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.flex-child {
  flex: 1;
  padding: 10px;
  margin: 2px;
  max-width: 20%;
}
</style>

<script setup lang="ts">

</script>
